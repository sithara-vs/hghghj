import axios from "axios";

const initialState = {
  user_id: "",
  email: "",
  loading: false,
  errorMessage: "",
  // password: "",
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const DELETE = "DELETE";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export function login(email, password) {
  return {
    type: LOGIN,
    payload: axios.post("/api/login", { email, password }),
  };
}

// export function delete(password){
//   return{
//       type:DELETE,
//       payload:axios.post('/api/delete',{password})
//   };
// }

export function register(email, password) {
  return {
    type: REGISTER,
    payload: axios.post("/api/register", { email, password }),
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: axios.delete("/api/logout"),
  };
}

export function update_email(email) {
  return {
    type: UPDATE_EMAIL,
    payload: axios.put("/api/reset_email", { email }),
  };
}

export function update_password(password) {
  return {
    type: UPDATE_PASSWORD,
    payload: axios.put("/api/reset_password", { password }),
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER + "_PENDING":
      return { ...state, loading: true };
    case REGISTER + "_FULFILLED": {
      // let { user_id, email } = action.payload.data;
      return {
        ...state,
        loading: false,
        user_id: action.payload.data.user_id,
        email: action.payload.data.email,
      };
    }
    case REGISTER + "_REJECTED":
      return {
        ...state,
        loading: false,
        errorMessage:
          (action.payload &&
            action.payload.data &&
            action.payload.data.message) ||
          "failure",
      };

    case LOGIN + "_PENDING":
      return { ...state, loading: true };
    case LOGIN + "_FULFILLED":
      // let { user_id, email } = action.payload.data;
      return {
        ...state,
        loading: false,
        user_id: action.payload.data.user_id,
        email: action.payload.data.email,
      };
    case LOGIN + "_REJECTED":
      
      return console.log(action.payload.response.data)||{
        
        ...state,
        loading: false,
        errorMessage: action.payload.response.data,
        
      };

    case LOGOUT + "_PENDING":
      return { ...state, loading: true };
    case LOGOUT + "_FULFILLED":
      return { ...state, ...initialState };
    case LOGOUT + "_REJECTED":
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.data.message,
      };
    //   case DELETE + "_PENDING":
    //     return {...state, loading:true}
    // case DELETE + "_FULFILLED":
    //     const{user_id,email}= action.payload.data
    //     return {...state,loading:false,user_id:user_id,email}
    // case DELETE + "_REJECTED":
    //     return {...state,loading:false,errorMessage:action.payload.data.message}

    case UPDATE_PASSWORD + "_PENDING":
      return { ...state, loading: true };
    case UPDATE_PASSWORD + "_FULFILLED":
      // let { user_id, password } = action.payload.data;
      return { ...state, loading: false, user_id: action.payload.data.user_id };
    case UPDATE_PASSWORD + "_REJECTED":
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.data.message,
      };

    case UPDATE_EMAIL + "_PENDING":
      return { ...state, loading: true };
    case UPDATE_EMAIL + "_FULFILLED":
      // const { user_id, email } = action.payload.data;
      return { ...state, loading: false, user_id: action.payload.data.user_id, email:action.payload.data.email };
    case UPDATE_EMAIL + "_REJECTED":
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.data.message,
      };

    default:
      return state;
  }
}

// export default function reducer(state = initialState,action){
//     switch(action.type) {

//         default:
//             return state;
//     }
// }
