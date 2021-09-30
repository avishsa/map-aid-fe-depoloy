import { sliderConstants } from "../constants/slider.constants";
export function slider(state = { start: true }, action) {
    switch (action.type) {
        case sliderConstants.START_SESSION:{
            
            return {start:false};
        }
        
        default: return state;
    }
}