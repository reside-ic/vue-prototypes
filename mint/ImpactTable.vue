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

    export default Vue.extend<any, any, any, any>({
        props: ["dataSet", "columns", "settings"],
        computed: {
            columnIds() {
                return this.columns.map((c: any) => c.id)
            },
            displayData() {
                return this.dataSet.filter((row: any) => this.filterBySettings(row));
            }
        },
        methods: {
            filterBySettings(row: any) {
                for (let key of Object.keys(this.settings)){
                    if (row[key] != this.settings[key]){
                        return false;
                    }
                }
                return true;
            },
        }
    })
</script>