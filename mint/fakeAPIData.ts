// this is the table data that would be returned after the baseline inputs are set
export const wideData = [
    {
        "intervention": "none",
        "net_use": 0.2,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 0,
        "cases_averted_high": 0,
        "cases_averted_low": 0,

    },
    {
        "intervention": "none",
        "net_use": 0.4,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 0,
        "cases_averted_high": 0,
        "cases_averted_low": 0,
    },
    {
        "intervention": "none",
        "net_use": 0.6,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 0,
        "cases_averted_high": 0,
        "cases_averted_low": 0,
    },
    {
        "intervention": "none",
        "net_use": 0.8,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 0,
        "cases_averted_high": 0,
        "cases_averted_low": 0,
    },
    {
        "intervention": "ITN",
        "net_use": 0.2,
        "prev_year_1": 5.32,
        "prev_year_2": 5.34,
        "prev_year_3": 5.48,
        "cases_averted": 51,
        "cases_averted_high": 60,
        "cases_averted_low": 50,
    },
    {
        "intervention": "ITN",
        "net_use": 0.4,
        "prev_year_1": 4.32,
        "prev_year_2": 4.34,
        "prev_year_3": 4.48,
        "cases_averted": 52,
        "cases_averted_high": 60,
        "cases_averted_low": 50,
    },
    {
        "intervention": "ITN",
        "net_use": 0.6,
        "prev_year_1": 3.32,
        "prev_year_2": 3.34,
        "prev_year_3": 3.48,
        "cases_averted": 54,
        "cases_averted_high": 62,
        "cases_averted_low": 50,
    },
    {
        "intervention": "ITN",
        "net_use": 0.8,
        "prev_year_1": 2.32,
        "prev_year_2": 2.34,
        "prev_year_3": 2.48,
        "cases_averted": 55,
        "cases_averted_high": 62,
        "cases_averted_low": 50,
    },
    {
        "intervention": "PBO",
        "net_use": 0.2,
        "prev_year_1": 6.32,
        "prev_year_2": 6.34,
        "prev_year_3": 6.48,
        "cases_averted": 61,
        "cases_averted_high": 70,
        "cases_averted_low": 60,
    },
    {
        "intervention": "PBO",
        "net_use": 0.4,
        "prev_year_1": 5.32,
        "prev_year_2": 5.34,
        "prev_year_3": 5.48,
        "cases_averted": 62,
        "cases_averted_high": 72,
        "cases_averted_low": 60,
    },
    {
        "intervention": "PBO",
        "net_use": 0.6,
        "prev_year_1": 4.32,
        "prev_year_2": 4.34,
        "prev_year_3": 4.48,
        "cases_averted": 63,
        "cases_averted_high": 73,
        "cases_averted_low": 60,
    },
    {
        "intervention": "PBO",
        "net_use": 0.8,
        "prev_year_1": 3.32,
        "prev_year_2": 3.34,
        "prev_year_3": 3.48,
        "cases_averted": 64,
        "cases_averted_high": 74,
        "cases_averted_low": 60,
    },
    {
        "intervention": "IRS",
        "net_use": 0.2,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 70,
        "cases_averted_high": 72,
        "cases_averted_low": 60,
    },
    {
        "intervention": "IRS",
        "net_use": 0.4,
        "prev_year_1": 6.32,
        "prev_year_2": 6.34,
        "prev_year_3": 6.48,
        "cases_averted": 70,
        "cases_averted_high": 72,
        "cases_averted_low": 60,
    },
    {
        "intervention": "IRS",
        "net_use": 0.6,
        "prev_year_1": 5.32,
        "prev_year_2": 5.34,
        "prev_year_3": 5.48,
        "cases_averted": 74,
        "cases_averted_high": 80,
        "cases_averted_low": 60,
    },
    {
        "intervention": "IRS",
        "net_use": 0.8,
        "prev_year_1": 4.32,
        "prev_year_2": 4.34,
        "prev_year_3": 4.48,
        "cases_averted": 75,
        "cases_averted_high": 80,
        "cases_averted_low": 60,
    }
];

export const columns =
    {
        "intervention": "Intervention",
        "net_use": "Net use",
        "prev_year_1": "Prevalence Under 5 yrs: Yr 1 post intervention",
        "prev_year_2": "Prevalence Under 5 yrs: Yr 2 post intervention",
        "prev_year_3": "Prevalence Under 5 yrs: Yr 3 post intervention",
        "cases_averted": "Cases averted across 3 yrs since intervention",
        "cases_averted_high": "Upper bound for cases averted",
        "cases_averted_low": "Lower bound for cases averted"
    }

export interface SeriesDefinition {
    x?: any[]
    y?: any[],
    y_col?: string,
    x_col?: string,
    id?: string,
    id_col?: string,
    name?: string,
    type?: string
    [propName: string]: any;
}

