import {
  headerOptions,
  Options,
  TEMPLATE_INFO,
  TEMPLATE_PLACEHOLDERS,
} from "@/constants/templatesFormConstants";
import { ContainerSection } from "../common/ContainerSection";
import ActionButton from "../common/ActionButton";
import { HeaderTypeSelect } from "./HeaderTypeSelect";
import { TextField } from "@/components/TextField";
import { WhatsAppEditorProps } from "../editor/WhatsAppEditor";
import HeaderVariableSection from "./HeaderVariableSection";
import HeaderCharCount from "./HeaderCharCount";

const HeaderSection = ({
  template,
  control,
  setValue,
  headerVariable,
  handleSelectHeaderType,
  removeHeaderVariable,
  selectedTypeHeader,
  handleHeaderAddVariable,
  watch,
}: WhatsAppEditorProps) => {
  const HeaderType = headerOptions.find(
    (option) => option.id === Number(selectedTypeHeader),
  );

  // const [headerVariable, setHeaderVariable] = useState<"1" | "">(
  //   template?.metadata?.header_text?.includes("{{1}}") ? "1" : "",
  // );

  // const watchedHeaderText = watch("metadata.header_text");

  // const handleHeaderAddVariable = () => {
  //   if (headerVariable === "1") return;

  //   const currentHeaderText = watch("metadata.header_text") ?? "";
  //   const variableRegex = /\{\{(\d+)\}\}/g;

  //   const matches = [...currentHeaderText.matchAll(variableRegex)];
  //   const nextVariableNumber =
  //     matches.length > 0
  //       ? Math.max(...matches.map((m) => parseInt(m[1], 10))) + 1
  //       : 1;

  //   const updatedHeaderText =
  //     `${currentHeaderText} {{${nextVariableNumber}}}`.trim();

  //   setValue("metadata.header_text", updatedHeaderText);
  //   setValue("metadata.header_text_example", ""); // zera exemplo se necessário
  //   setHeaderVariable("1");
  // };

  // const removeHeaderVariable = () => {
  //   const currentHeaderText = watch("metadata.header_text") ?? "";

  //   const updatedHeaderText = currentHeaderText
  //     .replace(new RegExp(`\\s*\\{\\{${headerVariable}\\}\\}`, "g"), "")
  //     .replace(/[ \t]+/g, " ")
  //     .replace(/\n{2,}/g, "\n")
  //     .trim();

  //   setValue("metadata.header_text", updatedHeaderText);
  //   setValue("metadata.header_text_example", ""); // zera exemplo
  //   setHeaderVariable("");
  // };

  // // 🧠 Sincroniza variável única do header com o conteúdo de texto
  // useEffect(() => {
  //   const match = watchedHeaderText?.match(/\{\{(\d+)\}\}/);

  //   // Se encontrou uma variável e não existe ainda
  //   if (match && !headerVariable) {
  //     handleHeaderAddVariable(); // adiciona a variável
  //   }

  //   // Se removeu a variável do texto
  //   if (!match && headerVariable) {
  //     removeHeaderVariable(); // remove a variável
  //   }

  //   // Limita para apenas UMA variável: se tiver mais que uma, remove extras do texto
  //   if (watchedHeaderText) {
  //     const allMatches = [...watchedHeaderText.matchAll(/\{\{(\d+)\}\}/g)];

  //     if (allMatches.length > 1) {
  //       const [first] = allMatches;
  //       const sanitized = watchedHeaderText.replace(
  //         /\{\{(\d+)\}\}/g,
  //         (_, p1, offset) =>
  //           offset === first.index ? `{{${p1}}}` : "", // mantém só a primeira ocorrência
  //       );

  //       requestAnimationFrame(() => {
  //         setValue("metadata.header_text", sanitized);
  //       });
  //     }
  //   }
  // }, [watchedHeaderText, headerVariable, setValue, handleHeaderAddVariable, removeHeaderVariable]);
  return (
    <ContainerSection className="border-t border-gray-200 px-4 dark:border-gray-700 dark:bg-secondary-dark">
      <HeaderTypeSelect
        control={control}
        selectedTypeHeader={selectedTypeHeader}
        handleSelectHeaderType={handleSelectHeaderType}
      />

      {HeaderType?.name !== "Nenhum" && (
        <div className="space-y-4">
          <div className="relative">
            <TextField
              label={TEMPLATE_INFO.HEADER_DESCRIPTIONS.TITLE}
              control={control}
              id="metadata.header_text"
              name="metadata.header_text"
              placeholder={TEMPLATE_PLACEHOLDERS.HEADER}
              defaultValue={template?.metadata?.header_text ?? ""}
            />

            <HeaderCharCount control={control} />
          </div>
          {!headerVariable && (
            <div className="flex justify-end">
              <ActionButton
                onClick={handleHeaderAddVariable}
                label={TEMPLATE_INFO.BUTTON_SECTION_TEXTS.BUTTON.ADD_VARIABLE}
                icon="Plus"
                aria-label="Adicionar variável"
              />
            </div>
          )}
        </div>
      )}

      <HeaderVariableSection
        headerVariable={headerVariable}
        removeHeaderVariable={removeHeaderVariable}
        setValue={setValue}
        watch={watch}
        control={control}
      />
    </ContainerSection>
  );
};

