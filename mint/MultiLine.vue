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
                        cols: ["prev_year_1", "prev_year_2", "prev_year_3"],
                        id: "none",
                        name: "No intervention",
                        type: "lines",
                        marker: {color: "grey"}
                    },
                    {
                        cols: ["prev_year_1", "prev_year_2", "prev_year_3"],
                        id: "ITN",
                        name: "Pyrethoid ITN",
                        type: "lines",
                        marker: {color: "blue"}
                    },
                    {
                        cols: ["prev_year_1", "prev_year_2", "prev_year_3"],
                        id: "PBO",
                        name: "Switch to Pyrethoid-PBO ITN",
                        type: "lines",
                        marker: {color: "aquamarine"}
                    },
                    {
                        cols: ["prev_year_1", "prev_year_2", "prev_year_3"],
                        id: "IRS",
                        name: "Only IRS",
                        type: "lines",
                        marker: {color: "purple"}
                    },
                    {
                        x: ["prev_year_1", "prev_year_1"],
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
                        tickvals: ["prev_year_1", "prev_year_2", "prev_year_3"],
                        ticktext: [1, 2, 3],
                        autorange: true
                    },
                    yaxis: {
                        title: 'prevalence (%)',
                        showline: true,
                        range: [0, 20],
                        autorange: false
                    }
                }
            }
        },
        computed: {
            dataSeries() {
                return this.data.map((d: any) => ({
                    ...d,
                    x: d.x || d.cols,
                    y: d.y || this.getYValues(d.id, d.cols)
                }));
            }
        },
        methods: {
            getYValues(id: string, cols: string[]) {
                const row = this.dataSet.find((row: any) => row["intervention"] == id && row["net_use"] == this.netUse);
                if (!row) return [];
                return cols.map((c: string) => row[c]);
            }
        }
    })
</script>