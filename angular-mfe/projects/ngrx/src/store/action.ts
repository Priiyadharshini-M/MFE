import { createAction, props } from "@ngrx/store";
export const GET_ASSIGNED_PROJECT_DETAILS = 'getAllProjectDetails'
export const getAllProjectDetails = createAction(GET_ASSIGNED_PROJECT_DETAILS, props<{value: any}>())
