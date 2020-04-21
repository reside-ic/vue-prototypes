import {Dictionary} from "vuex";
import {computed} from "@vue/composition-api";

export interface FilteringProps {
    settings: Dictionary<string>
    data: any[]
}

export function useFiltering(props: FilteringProps) {
    const filterBySettings = (row: any) => {
        for (let key of Object.keys(props.settings)) {
            if (row[key] != undefined && row[key] != props.settings[key]) {
                return false;
            }
        }
        return true;
    }

    const filteredData = computed<any[]>(() => props.data.filter((row: any) => filterBySettings(row)))

    return {filteredData}
}
