import ModelSettingsSchemaRenderer from "./ModelSettingsSchemaRenderer";
import { GenericPropertiesSchema } from "../../../utils/promptUtils";
import { Flex, Text, createStyles } from "@mantine/core";
import { JSONObject } from "aiconfig";
import { memo, useState } from "react";
import JSONRenderer from "../../JSONRenderer";
import JSONEditorToggleButton from "../../JSONEditorToggleButton";
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";

type Props = {
  model?: string;
  settings?: JSONObject;
  schema?: GenericPropertiesSchema;
  onUpdateModelSettings: (settings: Record<string, unknown>) => void;
};

const useStyles = createStyles(() => ({
  settingsContainer: {
    overflow: "auto",
    paddingTop: "0.5em",
    width: "100%",
  },
}));

type ErrorFallbackProps = {
  settings?: JSONObject;
  toggleJSONEditor: () => void;
};

function SettingsErrorFallback({
  settings,
  toggleJSONEditor,
}: ErrorFallbackProps) {
  const { resetBoundary: clearRenderError } = useErrorBoundary();
  return (
    <Flex direction="column">
      <Text color="red" size="sm">
        <Flex justify="flex-end">
          <JSONEditorToggleButton
            isRawJSON={false}
            setIsRawJSON={() => {
              clearRenderError();
              toggleJSONEditor();
            }}
          />
        </Flex>
        Invalid settings format for model. Toggle JSON editor to update. Set to
        {" {}"} in JSON editor and toggle back to reset.
      </Text>
      <JSONRenderer content={settings} />
    </Flex>
  );
}

export default memo(function ModelSettingsRenderer({
  model,
  settings,
  schema,
  onUpdateModelSettings,
}: Props) {
  const { classes } = useStyles();
  const [isRawJSON, setIsRawJSON] = useState(schema == null);

  const rawJSONToggleButton = (
    <Flex justify="flex-end">
      <JSONEditorToggleButton
        isRawJSON={isRawJSON}
        setIsRawJSON={setIsRawJSON}
      />
    </Flex>
  );

  return (
    <Flex direction="column" className={classes.settingsContainer}>
      {isRawJSON || !schema ? (
        <>
          {/* // Only show the toggle if there is a schema to toggle between JSON and custom schema renderer */}
          {schema && rawJSONToggleButton}
          <JSONRenderer
            // Use the model name as the key to force re-mount / updated state when model changes
            key={model}
            content={settings}
            onChange={(val) =>
              onUpdateModelSettings(val as Record<string, unknown>)
            }
            // schema={schema} TODO: Add schema after fixing z-index issue
          />
        </>
      ) : (
        <ErrorBoundary
          fallbackRender={() => (
            <SettingsErrorFallback
              settings={settings}
              toggleJSONEditor={() => setIsRawJSON(true)}
            />
          )}
        >
          {rawJSONToggleButton}
          <ModelSettingsSchemaRenderer
            // Use the model name as the key to force re-mount / updated state when model changes
            key={model}
            settings={settings}
            schema={schema}
            onUpdateModelSettings={onUpdateModelSettings}
          />
        </ErrorBoundary>
      )}
    </Flex>
  );
});
