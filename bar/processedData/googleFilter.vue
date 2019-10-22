<template>
    <div>
        <div>
            <label>Indicator</label>
            <select v-model="indicator">
                <option value="2">ART coverage</option>
                <option value="3">Prevalence</option>
            </select>
        </div>
        <GChart type="ColumnChart" :data="processedOutputData" :options="chartOptions"></GChart>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import {GChart} from "vue-google-charts";
    import {sampleData, chartMetadata} from "./data";

    export default Vue.extend(
        {
            name: "GoogleFilter",
            data: function(){
                return {
                    indicator: '2',
                    chartData: sampleData
                }
            },
            computed: {
                processedOutputData: function(){
                    const filterValue = this.indicator;

                    const intervalColRole = {type:'number', role:'interval'};

                    const tableColumns:  any[] = [];
                    const indexedRows: { [k: string]: any } = {};

                    tableColumns.push(chartMetadata.xAxis);
                    for(const r of this.chartData){

                        const row = r as any;

                        if (row[chartMetadata.filterCol] != filterValue) {
                            continue;
                        }

                        const disaggregatedValue = row[chartMetadata.disaggregateBy];
                        let tableColIdx = tableColumns.indexOf(disaggregatedValue);
                        if (tableColumns.indexOf(disaggregatedValue) < 0) {
                            tableColIdx = tableColumns.length;

                            tableColumns.push(disaggregatedValue);
                            //Also push columns for lower and upper error values
                            tableColumns.push(intervalColRole); //lower
                            tableColumns.push(intervalColRole); //upper
                        }

                        const xValue = row[chartMetadata.xAxis];
                        //These should really come from 'filters' in the desired order, particularly to match up with the color optiosn
                        //but derive from the data here
                        if (Object.keys(indexedRows).indexOf(xValue) < 0){
                            indexedRows[xValue] = [xValue];
                        }

                        const tableRow = indexedRows[xValue];

                        //pad the row if necessary
                        while (tableRow.length < tableColIdx+3){ //including interval values
                            tableRow.push(0);
                        }

                        //set the values
                        tableRow[tableColIdx] = row[chartMetadata.valueCol];
                        tableRow[tableColIdx+1] = row[chartMetadata.errorLow];
                        tableRow[tableColIdx+2] = row[chartMetadata.errorHigh];
                    }
                    return [
                        tableColumns,
                        ...Object.keys(indexedRows).map(key => indexedRows[key])
                    ]
                },
                chartOptions: function () {
                    let seriesIdx = 0;
                    const series: any = {};
                    for (const key in chartMetadata.disaggregateColours){
                        const value = (chartMetadata.disaggregateColours as any)[key];
                        series[seriesIdx] = {color: value};
                        seriesIdx++;
                    }
                    return {
                        width: '700',
                        height: '600',
                        hAxis: {
                            title: "Age group" //TODO get labels from metadata
                        },
                        vAxis: {
                            title: "Indicator"
                        },
                        intervals: {
                          color: 'black',
                          style: 'sticks'
                        },
                        series
                    };
                }
            },
            components: {
                GChart
            }
        });

</script>
