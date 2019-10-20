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

    export default Vue.extend(
        {
        name: "ChartjsFilter",
        data: function(){
            return {
                indicator: '2',
                outputData: [
                   {age_group: '0-4', sex: 'female', indicator: '2', mean: 0.40, high:0.43, low: 0.38},
                   {age_group: '5-9', sex: 'female', indicator: '2', mean: 0.20, high:0.24, low: 0.16},
                   {age_group: '10-14', sex: 'female', indicator: '2', mean: 0.12, high: 0.17, low: 0.11},
                   {age_group: '15-19', sex: 'female', indicator: '2', mean: 0.39, high: 0.41, low: 0.38},
                   {age_group: '20-24', sex: 'female', indicator: '2', mean: 0.10, high: 0.12, low: 0.08},
                   {age_group: '25-29', sex: 'female', indicator: '2', mean: 0.40, high: 0.43, low: 0.39},
                   {age_group: '30-34', sex: 'female', indicator: '2', mean: 0.39, high: 0.41, low: 0.36},
                   {age_group: '35-39', sex: 'female', indicator: '2', mean: 0.50, high: 0.55, low: 0.48},
                   {age_group: '40-44', sex: 'female', indicator: '2', mean: 0.40, high: 0.42, low: 0.38},
                   {age_group: '45-49', sex: 'female', indicator: '2', mean: 0.20, high: 0.23, low: 0.18},
                   {age_group: '50-54', sex: 'female', indicator: '2', mean: 0.12, high: 0.13, low: 0.10},
                   {age_group: '55-59', sex: 'female', indicator: '2', mean: 0.11, high: 0.15, low: 0.09},

                   {age_group: '0-4', sex: 'male', indicator: '2', mean: 0.35, high:0.40, low: 0.34},
                   {age_group: '5-9', sex: 'male', indicator: '2', mean: 0.25, high:0.28, low: 0.21},
                   {age_group: '10-14', sex: 'male', indicator: '2', mean: 0.15, high: 0.17, low: 0.11},
                   {age_group: '15-19', sex: 'male', indicator: '2', mean: 0.44, high: 0.48, low: 0.41},
                   {age_group: '20-24', sex: 'male', indicator: '2', mean: 0.08, high: 0.11, low: 0.06},
                   {age_group: '25-29', sex: 'male', indicator: '2', mean: 0.41, high: 0.42, low: 0.40},
                   {age_group: '30-34', sex: 'male', indicator: '2', mean: 0.35, high: 0.37, low: 0.33},
                   {age_group: '35-39', sex: 'male', indicator: '2', mean: 0.46, high: 0.48, low: 0.42},
                   {age_group: '40-44', sex: 'male', indicator: '2', mean: 0.32, high: 0.37, low: 0.25},
                   {age_group: '45-49', sex: 'male', indicator: '2', mean: 0.26, high: 0.29, low: 0.25},
                   {age_group: '50-54', sex: 'male', indicator: '2', mean: 0.15, high: 0.18, low: 0.13},
                   {age_group: '55-59', sex: 'male', indicator: '2', mean: 0.14, high: 0.15, low: 0.11},


                   {age_group: '0-4', sex: 'female', indicator: '3', mean: 0.20, high:0.22, low: 0.18},
                   {age_group: '5-9', sex: 'female', indicator: '3', mean: 0.10, high:0.14, low: 0.06},
                   {age_group: '10-14', sex: 'female', indicator: '3', mean: 0.12, high: 0.12, low: 0.08},
                   {age_group: '15-19', sex: 'female', indicator: '3', mean: 0.09, high: 0.11, low: 0.08},
                   {age_group: '20-24', sex: 'female', indicator: '3', mean: 0.05, high: 0.08, low: 0.11},
                   {age_group: '25-29', sex: 'female', indicator: '3', mean: 0.20, high: 0.22, low: 0.17},
                   {age_group: '30-34', sex: 'female', indicator: '3', mean: 0.16, high: 0.19, low: 0.11},
                   {age_group: '35-39', sex: 'female', indicator: '3', mean: 0.19, high: 0.24, low: 0.14},
                   {age_group: '40-44', sex: 'female', indicator: '3', mean: 0.21, high: 0.28, low: 0.13},
                   {age_group: '45-49', sex: 'female', indicator: '3', mean: 0.1, high: 0.13, low: 0.08},
                   {age_group: '50-54', sex: 'female', indicator: '3', mean: 0.08, high: 0.03, low: 0.10},
                   {age_group: '55-59', sex: 'female', indicator: '3', mean: 0.06, high: 0.11, low: 0.02},

                   {age_group: '0-4', sex: 'male', indicator: '3', mean: 0.25, high:0.30, low: 0.21},
                   {age_group: '5-9', sex: 'male', indicator: '3', mean: 0.15, high:0.2, low: 0.13},
                   {age_group: '10-14', sex: 'male', indicator: '3', mean: 0.1, high: 0.13, low: 0.05},
                   {age_group: '15-19', sex: 'male', indicator: '3', mean: 0.14, high: 0.04, low: 0.15},
                   {age_group: '20-24', sex: 'male', indicator: '3', mean: 0.2, high: 0.21, low: 0.19},
                   {age_group: '25-29', sex: 'male', indicator: '3', mean: 0.11, high: 0.12, low: 0.07},
                   {age_group: '30-34', sex: 'male', indicator: '3', mean: 0.15, high: 0.17, low: 0.13},
                   {age_group: '35-39', sex: 'male', indicator: '3', mean: 0.19, high: 0.23, low: 0.12},
                   {age_group: '40-44', sex: 'male', indicator: '3', mean: 0.22, high: 0.24, low: 0.2},
                   {age_group: '45-49', sex: 'male', indicator: '3', mean: 0.28, high: 0.29, low: 0.25},
                   {age_group: '50-54', sex: 'male', indicator: '3', mean: 0.25, high: 0.28, low: 0.13},
                   {age_group: '55-59', sex: 'male', indicator: '3', mean: 0.11, high: 0.15, low: 0.09}
                ]               
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
