// this is the table data that would be returned after the baseline inputs are set
export const tableData = [
    {
        "intervention": "none",
        "net_use": 20,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 0,
        "cases_averted_high": 0,
        "cases_averted_low": 0,

    },
    {
        "intervention": "none",
        "net_use": 40,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 0,
        "cases_averted_high": 0,
        "cases_averted_low": 0,
    },
    {
        "intervention": "none",
        "net_use": 60,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 0,
        "cases_averted_high": 0,
        "cases_averted_low": 0,
    },
    {
        "intervention": "none",
        "net_use": 80,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 0,
        "cases_averted_high": 0,
        "cases_averted_low": 0,
    },
    {
        "intervention": "ITN",
        "net_use": 20,
        "prev_year_1": 5.32,
        "prev_year_2": 5.34,
        "prev_year_3": 5.48,
        "cases_averted": 51,
        "cases_averted_high": 60,
        "cases_averted_low": 50,
    },
    {
        "intervention": "ITN",
        "net_use": 40,
        "prev_year_1": 4.32,
        "prev_year_2": 4.34,
        "prev_year_3": 4.48,
        "cases_averted": 52,
        "cases_averted_high": 60,
        "cases_averted_low": 50,
    },
    {
        "intervention": "ITN",
        "net_use": 60,
        "prev_year_1": 3.32,
        "prev_year_2": 3.34,
        "prev_year_3": 3.48,
        "cases_averted": 54,
        "cases_averted_high": 62,
        "cases_averted_low": 50,
    },
    {
        "intervention": "ITN",
        "net_use": 80,
        "prev_year_1": 2.32,
        "prev_year_2": 2.34,
        "prev_year_3": 2.48,
        "cases_averted": 55,
        "cases_averted_high": 62,
        "cases_averted_low": 50,
    },
    {
        "intervention": "PBO",
        "net_use": 20,
        "prev_year_1": 6.32,
        "prev_year_2": 6.34,
        "prev_year_3": 6.48,
        "cases_averted": 61,
        "cases_averted_high": 70,
        "cases_averted_low": 60,
    },
    {
        "intervention": "PBO",
        "net_use": 40,
        "prev_year_1": 5.32,
        "prev_year_2": 5.34,
        "prev_year_3": 5.48,
        "cases_averted": 62,
        "cases_averted_high": 72,
        "cases_averted_low": 60,
    },
    {
        "intervention": "PBO",
        "net_use": 60,
        "prev_year_1": 4.32,
        "prev_year_2": 4.34,
        "prev_year_3": 4.48,
        "cases_averted": 63,
        "cases_averted_high": 73,
        "cases_averted_low": 60,
    },
    {
        "intervention": "PBO",
        "net_use": 80,
        "prev_year_1": 3.32,
        "prev_year_2": 3.34,
        "prev_year_3": 3.48,
        "cases_averted": 64,
        "cases_averted_high": 74,
        "cases_averted_low": 60,
    },
    {
        "intervention": "IRS",
        "net_use": 20,
        "prev_year_1": 7.32,
        "prev_year_2": 7.34,
        "prev_year_3": 7.48,
        "cases_averted": 70,
        "cases_averted_high": 72,
        "cases_averted_low": 60,
    },
    {
        "intervention": "IRS",
        "net_use": 40,
        "prev_year_1": 6.32,
        "prev_year_2": 6.34,
        "prev_year_3": 6.48,
        "cases_averted": 70,
        "cases_averted_high": 72,
        "cases_averted_low": 60,
    },
    {
        "intervention": "IRS",
        "net_use": 60,
        "prev_year_1": 5.32,
        "prev_year_2": 5.34,
        "prev_year_3": 5.48,
        "cases_averted": 74,
        "cases_averted_high": 80,
        "cases_averted_low": 60,
    },
    {
        "intervention": "IRS",
        "net_use": 80,
        "prev_year_1": 4.32,
        "prev_year_2": 4.34,
        "prev_year_3": 4.48,
        "cases_averted": 75,
        "cases_averted_high": 80,
        "cases_averted_low": 60,
    }
];

export const columns = [
    {"intervention": "Interventions"},
    {"net_use": "Net use"},
    {"prev_year_1": "Prevalence Under 5 yrs: Yr 1 post intervention"},
    {"prev_year_2": "Prevalence Under 5 yrs: Yr 2 post intervention"},
    {"prev_year_3": "Prevalence Under 5 yrs: Yr 3 post intervention"},
    {"cases_averted": "Cases averted across 3 yrs since intervention"}
];

export const prevGraph = {
    data: [
        {
            y_col: "value",
            x_col: "month",
            id: "none",
            name: "No intervention",
            type: "lines",
            marker: {color: "grey"}
        },
        {
            y_col: "value",
            x_col: "month",
            id: "ITN",
            name: "Pyrethoid ITN",
            type: "lines",
            marker: {color: "blue"}
        },
        {
            y_col: "value",
            x_col: "month",
            id: "PBO",
            name: "Switch to Pyrethoid-PBO ITN",
            type: "lines",
            marker: {color: "aquamarine"}
        },
        {
            y_col: "value",
            x_col: "month",
            id: "IRS",
            name: "Only IRS",
            type: "lines",
            marker: {color: "purple"}
        },
        {
            x: [1, 1],
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

export const casesAvertedGraph =
    {
        data: [
            {
                x: ["ITN"],
                cols: ["cases_averted"],
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
                cols: ["cases_averted"],
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
                cols: ["cases_averted"],
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
        id: "prevalence",
        label: "Prevalence",
        value: "low",
        options: [{value: "low", label: "low"}, {value: "med", label: "med"}, {value: "high", label: "high"}, {
            value: "low",
            label: "low"
        }]
    },
    {
        id: "net_use",
        label: "Net use",
        value: 20,
        options: [{value: 20, label: "20%"}, {value: 40, label: "40%"}, {value: 60, label: "60%"}, {
            value: 80,
            label: "80%"
        }]
    },
    {
        id: "irs_use",
        label: "Net use",
        value: 0,
        options: [
            {value: 0, label: "0"},
            {value: 0.6, label: "60%"},
            {value: 0.7, label: "70%"},
            {value: 0.8, label: "80%"},
            {value: 0.9, label: "90%"},
            {value: 1, label: "100%"}
        ]
    },
    {
        id: "resistance",
        label: "Resistance",
        value: 0.2,
        options: [
            {value: 0, label: "0%"},
            {value: 0.2, label: "20%"},
            {value: 0.4, label: "40%"},
            {value: 0.6, label: "60%"},
            {value: 0.8, label: "80%"},
            {value: 1, label: "100%"}
        ]
    }
];
