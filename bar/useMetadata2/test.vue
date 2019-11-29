<template>
    <div>
        <test :chart-data="data" :filters="filters" :indicators="indicators"></test>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Test from "./chartjsMetadata2.vue";
    import {sampleData} from "../useMetadata/data";

    const indicators = [
        {
            indicator: "art_coverage",
            value_column: "mean",
            indicator_column: "indicator",
            indicator_value: "2",
            name: "ART coverage",
            error_low_column: "low",
            error_high_column: "high"
        },
        {
            indicator: "incidence",
            value_column: "mean",
            indicator_column: "indicator",
            indicator_value: "3",
            name: "Incidence",
            error_low_column: "low",
            error_high_column: "high"
        }
    ]

    const filters = [
        {
            id: "age_group",
            label: "Age group",
            options: [
                {id: '0-4', label: '0-4'},
                {id: '5-9', label: '5-9'},
                {id: '10-14', label: '10-14'},
                {id: '15-19', label: '15-19'},
                {id: '20-24', label: '20-24'},
                {id: '25-29', label: '25-29'},
                {id: '30-34', label: '30-34'},
                {id: '35-39', label: '35-39'},
                {id: '40-44', label: '40-44'},
                {id: '45-49', label: '45-49'},
                {id: '50-54', label: '50-54'},
                {id: '55-59', label: '55-59'},
            ]
        },
        {
            id: "region",
            label: "Region",
            options: [
                {id: '1', label: 'Northern'},
                {id: '2', label: 'Central'},
                {id: '3', label: 'Southern'}
            ]
        },
        {
            id: "sex",
            label: "Sex",
            options: [
                {id: 'male', label: 'male'},
                {id: 'female', label: 'female'}
            ]
        },
    ];

    export default Vue.extend({
        data() {
            return {
                data: sampleData,
                filters: filters,
                indicators: indicators
            }
        },
        components: {
            Test
        }
    });

</script>