export default HeaderSection;



  );

  // const [headerVariable, setHeaderVariable] = useState<"1" | "">(
  //   template?.metadata?.header_text?.includes("{{1}}") ? "1" : "",
  // );

  // const watchedHeaderText = watch("metadata.header_text");

  // const handleHeaderAddVariable = () => {
  //   if (headerVariable === "1") return;

  //   const currentHeaderText = watch("metadata.header_text") ?? "";
  //   const variableRegex = /\{\{(\d+)\}\}/g;

  //   const matches = [...currentHeaderText.matchAll(variableRegex)];
  //   const nextVariableNumber =
  //     matches.length > 0
  //       ? Math.max(...matches.map((m) => parseInt(m[1], 10))) + 1
  //       : 1;

  //   const updatedHeaderText =
  //     `${currentHeaderText} {{${nextVariableNumber}}}`.trim();

  //   setValue("metadata.header_text", updatedHeaderText);
  //   setValue("metadata.header_text_example", ""); // zera exemplo se necessário
  //   setHeaderVariable("1");
  // };

  // const removeHeaderVariable = () => {
  //   const currentHeaderText = watch("metadata.header_text") ?? "";

  //   const updatedHeaderText = currentHeaderText
  //     .replace(new RegExp(`\\s*\\{\\{${headerVariable}\\}\\}`, "g"), "")
  //     .replace(/[ \t]+/g, " ")
  //     .replace(/\n{2,}/g, "\n")
  //     .trim();

  //   setValue("metadata.header_text", updatedHeaderText);
  //   setValue("metadata.header_text_example", ""); // zera exemplo
  //   setHeaderVariable("");
  // };

  // // 🧠 Sincroniza variável única do header com o conteúdo de texto
  // useEffect(() => {
  //   const match = watchedHeaderText?.match(/\{\{(\d+)\}\}/);

  //   // Se encontrou uma variável e não existe ainda
  //   if (match && !headerVariable) {
  //     handleHeaderAddVariable(); // adiciona a variável
  //   }

  //   // Se removeu a variável do texto
  //   if (!match && headerVariable) {
  //     removeHeaderVariable(); // remove a variável
  //   }

  //   // Limita para apenas UMA variável: se tiver mais que uma, remove extras do texto
  //   if (watchedHeaderText) {
  //     const allMatches = [...watchedHeaderText.matchAll(/\{\{(\d+)\}\}/g)];

  //     if (allMatches.length > 1) {
  //       const [first] = allMatches;
  //       const sanitized = watchedHeaderText.replace(
  //         /\{\{(\d+)\}\}/g,
  //         (_, p1, offset) =>
  //           offset === first.index ? `{{${p1}}}` : "", // mantém só a primeira ocorrência
  //       );

  //       requestAnimationFrame(() => {
  //         setValue("metadata.header_text", sanitized);
  //       });
  //     }
  //   }
  // }, [watchedHeaderText, headerVariable, setValue, handleHeaderAddVariable, removeHeaderVariable]);