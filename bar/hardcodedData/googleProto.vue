<template>
    <div>
        <GChart type="ColumnChart" :data="chartData" :options="chartOptions"></GChart>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {GChart} from "vue-google-charts";

    export default Vue.extend(
        {
            name: "GoogleProto",
            data: function() {
                return {
                    chartData: [
                        ['Age group', 'female', {type:'number', role:'interval'}, {type:'number', role:'interval'}, 'male', {type:'number', role:'interval'}, {type:'number', role:'interval'}],
                        ['0-4', 0.4, 0.3, 0.42, 0.35, 0.31, 0.39],
                        ['5-9', 0.2, 0.15, 0.23, 0.23, 0.2, 0.27],
                        ['10-14', 0.1, 0.08, 0.14, 0.18, 0.15, 0.2],
                        ['15-19', 0.3, 0.24, 0.32, 0.32, 0.3, 0.35]
                    ],
                    chartOptions: {
                        hAxis: {
                          title: "Age group"
                        },
                        vAxis: {
                          title: "Indicator"
                        },
                        series: {
                            0: {
                                color: '#e41a1c'
                            },
                            1: {
                                color: '#377eb8'
                            }
                        }
                    },
                    filterData: [],
                    filterOptions: {
                        filterColumnIndex: 0,
                        values: [0,1,2]
                    }
                }
            },
            components: {
                GChart
            }
        });
</script>