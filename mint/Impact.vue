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
            <multi-line :columns="columns" :data-set="data" :net-use="netUse"></multi-line>
        </div>
        <div class="my-5">
            <bar-chart :columns="columns" :data-set="data" :net-use="netUse"></bar-chart>
        </div>
        <div class="my-5">
            <impact-table :columns="columns" :data-set="data" :net-use="netUse"></impact-table>
        </div>
    </div>
</template>
<script lang="ts">

    import MultiLine from "./MultiLine.vue";
    import Vue from "vue";
    import BarChart from "./BarChart.vue";
    import ImpactTable from "./ImpactTable.vue";
    import {columns, data} from "./fakeAPIData";

    export default Vue.extend({
        components: {MultiLine, BarChart, ImpactTable},
        data() {
            return {
                netUse: 20,
                columns: columns,
                data: data
            }
        }
    })

</script>