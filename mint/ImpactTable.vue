<template>
    <table>
        <thead>
        <tr>
            <th v-for="col in columns">{{col.name}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in displayData">
            <td v-for="cell in row">
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
            displayData() {
                return this.dataSet.filter((d: any) => d["net_use"] == this.netUse);
            }
        }
    })
</script>