<template>
    <plotly :data="data" :layout="layout" :display-mode-bar="false"></plotly>
</template>
<script lang="ts">
    import Vue from "vue"
    import {Plotly} from "vue-plotly"

    export default Vue.extend({
        components: {
            Plotly
        },
        data() {
            return {
                data: [
                    {
                        x: [0],
                        y: [2240],
                        name: "No intervention",
                        type: "scatter",
                        marker: {color: "grey", size: 10}
                    },
                    {
                        x: [40],
                        y: [5170],
                        name: "Pyrethoid ITN",
                        type: "scatter",
                        marker: {color: "blue", size: 10},
                        error_x: {
                            type: "data",
                            array: [1],
                            arrayminus: [3],
                            width: 0
                        }
                    },
                    {
                        x: [39],
                        y: [4310],
                        name: "Switch to Pyrethoid-PBO ITN",
                        type: "scatter",
                        marker: {color: "aquamarine", size: 10},
                        error_x: {
                            type: "data",
                            array: [10],
                            arrayminus: [0],
                            width: 0
                        }
                    },
                    {
                        x: [59],
                        y: [5370],
                        name: "Only IRS",
                        type: "scatter",
                        marker: {color: "purple", size: 10},
                        error_x: {
                            type: "data",
                            array: [20],
                            arrayminus: [0],
                            width: 0
                        }
                    },
                    {
                        x: [77],
                        y: [8300],
                        name: "Add IRS to Pyrethoid ITN",
                        type: "scatter",
                        marker: {color: "darkred", size: 10},
                        error_x: {
                            type: "data",
                            array: [7],
                            arrayminus: [5],
                            width: 0
                        }
                    },
                    {
                        x: [76],
                        y: [7440],
                        name: "Add IRS to Pyrethoid-PBO ITN",
                        type: "scatter",
                        marker: {color: "orange", size: 10},
                        error_x: {
                            type: "data",
                            array: [8],
                            arrayminus: [4],
                            width: 0
                        }
                    }
                ],
                layout: {
                    title: "Strategy costs over 3 years",
                    xaxis: {
                        title: 'Efficacy against cases (%)',
                        showline: true,
                        range: [-2, 100],
                        tickvals: [0, 20, 40, 60, 80, 100],
                        autorange: false,
                        zeroline: false,
                    },
                    yaxis: {
                        title: 'Total costs ($USD)',
                        showline: true,
                        range: [0, 10000],
                        tickvals: [0, 2000, 4000, 6000, 8000, 10000],
                        autorange: false
                    }
                }
            }
        }
    })
</script>