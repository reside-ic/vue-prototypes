export interface BarMetadata {
    indicators: BarIndicator[],
    filters: BarMetadataFilter[]
}

export interface BarIndicator {
    indicator: string,
    value_column: string,
    indicator_column: string,
    indicator_value: string,
    name: string,
    error_low_column: string,
    error_high_column: string
}

export interface BarMetadataFilter {
    id: string,
    label: string,
    use_shape_regions?: boolean
}


//Taken from generated.d.ts
export interface FilterOption {
    label: string;
    id: string;
}

//A generic type for the component to use containing the filter options for each filter column returned in the output data
//These should be taken from ModelResultResponse and passed to the component by an outer component in Hint
//This is a simplification as we will also have to deal with nested filters
export interface DataFilters {
    [k: string]: FilterOption[]
}