<template>
    <div>
        <div class="row">
            <div class="my-5 col-3" v-for="setting in settings">
                <label>{{setting.label}}</label>
                <select class="form-control" v-model="setting.value">
                    <option v-for="option in setting.options" :value="option.value">{{option.label}}</option>
                </select>
            </div>
        </div>
        <div class="my-5">
            <plotly-graph
                          :data-set="longData"
                          :settings="selectedSettings"
                          :data="prevalence.data"
                          :layout="prevalence.layout"></plotly-graph>
        </div>
        <div class="my-5">
            <plotly-graph
                          :data-set="wideData"
                          :settings="selectedSettings"
                          :data="cases.data"
                          :layout="cases.layout"></plotly-graph>
        </div>
        <div class="my-5">
            <impact-table :columns="columns" :data-set="wideData" :settings="selectedSettings"></impact-table>
        </div>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import ImpactTable from "./ImpactTable.vue";
    import {casesAvertedGraph, columns, prevGraph, settings, wideData} from "./fakeAPIData";
    import PlotlyGraph from "./PlotlyGraph.vue";

    export default Vue.extend({
        components: {PlotlyGraph, ImpactTable},
        data() {
            return {
                settings: settings,
                columns: columns,
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