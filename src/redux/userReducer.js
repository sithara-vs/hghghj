const initialState = {
    user_id:"",
    email: "",
    loading: false,
    errorMessage:""

}


export default function reducer(state = initialState,action){
    switch(action.type) {
        default:
            return state;
    }
}