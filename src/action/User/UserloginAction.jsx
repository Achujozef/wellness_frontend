import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {jwtDecode } from "jwt-decode";
import useraxios from "../../useraxios";

export const UserloginUser = createAsyncThunk("login/loginUser", async (credentials) => {
  console.log(credentials)
  const response = await useraxios.post("/api/token/", credentials);
  const data = await response.data;
  console.log("FROM LOGIN ACTION",jwtDecode(data.access));
  if (response.status === 200) {
    console.log(data.access)
    localStorage.setItem("userauthToken",data.access)
    return jwtDecode(data.access);
  } else {
    throw new Error("Wrong credentials");
  }
});
let token = localStorage.getItem("userauthToken")
const initialState = {
  loading: false,
  error: null,
  success:false,
  patient: token ? jwtDecode(token) : null,
  token: localStorage.getItem("userauthToken") || null,
};

const userloginAction = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.patient = action.payload;
      console.log(action.payload)

    },
    userlogout: (state) => {
      state.patient = null;
      state.token = null;
      state.success = false
      console.log("User Logout Called")
      localStorage.removeItem("userauthToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserloginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success=false

      })
      .addCase(UserloginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = localStorage.getItem('userauthToken');
        state.error = null;
        state.success=true
        state.patient=action.payload;
        console.log(action.payload)

      })
      .addCase(UserloginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success=false
      });
  },
});

export const { setUser, userlogout } = userloginAction.actions;
export default userloginAction.reducer;
