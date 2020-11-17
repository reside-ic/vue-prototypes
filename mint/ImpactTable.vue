<template>
    <table>
        <thead>
        <tr>
            <th v-for="col in config">{{col.displayName}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in filteredData">
            <td v-for="col in config">
                <span>{{evaluateCell(col, row)}}</span>
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
    import {defineComponent} from "@vue/composition-api";
    import {FilteringProps, useFiltering} from "./filteredData";
    import {ColumnDefinition} from "./fakeAPIData";
    import {useTransformation} from "./tranformedData";

    interface Props extends FilteringProps {
        config: ColumnDefinition[]
    }

    export default defineComponent({
        props: {data: Array, config: Array, settings: Object},
        setup(props: Props) {
            const {filteredData} = useFiltering(props);
            const {evaluateFormula} = useTransformation(props);
            const evaluateCell = (col: ColumnDefinition, row: any) => {
                if (!col.valueFormula) {
                    return row[col.valueCol]
                }
                if (col.valueFormula[row[col.valueCol]]) {
                    return evaluateFormula(col.valueFormula[row[col.valueCol]])
                } else return "";
            };
            return {
                filteredData,
                evaluateCell
            }
        }
    })
</script>
