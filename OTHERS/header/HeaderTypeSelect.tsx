import { Select } from "@/components/Select";
import {
  headerOptions,
  TEMPLATE_INFO,
} from "@/constants/templatesFormConstants";
import { Control } from "react-hook-form";

interface HeaderTypeSelectProps {
  control: Control<any>;
  selectedTypeHeader: string;
  handleSelectHeaderType: (value: string) => void;
}

export const HeaderTypeSelect = ({
  control,
  selectedTypeHeader,
  handleSelectHeaderType,
}: HeaderTypeSelectProps) => {
  return (
    <div className="space-y-1 pb-4">
      <label
        htmlFor={TEMPLATE_INFO.HEADER_DESCRIPTIONS.LABEL_TYPE}
        className={`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300`}
      >
        {TEMPLATE_INFO.HEADER_DESCRIPTIONS.LABEL_TYPE}
      </label>
      <Select
        placeholder="Selecione o tipo de cabeçalho"
        id="header_type"
        name="header_type"
        control={control}
        options={headerOptions}
        setSelectedOption={handleSelectHeaderType}
        defaultValue={selectedTypeHeader || "0"}
      />
    </div>
  );
};
