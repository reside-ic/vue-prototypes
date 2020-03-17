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
                            color: ["blue"]
                        }
                    },
                    {
                        x: ["PBO"],
                        y: [20],
                        type: "bar",
                        name: "Switch to Pyrethoid-PBO ITN",
                        marker: {
                            color: ["aquamarine"]
                        }
                    },
                    {
                        x: ["IRS"],
                        y: [159],
                        name: "Only IRS",
                        type: "bar",
                        marker: {
                            color: ["purple"]
                        }
                    },
                    {
                        x: ["IRS + ITN"],
                        y: [160, 161],
                        name: "Add IRS to Pyrethoid ITN",
                        type: "bar",
                        marker: {
                            color: ["darkred"]
                        }
                    },
                    {
                        x: ["IRS + PBO"],
                        y: [161],
                        name: "Add IRS to Pyrethoid-PBO ITN",
                        type: "bar",
                        marker: {
                            color: ["orange"]
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