import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {jwtDecode } from "jwt-decode";
import axios from "../../axios";

export const loginUser = createAsyncThunk("login/loginUser", async (credentials) => {
  const response = await axios.post("/api/token/", credentials);
  const data = await response.data;

  if (response.status === 200) {

    if(jwtDecode (data.access).is_doctor){
      localStorage.setItem("authToken",data.access)
      console.log("Welcome Doctor");
      return jwtDecode (data.access);
    }else{
      throw new Error("Sorry !!! You are not a Doctor");
    }

  } else {
    throw new Error("Wrong credentials");
  }
});
let token = localStorage.getItem("authToken")
const initialState = {
  loading: false,
  error: null,
  success:false,
  user: token ? jwtDecode (token) : null,
  token: localStorage.getItem("authToken") || null,
};

const loginAction = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(action.payload)

    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.success = false
      console.log("Doctor Logout Called")
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success=false

      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = localStorage.getItem('authToken');
        state.error = null;
        state.success=true
        state.user=action.payload;
        console.log(action.payload)

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success=false
      });
  },
});

export const { setUser, logout } = loginAction.actions;
export default loginAction.reducer;
