<template>
    <div>
        <phase-progress v-for="(phase, index) in phases"
                        :key="index"
                        :phase="phase"
                        :index="index"></phase-progress>
    </div>
</template>

<script lang="ts">

    import Vue from "vue";
    import {phases, ProgressPhase} from "./types";
    import PhaseProgress from "./progressPhase";
    import Tick from "./tick";

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
            PhaseProgress,
            Tick
        },
        created() {
            const self = this;

            this.interval = setInterval(() => {
                const currentPhase = self.phases[self.currentPhase];
                currentPhase.started = true;
                if (currentPhase.value != undefined && currentPhase.value >= 1) {
                    currentPhase.complete = true;
                    self.currentPhase += 1;
                }
                if (self.currentPhase == self.numPhases) {
                    clearInterval(self.interval);
                    self.currentPhase -= 1;
                } else if (self.phases[self.currentPhase].value != undefined) {
                    (self.phases[self.currentPhase].value as number) += 0.01;
                }
                else {
                    self.phases[self.currentPhase].started = true;
                }
            }, 150)
        }
    });

</script>
