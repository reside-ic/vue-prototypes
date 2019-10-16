<template>
    <div>
        <b-progress v-for="(bar, index) in bars" :key="index" class="my-2" :max="1" show-value>
            <b-progress-bar :value="bar.value"
                            :style="{background: bar.color}"></b-progress-bar>
        </b-progress>
    </div>
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

    export default Vue.extend<Data, {}, { bars: Bar[], numPhases: number }>({
        data() {
            return {
                phases: phases,
                interval: 0,
                currentPhase: 0
            }
        },
        computed: {
            numPhases: function () {
                return this.phases.length
            },
            bars: function () {
                return this.phases.map(p => ({value: p.numerator / p.denominator, color: p.color}));
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
                } else {
                    self.phases[self.currentPhase].numerator += 1;
                }
            }, 50)
        }
    });

</script>
