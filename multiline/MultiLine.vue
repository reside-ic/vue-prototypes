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
                        x: [0, 1, 2, 3, 4],
                        y: [40, 40, 42, 45, 47],
                        type: "lines",
                        name: "No intervention"
                    },
                    {
                        x: [0, 1, 2, 3, 4],
                        y: [40, 40, 37, 35, 35],
                        type: "lines",
                        name: "Pyrethoid ITN"
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
                        title: 'years',
                        showline: true,
                        range: [0, 4],
                        tickvals: [0, 1, 2, 3, 4],
                        autorange: false
                    },
                    yaxis: {
                        title: 'prevalence (%)',
                        showline: true,
                        range: [0, 100],
                        autorange: false
                    }
                }
            }
        }
    })
</script>