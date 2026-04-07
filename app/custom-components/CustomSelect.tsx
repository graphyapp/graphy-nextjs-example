import { SelectComponent, SelectComponentOption } from "@graphysdk/editor";
import { useCallback, useMemo } from "react";
import { createListCollection, Portal, Select, Tokens } from "@chakra-ui/react";
import { SelectWidth } from "@graphysdk/core";

const MAP_WIDTH_TO_CHAKRA_WIDTH: Record<
  SelectWidth,
  Tokens["sizes"] | undefined
> = {
  "fit-content": "fit",
  auto: undefined,
  fill: "full",
};

export const CustomSelect: SelectComponent = (props) => {
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    hasError,
    isDisabled,
    onBlur,
    onChange,
    options,
    placeholder,
    renderOption,
    renderSelectedOption,
    value,
    width,
  } = props;

  const handleValueChange = useCallback(
    (details: { value: string[] }) => {
      onChange?.(details.value[0]);
    },
    [onChange],
  );

  const selectedOption = useMemo(() => {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption) return selectedOption;
    
    return value ? { value, label: value } : undefined;
  }, [options, value]);

  const collection = createListCollection({
    items: options,
    itemToString: (item) => item.label,
    itemToValue: (item) => String(item.value),
  });

  return (
    <Select.Root
      collection={collection}
      value={value != null ? [String(value)] : []}
      onValueChange={handleValueChange}
      disabled={isDisabled}
      width={width ? MAP_WIDTH_TO_CHAKRA_WIDTH[width] : undefined}
    >
      <Select.Trigger
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        onBlur={onBlur}
        borderWidth="2px"
        borderColor={hasError ? "red.500" : "blue.500"}
        bg={hasError ? "red.50" : "blue.50"}
        borderRadius="lg"
        px="3"
        py="2"
        fontSize="sm"
        fontWeight="medium"
        color="indigo.950"
        cursor={isDisabled ? "not-allowed" : "pointer"}
        opacity={isDisabled ? 0.5 : 1}
      >
        {selectedOption && renderSelectedOption ? (
          renderSelectedOption(selectedOption)
        ) : (
          <Select.ValueText placeholder={placeholder ?? "Select..."} />
        )}
        <Select.Indicator />
      </Select.Trigger>

      <Portal>
        <Select.Positioner
          width="fit-content"
          minWidth="var(--reference-width)"
        >
          <Select.Content
            width="fit-content"
            minWidth="var(--reference-width)"
            borderWidth="2px"
            borderColor="indigo.500"
            borderRadius="lg"
            bg="white"
            boxShadow="lg"
            overflow="hidden"
            fontSize="sm"
            zIndex="popover"
          >
            {options.map((option) => (
              <SelectItem
                key={String(option.value)}
                option={option}
                renderOption={renderOption}
              />
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

const SelectItem = ({
  option,
  renderOption,
}: {
  option: SelectComponentOption;
  renderOption?: (option: SelectComponentOption) => React.ReactNode;
}) => (
  <Select.Item
    item={option}
    pl="3"
    pr="8"
    py="2.5"
    cursor="pointer"
    borderBottomWidth="1px"
    borderColor="indigo.100"
    position="relative"
    _last={{ borderBottomWidth: "0" }}
    _highlighted={{ bg: "indigo.50" }}
    _checked={{ bg: "indigo.50", fontWeight: "semibold", color: "indigo.700" }}
    flexDirection="column"
    alignItems="flex-start"
  >
    <Select.ItemText>
      {renderOption ? renderOption(option) : option.label}
    </Select.ItemText>
    {option.description && (
      <span style={{ fontSize: "12px", color: "#6b7280", marginTop: "2px" }}>
        {option.description}
      </span>
    )}
    <Select.ItemIndicator
      color="indigo.500"
      fontSize="xs"
      position="absolute"
      right="3"
      top="50%"
      transform="translateY(-50%)"
    />
  </Select.Item>
);
