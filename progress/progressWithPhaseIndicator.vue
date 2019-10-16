<template>
    <div>
        Step {{currentPhase + 1}} of {{numPhases}}
        <div :class="bar.value === 0 ? 'not-started' : bar.value === 1 ? 'finished' : 'in-progress'"
             v-if="bar.value > 0 && (bar.value < 1 || index === numPhases - 1)" v-for="(bar, index) in bars"
             :key="index">
            <span class="help-text">{{bar.name}}{{bar.value > 0 && bar.helpText ? ": " + bar.helpText: ""}}</span>
            <b-progress class="my-2" :max="1">
                <b-progress-bar :value="bar.value"></b-progress-bar>
            </b-progress>
        </div>
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
                return this.phases.map(p => ({
                    value: p.numerator / p.denominator,
                    name: p.name,
                    helpText: p.helpText
                }));
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
                    self.currentPhase -= 1;
                } else {
                    self.phases[self.currentPhase].numerator += 1;
                }
            }, 50)
        }
    });

</script>
