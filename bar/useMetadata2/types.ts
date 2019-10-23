export interface Indicator {
    indicator: string,
    value_column: string,
    indicator_column: string,
    indicator_value: string,
    name: string,
    error_low_column: string,
    error_high_column: string
}

export interface FilterOption {
    label: string;
    id: string;
}

export interface Filter {
    id: string,
    label: string,
    options: FilterOption[]
}
