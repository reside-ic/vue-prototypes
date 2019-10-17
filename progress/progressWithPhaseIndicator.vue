<template>
    <div>
        Step {{currentPhase + 1}} of {{numPhases}}
        <div :class="phase.value === 0 ? 'not-started' : phase.value === 1 ? 'finished' : 'in-progress'"
             v-if="phase.value > 0 && (phase.value < 1 || index === numPhases - 1)" v-for="(phase, index) in phases"
             :key="index">
            <span class="help-text">{{phase.name}}{{phase.value > 0 && phase.helpText ? ": " + phase.helpText: ""}}</span>
            <b-progress class="my-2" :max="1">
                <b-progress-bar :value="phase.value"></b-progress-bar>
            </b-progress>
        </div>
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import {BProgress, BProgressBar} from "bootstrap-vue";
    import {ProgressPhase, phases} from "./types";

    interface Data {
        phases: ProgressPhase[],
        currentPhase: number,
        interval: number
    }

    export default Vue.extend<Data, {}, { numPhases: number }>({
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
                currentPhase.started = true;
                if (currentPhase.value && currentPhase.value >= 1) {
                    currentPhase.complete = true;
                    self.currentPhase += 1;
                }
                if (self.currentPhase == self.numPhases) {
                    clearInterval(self.interval);
                    self.currentPhase -= 1;
                } else if (self.phases[self.currentPhase].value) {
                    (self.phases[self.currentPhase].value as number) += 0.01;
                }
                else {
                    self.phases[self.currentPhase].started = true;
                }
            }, 150)
        }
    });

</script>
