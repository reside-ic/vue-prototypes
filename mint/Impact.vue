<template>
    <div>
        <div class="row">
            <div class="my-5 col-3" v-for="setting in settings">
                <label>{{setting.label}}</label>
                <div v-if="setting.options">
                    <select class="form-control" v-model="setting.value">
                        <option v-for="option in setting.options" :value="option.value">{{option.label}}</option>
                    </select>
                </div>
                <div v-if="!setting.options">
                    <input type="number" class="form-control" v-model="setting.value"/>
                </div>
            </div>
        </div>
        <div class="my-5">
            <plotly-graph :data="longData"
                          :settings="selectedSettings"
                          :metadata="prevalence.metadata"
                          :series="prevalence.series"
                          :layout="prevalence.layout"></plotly-graph>
        </div>
        <div class="my-5">
            <plotly-graph :data="wideData"
                          :settings="selectedSettings"
                          :metadata="cases.metadata"
                          :series="cases.series"
                          :layout="cases.layout"></plotly-graph>
        </div>
        <div class="my-5">
            <dynamic-table :config="tableConfig" :data="wideData" :settings="selectedSettings"></dynamic-table>
        </div>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import DynamicTable from "./DynamicTable.vue";
    import {casesAvertedGraph, prevGraph, settings, tableConfig, wideData} from "./fakeAPIData";
    import PlotlyGraph from "./PlotlyGraph.vue";

    export default Vue.extend({
        components: {PlotlyGraph, DynamicTable},
        data() {
            return {
                settings: settings,
                tableConfig: tableConfig,
                wideData: wideData,
                longData: [] as any[],
                prevalence: prevGraph,
                cases: casesAvertedGraph
            }
        },
        computed: {
            selectedSettings() {
                const result: any = {};
                settings.map(s => {
                    result[s.id] = s.value
                });
                return result;
            }
        },
        created() {
            const self = this;
            fetch("data.json")
                .then(response => response.json())
                .then(data => self.longData = Object.freeze(data))

        }
    })

</script>
