<template>
    <table>
        <thead>
        <tr>
            <th v-for="key in Object.keys(columns)">{{columns[key]}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in filteredData">
            <td v-for="cell in row">
                {{cell}}
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
    import {defineComponent} from "@vue/composition-api";
    import {FilteringProps, useFiltering} from "./filteredData";
    import {Dictionary} from "vuex";

    interface Props extends FilteringProps {
        columns: Dictionary<string>
    }
    
    export default defineComponent({
        props: {dataSet: Array, columns: Object, settings: Object},
        setup(props: Props) {
            const {filteredData} = useFiltering(props)
            return {
                filteredData
            }
        }
    })
</script>