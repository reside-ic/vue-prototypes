<template>
    <div>
        <div>
            <label>Indicator</label>
            <select v-model="indicator">
                <option value="2">ART coverage</option>
                <option value="3">Prevalence</option>
            </select>    
        </div>
        <!--TODO get labels from metadata -->
        <chartjs-bar :chartdata="processedOutputData" xLabel="Age group" yLabel="Indicator"></chartjs-bar>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import ChartjsBar from "../useMetadata/chartjsBar.vue";
    import {sampleData, chartMetadata} from "./data";

    export default Vue.extend(
        {
        name: "ChartjsFilter",
        data: function(){
            return {
                indicator: '2',
                chartData: sampleData
            }
        },
        computed: {
            processedOutputData: function(){
                const filterValue = this.indicator;

                const labels: string[] = [];
                const datasets: any[] = [];
                for(const r of this.chartData){
                    const row = r as any;

                    if (row[chartMetadata.filterCol] != filterValue) {
                        continue;
                    }

                    const label = row[chartMetadata.xAxis];
                    //These should really come from 'filters' in the desired order, but derive from the data here
                    if (labels.indexOf(label) < 0) {
                        labels.push(label);
                    }

                    const datasetLabel = row[chartMetadata.disaggregateBy];
                    const datasetColor = (chartMetadata.disaggregateColours as any)[datasetLabel];
                    let dataset = datasets.filter(d => (d as any).label == datasetLabel)[0] || null;
                    if (!dataset) {
                        dataset = {
                            label: datasetLabel,
                            backgroundColor: datasetColor,
                            data: [],
                            errorBars: {}
                        };
                        datasets.push(dataset);
                    }

                    const value = row[chartMetadata.valueCol];
                    const labelIdx = labels.indexOf(label);
                    while (dataset.data.length <= labelIdx){
                        dataset.data.push(0);
                    }
                    dataset.data[labelIdx] = value;

                    dataset.errorBars[label] = {};
                    dataset.errorBars[label].plus = row[chartMetadata.errorHigh];
                    dataset.errorBars[label].minus = row[chartMetadata.errorLow];

                }
                return {
                    labels,
                    datasets
                }
            }
        },
        components: {
                ChartjsBar
            }
        });

</script>
