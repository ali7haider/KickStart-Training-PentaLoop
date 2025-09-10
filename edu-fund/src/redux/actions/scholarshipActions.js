import { FETCH_SCHOLARSHIPS_FAILURE,FETCH_SCHOLARSHIPS_START,FETCH_SCHOLARSHIPS_SUCCESS } from "./actionTypes"


export const fetchScholarshipRequest=()=>({
    type:FETCH_SCHOLARSHIPS_START
})



export const fetchScholarshipSuccess=(data)=>({
    type:FETCH_SCHOLARSHIPS_SUCCESS,
    payload:data
})

export const fetchScholarshipFailure=(error)=>({
    type:FETCH_SCHOLARSHIPS_FAILURE,
    payload:error
})