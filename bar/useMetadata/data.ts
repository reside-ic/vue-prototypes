import {BarMetadata, DataFilters} from "./types";

export const sampleMetadata: BarMetadata = {
    indicators: [
        {
            indicator: "art_coverage",
            value_column: "mean",
            indicator_column: "indicator",
            indicator_value: "2",
            name: "ART coverage",
            error_low_column: "low",
            error_high_column: "high"
        },
        {
            indicator: "incidence",
            value_column: "mean",
            indicator_column: "indicator",
            indicator_value: "3",
            name: "Incidence",
            error_low_column: "low",
            error_high_column: "high"
        }
    ],
    filters: [
        {
            id: "age_group",
            label: "Age group"
        },
        {
            id: "region",
            label: "Region",

        },
        {
            id: "sex",
            label: "Sex"
        },

    ]
};

//NB in real metadata, region filters would come from shape response
export const sampleDataFilters: DataFilters  = {
    age_group: [
        {id: '0-4', label: '0-4'},
        {id: '5-9', label: '5-9'},
        {id: '10-14', label: '10-14'},
        {id: '15-19', label: '15-19'},
        {id: '20-24', label: '20-24'},
        {id: '25-29', label: '25-29'},
        {id: '30-34', label: '30-34'},
        {id: '35-39', label: '35-39'},
        {id: '40-44', label: '40-44'},
        {id: '45-49', label: '45-49'},
        {id: '50-54', label: '50-54'},
        {id: '55-59', label: '55-59'},
    ],
    sex: [
        {id: 'male', label: 'male'},
        {id: 'female', label: 'female'}
    ],
    region: [
        {id: '1', label: 'Northern'},
        {id: '2', label: 'Central'},
        {id: '3', label: 'Southern'}
    ]
};

