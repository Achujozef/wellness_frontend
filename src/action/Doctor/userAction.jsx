import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchUser = createAsyncThunk('api/fetchUser', async (id) => {
  console.log(id);
  const response = await axios.get('api/user/');
  console.log("FROM DOCTOR USER ACTION",response.data);
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    name: '',
    email: '',
    phonenumber: '',
    image: '',
    done:false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { name, email, phonenumber, image } = action.payload;
        state.name = name;
        state.email = email;
        state.phonenumber = phonenumber;
        state.image =image;
        state.done = true;
      });
  },
});

export default userSlice.reducer;