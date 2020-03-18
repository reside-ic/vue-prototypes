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
                        x: ["ITN"],
                        y: [20],
                        type: "bar",
                        name: "Pyrethoid ITN",
                        marker: {
                            color: "blue",
                            opacity: 0.5,
                        },
                        error_y: {
                            type: "data",
                            array: [1],
                            arrayminus: [6],
                            visible: true,
                            thickness: 1.5,
                            width: 0,
                            opacity: 1
                        }
                    },
                    {
                        x: ["PBO"],
                        y: [20],
                        type: "bar",
                        name: "Switch to Pyrethoid-PBO ITN",
                        marker: {
                            color: "aquamarine",
                            opacity: 0.5,
                        },
                        error_y: {
                            type: "data",
                            array: [2],
                            arrayminus: [5],
                            visible: true,
                            thickness: 1.5,
                            width: 0,
                            opacity: 1
                        }
                    },
                    {
                        x: ["IRS"],
                        y: [159],
                        name: "Only IRS",
                        type: "bar",
                        marker: {
                            color: "purple",
                            opacity: 0.5,
                        },
                        error_y: {
                            type: "data",
                            array: [3],
                            arrayminus: [25],
                            visible: true,
                            thickness: 1.5,
                            width: 0,
                            opacity: 1
                        }
                    },
                    {
                        x: ["IRS + ITN"],
                        y: [160, 161],
                        name: "Add IRS to Pyrethoid ITN",
                        type: "bar",
                        marker: {
                            color: "darkred",
                            opacity: 0.5,
                        },
                        error_y: {
                            type: "data",
                            array: [4],
                            arrayminus: [19],
                            visible: true,
                            thickness: 1.5,
                            width: 0,
                            opacity: 1
                        }
                    },
                    {
                        x: ["IRS + PBO"],
                        y: [161],
                        name: "Add IRS to Pyrethoid-PBO ITN",
                        type: "bar",
                        marker: {
                            color: "orange",
                            opacity: 0.5
                        },
                        error_y: {
                            type: "data",
                            array: [3],
                            arrayminus: [20],
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
                        showline: true,
                        range: [0, 640],
                        autorange: false
                    },
                    showlegend: true
                }
            }
        }
    })
</script>