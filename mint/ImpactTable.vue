<template>
    <table>
        <thead>
        <tr>
            <th v-for="col in columns">{{col.name}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in displayData">
            <td v-for="(cell, index) in row" v-if="columnIds.indexOf(index) > -1">
                {{cell}}
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script lang="ts">

    import Vue from "vue";

    export default Vue.extend({
        props: ["dataSet", "columns", "netUse"],
        computed: {
            columnIds() {
                return this.columns.map((c: any) => c.id)
            },
            displayData() {
                return this.dataSet.filter((d: any) => d["net_use"] == this.netUse);
            }
        }
    })
</script>