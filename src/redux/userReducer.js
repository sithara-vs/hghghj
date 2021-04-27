import axios from "axios";

const initialState = {
    user_id:"",
    email: "",
    loading: false,
    errorMessage:""

}

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const DELETE = "DELETE";
const UPDATE = "UPDATE"

export function registerUser(email,password){
    return{
        type:REGISTER,
        payload:axios.post('/api/register',{email,password})
    }
}


export default function reducer(state = initialState,action){
    switch(action.type) {
        case REGISTER + "_PENDING":
            return {...state, loading:true}
        case REGISTER+ "_FULFILLED":
            const{user_id,email}= action.payload.data
            return {...state,loading:false,user_id:user_id,email}
        case REGISTER + "_REJECTED":
            return {...state,loading:false,errorMessage:action.payload.data.message}

        default:
            return state;
    }
}