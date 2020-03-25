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

    export default Vue.extend({
        components: {MultiLine, BarChart, ImpactTable},
        data() {
            return {
                netUse: 20,
                columns: [
                    {"id": "intervention", "name": "Interventions"},
                    {"id": "net_use", "name": "Net use"},
                    {"id": "prev_year_1", "name": "Prevalence Under 5 yrs: Yr 1 post intervention"},
                    {"id": "prev_year_2", "name": "Prevalence Under 5 yrs: Yr 2 post intervention"},
                    {"id": "prev_year_3", "name": "Prevalence Under 5 yrs: Yr 3 post intervention"},
                    {"id": "cases_averted", "name": "Cases averted across 3 yrs since intervention"}
                ],
                data: Object.freeze([
                    {
                        "intervention": "none",
                        "net_use": 20,
                        "prev_year_1": 7.32,
                        "prev_year_2": 7.34,
                        "prev_year_3": 7.48,
                        "cases_averted": 0
                    },
                    {
                        "intervention": "none",
                        "net_use": 40,
                        "prev_year_1": 7.32,
                        "prev_year_2": 7.34,
                        "prev_year_3": 7.48,
                        "cases_averted": 0
                    },
                    {
                        "intervention": "none",
                        "net_use": 60,
                        "prev_year_1": 7.32,
                        "prev_year_2": 7.34,
                        "prev_year_3": 7.48,
                        "cases_averted": 0
                    },
                    {
                        "intervention": "none",
                        "net_use": 80,
                        "prev_year_1": 7.32,
                        "prev_year_2": 7.34,
                        "prev_year_3": 7.48,
                        "cases_averted": 0
                    },
                    {
                        "intervention": "ITN",
                        "net_use": 20,
                        "prev_year_1": 5.32,
                        "prev_year_2": 5.34,
                        "prev_year_3": 5.48,
                        "cases_averted": 51
                    },
                    {
                        "intervention": "ITN",
                        "net_use": 40,
                        "prev_year_1": 4.32,
                        "prev_year_2": 4.34,
                        "prev_year_3": 4.48,
                        "cases_averted": 52
                    },
                    {
                        "intervention": "ITN",
                        "net_use": 60,
                        "prev_year_1": 3.32,
                        "prev_year_2": 3.34,
                        "prev_year_3": 3.48,
                        "cases_averted": 54
                    },
                    {
                        "intervention": "ITN",
                        "net_use": 80,
                        "prev_year_1": 2.32,
                        "prev_year_2": 2.34,
                        "prev_year_3": 2.48,
                        "cases_averted": 55
                    },
                    {
                        "intervention": "PBO",
                        "net_use": 20,
                        "prev_year_1": 6.32,
                        "prev_year_2": 6.34,
                        "prev_year_3": 6.48,
                        "cases_averted": 61
                    },
                    {
                        "intervention": "PBO",
                        "net_use": 40,
                        "prev_year_1": 5.32,
                        "prev_year_2": 5.34,
                        "prev_year_3": 5.48,
                        "cases_averted": 62
                    },
                    {
                        "intervention": "PBO",
                        "net_use": 60,
                        "prev_year_1": 4.32,
                        "prev_year_2": 4.34,
                        "prev_year_3": 4.48,
                        "cases_averted": 63
                    },
                    {
                        "intervention": "PBO",
                        "net_use": 80,
                        "prev_year_1": 3.32,
                        "prev_year_2": 3.34,
                        "prev_year_3": 3.48,
                        "cases_averted": 64
                    },
                    {
                        "intervention": "IRS",
                        "net_use": 20,
                        "prev_year_1": 7.32,
                        "prev_year_2": 7.34,
                        "prev_year_3": 7.48,
                        "cases_averted": 70
                    },
                    {
                        "intervention": "IRS",
                        "net_use": 40,
                        "prev_year_1": 6.32,
                        "prev_year_2": 6.34,
                        "prev_year_3": 6.48,
                        "cases_averted": 70
                    },
                    {
                        "intervention": "IRS",
                        "net_use": 60,
                        "prev_year_1": 5.32,
                        "prev_year_2": 5.34,
                        "prev_year_3": 5.48,
                        "cases_averted": 74
                    },
                    {
                        "intervention": "IRS",
                        "net_use": 80,
                        "prev_year_1": 4.32,
                        "prev_year_2": 4.34,
                        "prev_year_3": 4.48,
                        "cases_averted": 75
                    },
                ])
            }
        }
    })

</script>