export interface LongFormatSeriesMetadata {
    y_col: string,
    x_col: string,
    id_col: string
    format: "long"
}

export interface WideFormatSeriesMetadata {
    cols: string[],
    id_col: string
    format: "wide"
}

export type SeriesMetadata = LongFormatSeriesMetadata | WideFormatSeriesMetadata

export interface GraphDefinition {
    metadata?: SeriesMetadata
    series: SeriesDefinition[]
    layout: any
    config?: any
}

export const prevGraph: GraphDefinition = {
    metadata: {
        x_col: "month",
        y_col: "value",
        id_col: "intervention",
        format: "long"
    },
    series: [
        {
            id: "none",
            name: "No intervention",
            type: "lines",
            marker: {color: "grey"}
        },
        {
            id: "ITN",
            name: "Pyrethoid ITN",
            type: "lines",
            marker: {color: "blue"}
        },
        {
            id: "PBO",
            name: "Switch to Pyrethoid-PBO ITN",
            type: "lines",
            marker: {color: "aquamarine"}
        },
        {
            id: "IRS",
            name: "Only IRS",
            type: "lines",
            marker: {color: "purple"}
        },
        {
            id: "IRS + ITN",
            name: "Add IRS to Pyrethoid ITN",
            type: "lines",
            marker: {color: "darkred"}
        },
        {
            id: "IRS + PBO",
            name: "Add IRS to Pyrethoid-PBO ITN",
            type: "lines",
            marker: {color: "orange"}
        },
        {
            x: [12, 12],
            y: [0, 100],
            line: {
                dash: 'dot',
                width: 2,
                color: "grey"
            },
            name: "",
            showlegend: false,
            hoverinfo: "none"
        }
    ],
    layout: {
        title: "Projected prevalence in under 5 year olds",
        xaxis: {
            title: 'years of intervention',
            showline: true,
            tickvals: [12, 24, 36, 48],
            ticktext: [0, 1, 2, 3],
            autorange: true
        },
        yaxis: {
            title: 'prevalence (%)',
            showline: true,
            range: [0, 2],
            autorange: false
        }
    }
};

export const casesAvertedGraph: GraphDefinition =
    {
        metadata: {
            cols: ["cases_averted"],
            id_col: "intervention",
            format: "wide"
        },
        series: [
            {
                x: ["ITN"],
                id: "ITN",
                type: "bar",
                name: "Pyrethoid ITN",
                marker: {
                    color: "blue",
                    opacity: 0.5,
                },
                error_y: {
                    type: "data",
                    cols: ["cases_averted_high"],
                    colsminus: ["cases_averted_low"],
                    visible: true,
                    thickness: 1.5,
                    width: 0,
                    opacity: 1
                }
            },
            {
                x: ["PBO"],
                id: "PBO",
                type: "bar",
                name: "Switch to Pyrethoid-PBO ITN",
                marker: {
                    color: "aquamarine",
                    opacity: 0.5,
                },
                error_y: {
                    type: "data",
                    cols: ["cases_averted_high"],
                    colsminus: ["cases_averted_low"],
                    visible: true,
                    thickness: 1.5,
                    width: 0,
                    opacity: 1
                }
            },
            {
                x: ["IRS"],
                id: "IRS",
                name: "Only IRS",
                type: "bar",
                marker: {
                    color: "purple",
                    opacity: 0.5,
                },
                error_y: {
                    type: "data",
                    cols: ["cases_averted_high"],
                    colsminus: ["cases_averted_low"],
                    visible: true,
                    thickness: 1.5,
                    width: 0,
                    opacity: 1
                }
            }
        ],
        layout: {
            title: "Clinical cases averted per 1,000 people per year",
            yaxis: {
                title: "cases averted",
                showline: true,
                range: [0, 300],
                autorange: false
            },
            xaxis: {
                title: 'intervention',
                showline: true,
                tickvals: ["ITN", "PBO", "IRS"],
                ticktext: ["ITN", "PBO", "IRS"],
                autorange: true
            },
            showlegend: true
        }
    };

export const settings = [
    {
        id: "net_use",
        label: "Net use",
        value: 0.2,
        options: [
            {value: 0.2, label: "20%"},
            {value: 0.4, label: "40%"},
            {value: 0.6, label: "60%"},
            {value: 0.8, label: "80%"}
        ]
    },
    {
        id: "irs_use",
        label: "IRS use",
        value: 0,
        options: [
            {value: 0, label: "0"},
            {value: 0.6, label: "60%"},
            {value: 0.7, label: "70%"},
            {value: 0.8, label: "80%"},
            {value: 0.9, label: "90%"},
            {value: 1, label: "100%"}
        ]
    }
];
