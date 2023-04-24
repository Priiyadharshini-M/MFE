import { createReducer, on } from "@ngrx/store";
import { getAllProjectDetails } from "./project.action";
import { initialState } from "./project.state";

const _assignedProjectReducer = createReducer(initialState, on(getAllProjectDetails, (state, action) => {
    let b;
    console.log('action...', action);
    let a = action.value.subscribe((data: any) => {
        console.log('inside reducer', data);
        b = data
    })
    console.log('vbn', b);
    return {
        ...state,
        assignedProjects: action.value
    }
})
);

export function assignedProjectReducer(state: any, action: any) {
    return _assignedProjectReducer(state, action)
}