export const sampleData = [
    {region: '1', age_group: '0-4', sex: 'female', indicator: '2', mean: 0.40, high:0.43, low: 0.38},
    {region: '1', age_group: '5-9', sex: 'female', indicator: '2', mean: 0.20, high:0.24, low: 0.16},
    {region: '1', age_group: '10-14', sex: 'female', indicator: '2', mean: 0.12, high: 0.17, low: 0.11},
    {region: '1', age_group: '15-19', sex: 'female', indicator: '2', mean: 0.39, high: 0.41, low: 0.38},
    {region: '1', age_group: '20-24', sex: 'female', indicator: '2', mean: 0.10, high: 0.12, low: 0.08},
    {region: '1', age_group: '25-29', sex: 'female', indicator: '2', mean: 0.40, high: 0.43, low: 0.39},
    {region: '1', age_group: '30-34', sex: 'female', indicator: '2', mean: 0.39, high: 0.41, low: 0.36},
    {region: '1', age_group: '35-39', sex: 'female', indicator: '2', mean: 0.50, high: 0.55, low: 0.48},
    {region: '1', age_group: '40-44', sex: 'female', indicator: '2', mean: 0.40, high: 0.42, low: 0.38},
    {region: '1', age_group: '45-49', sex: 'female', indicator: '2', mean: 0.20, high: 0.23, low: 0.18},
    {region: '1', age_group: '50-54', sex: 'female', indicator: '2', mean: 0.12, high: 0.13, low: 0.10},
    {region: '1', age_group: '55-59', sex: 'female', indicator: '2', mean: 0.11, high: 0.15, low: 0.09},

    {region: '1', age_group: '0-4', sex: 'male', indicator: '2', mean: 0.35, high:0.40, low: 0.34},
    {region: '1', age_group: '5-9', sex: 'male', indicator: '2', mean: 0.25, high:0.28, low: 0.21},
    {region: '1', age_group: '10-14', sex: 'male', indicator: '2', mean: 0.15, high: 0.17, low: 0.11},
    {region: '1', age_group: '15-19', sex: 'male', indicator: '2', mean: 0.44, high: 0.48, low: 0.41},
    {region: '1', age_group: '20-24', sex: 'male', indicator: '2', mean: 0.08, high: 0.11, low: 0.06},
    {region: '1', age_group: '25-29', sex: 'male', indicator: '2', mean: 0.41, high: 0.42, low: 0.40},
    {region: '1', age_group: '30-34', sex: 'male', indicator: '2', mean: 0.35, high: 0.37, low: 0.33},
    {region: '1', age_group: '35-39', sex: 'male', indicator: '2', mean: 0.46, high: 0.48, low: 0.42},
    {region: '1', age_group: '40-44', sex: 'male', indicator: '2', mean: 0.32, high: 0.37, low: 0.25},
    {region: '1', age_group: '45-49', sex: 'male', indicator: '2', mean: 0.26, high: 0.29, low: 0.25},
    {region: '1', age_group: '50-54', sex: 'male', indicator: '2', mean: 0.15, high: 0.18, low: 0.13},
    {region: '1', age_group: '55-59', sex: 'male', indicator: '2', mean: 0.14, high: 0.15, low: 0.11},


    {region: '1', age_group: '0-4', sex: 'female', indicator: '3', mean: 0.20, high:0.22, low: 0.18},
    {region: '1', age_group: '5-9', sex: 'female', indicator: '3', mean: 0.10, high:0.14, low: 0.06},
    {region: '1', age_group: '10-14', sex: 'female', indicator: '3', mean: 0.12, high: 0.12, low: 0.08},
    {region: '1', age_group: '15-19', sex: 'female', indicator: '3', mean: 0.09, high: 0.11, low: 0.08},
    {region: '1', age_group: '20-24', sex: 'female', indicator: '3', mean: 0.08, high: 0.11, low: 0.05},
    {region: '1', age_group: '25-29', sex: 'female', indicator: '3', mean: 0.20, high: 0.22, low: 0.17},
    {region: '1', age_group: '30-34', sex: 'female', indicator: '3', mean: 0.16, high: 0.19, low: 0.11},
    {region: '1', age_group: '35-39', sex: 'female', indicator: '3', mean: 0.19, high: 0.24, low: 0.14},
    {region: '1', age_group: '40-44', sex: 'female', indicator: '3', mean: 0.21, high: 0.28, low: 0.13},
    {region: '1', age_group: '45-49', sex: 'female', indicator: '3', mean: 0.1, high: 0.13, low: 0.08},
    {region: '1', age_group: '50-54', sex: 'female', indicator: '3', mean: 0.08, high: 0.03, low: 0.10},
    {region: '1', age_group: '55-59', sex: 'female', indicator: '3', mean: 0.06, high: 0.11, low: 0.02},

    {region: '1', age_group: '0-4', sex: 'male', indicator: '3', mean: 0.25, high:0.30, low: 0.21},
    {region: '1', age_group: '5-9', sex: 'male', indicator: '3', mean: 0.15, high:0.2, low: 0.13},
    {region: '1', age_group: '10-14', sex: 'male', indicator: '3', mean: 0.1, high: 0.13, low: 0.05},
    {region: '1', age_group: '15-19', sex: 'male', indicator: '3', mean: 0.14, high: 0.04, low: 0.15},
    {region: '1', age_group: '20-24', sex: 'male', indicator: '3', mean: 0.2, high: 0.21, low: 0.19},
    {region: '1', age_group: '25-29', sex: 'male', indicator: '3', mean: 0.11, high: 0.12, low: 0.07},
    {region: '1', age_group: '30-34', sex: 'male', indicator: '3', mean: 0.15, high: 0.17, low: 0.13},
    {region: '1', age_group: '35-39', sex: 'male', indicator: '3', mean: 0.19, high: 0.23, low: 0.12},
    {region: '1', age_group: '40-44', sex: 'male', indicator: '3', mean: 0.22, high: 0.24, low: 0.2},
    {region: '1', age_group: '45-49', sex: 'male', indicator: '3', mean: 0.28, high: 0.29, low: 0.25},
    {region: '1', age_group: '50-54', sex: 'male', indicator: '3', mean: 0.25, high: 0.28, low: 0.13},
    {region: '1', age_group: '55-59', sex: 'male', indicator: '3', mean: 0.11, high: 0.15, low: 0.09},



    {region: '2', age_group: '0-4', sex: 'female', indicator: '2', mean: 0.50, high:0.53, low: 0.48},
    {region: '2', age_group: '5-9', sex: 'female', indicator: '2', mean: 0.25, high:0.29, low: 0.21},
    {region: '2', age_group: '10-14', sex: 'female', indicator: '2', mean: 0.15, high: 0.21, low: 0.13},
    {region: '2', age_group: '15-19', sex: 'female', indicator: '2', mean: 0.49, high: 0.57, low: 0.48},
    {region: '2', age_group: '20-24', sex: 'female', indicator: '2', mean: 0.20, high: 0.22, low: 0.18},
    {region: '2', age_group: '25-29', sex: 'female', indicator: '2', mean: 0.50, high: 0.53, low: 0.49},
    {region: '2', age_group: '30-34', sex: 'female', indicator: '2', mean: 0.49, high: 0.55, low: 0.46},
    {region: '2', age_group: '35-39', sex: 'female', indicator: '2', mean: 0.60, high: 0.65, low: 0.58},
    {region: '2', age_group: '40-44', sex: 'female', indicator: '2', mean: 0.50, high: 0.52, low: 0.48},
    {region: '2', age_group: '45-49', sex: 'female', indicator: '2', mean: 0.30, high: 0.33, low: 0.28},
    {region: '2', age_group: '50-54', sex: 'female', indicator: '2', mean: 0.22, high: 0.25, low: 0.20},
    {region: '2', age_group: '55-59', sex: 'female', indicator: '2', mean: 0.21, high: 0.25, low: 0.01},

    {region: '2', age_group: '0-4', sex: 'male', indicator: '2', mean: 0.45, high:0.50, low: 0.44},
    {region: '2', age_group: '5-9', sex: 'male', indicator: '2', mean: 0.3, high:0.38, low: 0.25},
    {region: '2', age_group: '10-14', sex: 'male', indicator: '2', mean: 0.25, high: 0.27, low: 0.21},
    {region: '2', age_group: '15-19', sex: 'male', indicator: '2', mean: 0.54, high: 0.58, low: 0.48},
    {region: '2', age_group: '20-24', sex: 'male', indicator: '2', mean: 0.3, high: 0.31, low: 0.26},
    {region: '2', age_group: '25-29', sex: 'male', indicator: '2', mean: 0.31, high: 0.22, low: 0.30},
    {region: '2', age_group: '30-34', sex: 'male', indicator: '2', mean: 0.25, high: 0.27, low: 0.23},
    {region: '2', age_group: '35-39', sex: 'male', indicator: '2', mean: 0.36, high: 0.38, low: 0.32},
    {region: '2', age_group: '40-44', sex: 'male', indicator: '2', mean: 0.12, high: 0.17, low: 0.07},
    {region: '2', age_group: '45-49', sex: 'male', indicator: '2', mean: 0.2, high: 0.21, low: 0.1},
    {region: '2', age_group: '50-54', sex: 'male', indicator: '2', mean: 0.25, high: 0.28, low: 0.23},
    {region: '2', age_group: '55-59', sex: 'male', indicator: '2', mean: 0.24, high: 0.25, low: 0.21},


    {region: '2', age_group: '0-4', sex: 'female', indicator: '3', mean: 0.30, high:0.32, low: 0.28},
    {region: '2', age_group: '5-9', sex: 'female', indicator: '3', mean: 0.20, high:0.34, low: 0.16},
    {region: '2', age_group: '10-14', sex: 'female', indicator: '3', mean: 0.22, high: 0.22, low: 0.18},
    {region: '2', age_group: '15-19', sex: 'female', indicator: '3', mean: 0.29, high: 0.31, low: 0.28},
    {region: '2', age_group: '20-24', sex: 'female', indicator: '3', mean: 0.18, high: 0.21, low: 0.01},
    {region: '2', age_group: '25-29', sex: 'female', indicator: '3', mean: 0.30, high: 0.32, low: 0.27},
    {region: '2', age_group: '30-34', sex: 'female', indicator: '3', mean: 0.1, high: 0.14, low: 0.1},
    {region: '2', age_group: '35-39', sex: 'female', indicator: '3', mean: 0.29, high: 0.34, low: 0.24},
    {region: '2', age_group: '40-44', sex: 'female', indicator: '3', mean: 0.31, high: 0.33, low: 0.29},
    {region: '2', age_group: '45-49', sex: 'female', indicator: '3', mean: 0.2, high: 0.23, low: 0.18},
    {region: '2', age_group: '50-54', sex: 'female', indicator: '3', mean: 0.28, high: 0.3, low: 0.21},
    {region: '2', age_group: '55-59', sex: 'female', indicator: '3', mean: 0.1, high: 0.11, low: 0.07},

    {region: '2', age_group: '0-4', sex: 'male', indicator: '3', mean: 0.35, high:0.33, low: 0.31},
    {region: '2', age_group: '5-9', sex: 'male', indicator: '3', mean: 0.25, high:0.29, low: 0.23},
    {region: '2', age_group: '10-14', sex: 'male', indicator: '3', mean: 0.14, high: 0.19, low: 0.12},
    {region: '2', age_group: '15-19', sex: 'male', indicator: '3', mean: 0.15, high: 0.16, low: 0.15},
    {region: '2', age_group: '20-24', sex: 'male', indicator: '3', mean: 0.3, high: 0.23, low: 0.29},
    {region: '2', age_group: '25-29', sex: 'male', indicator: '3', mean: 0.31, high: 0.35, low: 0.27},
    {region: '2', age_group: '30-34', sex: 'male', indicator: '3', mean: 0.25, high: 0.27, low: 0.23},
    {region: '2', age_group: '35-39', sex: 'male', indicator: '3', mean: 0.29, high: 0.33, low: 0.22},
    {region: '2', age_group: '40-44', sex: 'male', indicator: '3', mean: 0.32, high: 0.34, low: 0.3},
    {region: '2', age_group: '45-49', sex: 'male', indicator: '3', mean: 0.2, high: 0.22, low: 0.15},
    {region: '2', age_group: '50-54', sex: 'male', indicator: '3', mean: 0.15, high: 0.18, low: 0.13},
    {region: '2', age_group: '55-59', sex: 'male', indicator: '3', mean: 0.2, high: 0.25, low: 0.19},


];

export const colors = [
    //d3 chromatic schemeSet1
    '#e41a1c',
    '#377eb8',
    '#4daf4a',
    '#984ea3',
    '#ff7f00',
    '#ffff33',
    '#a65628',
    '#f781bf',
    '#999999',
    //d3 chromatic schemeDark2
    '#1b9e77',
    '#d95f02',
    '#7570b3',
    '#e7298a',
    '#66a61e',
    '#e6ab02',
    '#a6761d',
    '#666666'
    //TODO: Also include Cat10 and Tableau10
];
