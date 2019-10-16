<template>
    <b-progress class="mt-2" :max="1">
        <b-progress-bar v-for="(bar, index) in bars"
                        :key="index"
                        :value="bar.value"
                        :style="{background: bar.color}"></b-progress-bar>
    </b-progress>
</template>

<script lang="ts">

    import Vue from "vue";
    import {BProgress, BProgressBar} from "bootstrap-vue";
    import {Bar, Phase, phases} from "./types";

    interface Data {
        phases: Phase[],
        currentPhase: number,
        interval: number
    }

    export default Vue.extend<Data, {}, { max: number, bars: Bar[], numPhases: number }>({
        data() {
            return {
                phases: phases,
                interval: 0,
                currentPhase: 0
            }
        },
        computed: {
            numPhases: function () {
                return this.phases.length;
            },
            max: function () {
                return this.phases.reduce((currentVal: number, phase: Phase) => currentVal + phase.denominator, 0);
            },
            bars: function () {
                return this.phases.map(p => ({value: p.numerator / (this.numPhases * p.denominator), color: p.color}));
            }
        },
        components: {
            BProgress,
            BProgressBar
        },
        created() {
            const self = this;

            this.interval = setInterval(() => {
                const currentPhase = self.phases[self.currentPhase];
                if (currentPhase.numerator == currentPhase.denominator) {
                    self.currentPhase += 1;
                }
                if (self.currentPhase == self.numPhases) {
                    clearInterval(self.interval);
                }

                self.phases[self.currentPhase].numerator += 1;
            }, 50)
        }
    });

</script>
