import { SUBMIT_APPLICATION_START,SUBMIT_APPLICATION_FAILURE,SUBMIT_APPLICATION_SUCCESS,NEXT_STEP,PREV_STEP,RESET_FORM_DATA } from './actionTypes';

export const saveFormData=(step,data)=>({
    type:types.SAVE_FORM_DATA,
    payload:{step,data}
});

export const nextStep=()=>({type:NEXT_STEP});
export const prevStep=()=>({type:PREV_STEP});
export const resetFormData=()=>({type:RESET_FORM_DATA});

export const submitApplicationRequest=()=>({
    type:SUBMIT_APPLICATION_START
})

export const submitApplicationSuccess=(data)=>({
    type:SUBMIT_APPLICATION_SUCCESS,
    payload:data
})

export const submitApplicationFailure=(error)=>({
    type:SUBMIT_APPLICATION_FAILURE,
    payload:error
})