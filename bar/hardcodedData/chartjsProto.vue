
<script lang="ts">

    import { Bar } from 'vue-chartjs'
    import ErrorBarsPlugin from 'chartjs-plugin-error-bars'

    export default {
        extends: Bar,
        mounted () {
            (this as any).addPlugin(ErrorBarsPlugin as any);

            // Overwriting base render method with actual data.
            (this as any).renderChart({
                labels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59'],
                datasets: [
                    {
                        label: 'female',
                        backgroundColor: '#e41a1c',
                        data: [40, 20, 12, 39, 10, 40, 39, 50, 40, 20, 12, 11],
                        errorBars:{
                            '0-4': {plus: 3, minus: -2},
                            '5-9': {plus: 4, minus: -4},
                            '10-14': {plus: 5, minus: -1},
                            '15-19': {plus: 2, minus: -1},
                            '20-24': {plus: 2, minus: -2},
                            '25-29': {plus: 3, minus: -1},
                            '30-34': {plus: 2, minus: -3},
                            '35-39': {plus: 5, minus: -2},
                            '40-44': {plus: 2, minus: -2},
                            '45-49': {plus: 3, minus: -2},
                            '50-54': {plus: 1, minus: -2},
                            '55-59': {plus: 4, minus: -2}
                        }
                    },
                    {
                        label: 'male',
                        backgroundColor: '#377eb8',
                        data: [30, 10, 6, 44, 3, 45, 41, 70, 20, 10, 23, 12],
                        errorBars:{
                            '0-4': {plus: 3, minus: -2},
                            '5-9': {plus: 4, minus: -4},
                            '10-14': {plus: 5, minus: -1},
                            '15-19': {plus: 2, minus: -1},
                            '20-24': {plus: 2, minus: -2},
                            '25-29': {plus: 3, minus: -1},
                            '30-34': {plus: 2, minus: -3},
                            '35-39': {plus: 5, minus: -2},
                            '40-44': {plus: 2, minus: -2},
                            '45-49': {plus: 3, minus: -2},
                            '50-54': {plus: 1, minus: -2},
                            '55-59': {plus: 4, minus: -2}
                        }
                    }
                ]
            }, {
                plugins: {
                    chartJsPluginErrorBars: {
                        /**
                         * stroke color, or array of colors
                         * @default: derived from borderColor
                         */
                        color: '#676767',

                        /**
                         * bar width in pixel as number or string or bar width in percent based on the barchart bars width (max 100%), or array of such definition
                         * @default 10
                         */
                        width: '2px',

                        /**
                         * lineWidth as number, or as string with pixel (px) ending
                         */
                        lineWidth: '2px',


                        /**
                         * whether to interpet the plus/minus values, relative to the value itself (default) or absolute
                         * @default false
                         */
                        absoluteValues: false
                    }
                }
            })
        }
    }

</script>
