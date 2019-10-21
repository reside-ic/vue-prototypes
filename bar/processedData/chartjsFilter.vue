<template>
    <div>
        <div>
            <label>Indicator</label>
            <select v-model="indicator">
                <option value="2">ART coverage</option>
                <option value="3">Prevalence</option>
            </select>    
        </div>
        <chartjs-bar :chartdata="processedOutputData" xLabel="Age group" yLabel="Indicator"></chartjs-bar>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import ChartjsBar from "./chartjsBar.vue";
    import {sampleData} from "./data";

    export default Vue.extend(
        {
        name: "ChartjsFilter",
        data: function(){
            return {
                indicator: '2',
                outputData: sampleData
            }
        },
        computed: {
            processedOutputData: function(){
                //TO COME FROM METADATA / USER SELECTIONS
                const xAxis = "age_group";
                const disaggregateBy = "sex";
                const disaggregateColours = {
                    female: '#e41a1c',
                    male: '#377eb8'
                } as any;
                const valueCol = "mean";
                const errorLow = "low";
                const errorHigh = "high";
                const filterCol = "indicator";
                const filterValue = this.indicator;

                const labels: string[] = [];
                const datasets: any[] = [];
                for(const row of this.outputData){
    
                    if (row[filterCol] != filterValue) {
                        continue;
                    }

                    const label = row[xAxis];
                    //These should really come from 'filters' in the desired order, but derive from the data here
                    if (labels.indexOf(label) < 0) {
                        labels.push(label);
                    }

                    const datasetLabel = row[disaggregateBy];
                    const datasetColor = disaggregateColours[datasetLabel];
                    let dataset = datasets.filter(d => (d as any).label == datasetLabel)[0] || null;
                    if (!dataset) {
                        dataset = {
                            label: datasetLabel,
                            backgroundColor: datasetColor,
                            data: [],
                            errorBars: {}
                        }
                        datasets.push(dataset);
                    }

                    const value = row[valueCol];
                    const labelIdx = labels.indexOf(label);
                    while (dataset.data.length <= labelIdx){
                        dataset.data.push(0);
                    }
                    dataset.data[labelIdx] = value;

                    dataset.errorBars[label] = {};
                    dataset.errorBars[label].plus = row[errorHigh];
                    dataset.errorBars[label].minus = row[errorLow];

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
