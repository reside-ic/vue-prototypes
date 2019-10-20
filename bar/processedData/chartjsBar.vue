
<script lang="ts">
    import Vue from "vue";
    import { Bar } from 'vue-chartjs'
    import ErrorBarsPlugin from 'chartjs-plugin-error-bars'

    export default Vue.extend({
        extends: Bar, 
        name: "ChartjsBar",
        props: {
            chartdata: {
                type: Object,
                default: null
            },
            xLabel: String,
            yLabel: String
        },
        methods: {
            updateRender: function(){
                
            (this as any).addPlugin(ErrorBarsPlugin as any);

            (this as any).renderChart(this.chartdata, {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: this.yLabel
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: this.xLabel
                        }
                    }]
                },
                legend: {
                    position: "right",
                },
                responsive:true,
                maintainAspectRatio: false,
                plugins: {
                    chartJsPluginErrorBars: {
                        /**
                         * stroke color, or array of colors
                         * @default: derived from borderColor
                         */
                        color: '#000',

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
                        absoluteValues: true
                    }
                }
            })
            }
        },
        mounted () {
            this.updateRender();
        },
        watch: {
            chartdata: function(newVal) {
               this.updateRender();
            }
        }
    });

</script>
