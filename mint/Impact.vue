<template>
    <div>
        <div class="my-5 col-3">
            <label>Net use:</label>
            <select class="form-control" v-model="netUse">
                <option value="20">20%</option>
                <option value="40">40%</option>
                <option value="60">60%</option>
                <option value="80">80%</option>
            </select>
        </div>
        <div class="my-5">
            <plotly-graph :columns="columns"
                          :data-set="data"
                          :net-use="netUse"
                          :data="prevalence.data"
                          :layout="prevalence.layout"></plotly-graph>
        </div>
        <div class="my-5">
            <plotly-graph :columns="columns"
                          :data-set="data"
                          :net-use="netUse"
                          :data="cases.data"
                          :layout="cases.layout"></plotly-graph>
        </div>
        <div class="my-5">
            <impact-table :columns="columns" :data-set="data" :net-use="netUse"></impact-table>
        </div>
    </div>
</template>
<script lang="ts">

    import Vue from "vue";
    import ImpactTable from "./ImpactTable.vue";
    import {casesAvertedGraph, columns, data, prevGraph} from "./fakeAPIData";
    import PlotlyGraph from "./PlotlyGraph.vue";

    export default Vue.extend({
        components: {PlotlyGraph, ImpactTable},
        data() {
            return {
                netUse: 20,
                columns: columns,
                data: data,
                prevalence: prevGraph,
                cases: casesAvertedGraph
            }
        }
    })

</script>