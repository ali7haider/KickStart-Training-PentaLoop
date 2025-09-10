import * as types from './actionTypes';


export const saveFormData=(step,data)=>({
    type:types.SAVE_FORM_DATA,
    payload:{step,data}
});

export const nextStep=()=>({type:types.NEXT_STEP});
export const prevStep=()=>({type:types.PREV_STEP});
export const resetFormData=()=>({type:types.RESET_FORM_DATA});

export const submitApplicationRequest=()=>({
    type:types.SUBMIT_APPLICATION_START
})

export const submitApplicationSuccess=(data)=>({
    type:types.SUBMIT_APPLICATION_SUCCESS,
    payload:data
})

export const submitApplicationFailure=(error)=>({
    type:types.SUBMIT_APPLICATION_FAILURE,
    payload:error
})