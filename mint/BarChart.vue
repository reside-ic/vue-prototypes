<template>
    <plotly :data="dataSeries" :layout="layout" :display-mode-bar="false"></plotly>
</template>
<script lang="ts">
    import Vue from "vue"
    import {Plotly} from "vue-plotly"

    export default Vue.extend<any, any, any, any>({
        props: ["netUse", "columns", "dataSet"],
        components: {
            Plotly
        },
        data() {
            return {
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
            }
        },
        computed: {
            dataSeries() {
                return this.data.map((d: any) => {
                    const row = this.getRow(d.id);
                    return {
                        ...d,
                        y: d.y || d.cols.map((c: string) => row[c]),
                        error_y: this.getErrorBar(row, d.error_y)
                    }
                });
            }
        },
        methods: {
            getRow(id: string) {
                return this.dataSet.find((row: any) => row["intervention"] == id && row["net_use"] == this.netUse);
            },
            getErrorBar(row: any, error: any) {
                return {
                    ...error,
                    array: error.cols.map((c: string) => row[c]),
                    arrayminus: error.colsminus.map((c: string) => row[c])
                }
            }
        }
    })
</script>