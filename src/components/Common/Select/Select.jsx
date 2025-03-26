import cn from "classnames";
import Select from "react-select";

const containerStyles = "w-full";
const selectInputStyles = "bg-transparent !text-white";
const controlStyles = "w-full rounded-md min-h-[36px]";
const valueContainerStyles = "w-full relative";
const placeholderStyles = "text-sm";
const indicatorSeparatorStyles = "!bg-white/10";
const dropdownIndicatorStyles = "";
const indicatorsContainerStyles = "!cursor-pointer";
const menuStyles = [
  "!bg-zinc-800 !border !border-zinc-700",
  "[&>div]:!scrollbar-track-rounded-full [&>div]:!scrollbar-thumb-rounded-full [&>div]:!scrollbar-thin [&>div]:!scrollbar-track-transparent [&>div]:!scrollbar-thumb-lime-300"
].join(" ");
// const menuStyles = "!bg-zinc-800 !border !border-zinc-700";
const optionStyles = {
  base: "!text-white hover:cursor-pointer !bg-transparent hover:!bg-primary hover:!bg-opacity-10 px-3 py-2",
  focus: "!bg-primary !bg-opacity-10",
  selected: "!bg-primary !bg-opacity-10"
};
const singleValueStyles = "!text-white";

const defaultClassNames = {
  container: () => containerStyles,
  control: ({ isFocused }) => controlStyles,
  input: () => selectInputStyles,
  placeholder: () => placeholderStyles,
  valueContainer: () => valueContainerStyles,
  indicatorSeparator: () => indicatorSeparatorStyles,
  dropdownIndicator: () => dropdownIndicatorStyles,
  indicatorsContainer: () => indicatorsContainerStyles,
  singleValue: () => singleValueStyles,
  menu: () => menuStyles,
  option: ({ isFocused, isSelected }) => {
    return cn(
      isFocused && optionStyles.focus,
      isSelected && optionStyles.selected,
      optionStyles.base
    );
  }
};

const SelectNew = ({ classNames, ...props }) => {
  return (
    <Select classNames={{ ...defaultClassNames, ...classNames }} {...props} />
  );
};

export default SelectNew;
