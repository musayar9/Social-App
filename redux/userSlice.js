import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// export const register = createAsyncThunk(
//   "user/register",
//   async ({ email, password }) => {
//     try {
//       const auth = getAuth();
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       const user = userCredential.user;
//       console.log("user", user);
//       const token = user.stsTokenManager.accessToken;
//       console.log(token, "token data");
//       return token;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    try {
      const auth = getAuth();
      console.log("auth testwd", auth);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );

      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;

      const userData = { token, user: user };

      await AsyncStorage.setItem("userToken", token);
      return userData;
    } catch (error) {
      console.log("user slice 21 line", error);
      throw error;
    }
  }
);

export const autoLogin = createAsyncThunk("user/autoLogin", async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");


    if (token) {
      return token;
    } else {
      throw new Error("user not found");
    }
  } catch (error) {
    throw error;
  }
});

const initialState = {
  user: null,
  isAuth: false,
  token: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.error = "Invalid Email or Password";
    });

    // autoLogin

    builder.addCase(autoLogin.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
    });
    builder.addCase(autoLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.token = action.payload;
    });
    builder.addCase(autoLogin.rejected, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.token = null;
    });

    // builder.addCase(register.pending, (state) => {
    //   state.isLoading = true;
    //   state.isAuth = false;
    // });
    // builder.addCase(register.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isAuth = true;
    //   state.token = action.payload;
    // });
    // builder.addCase(register.rejected, (state) => {
    //   state.isLoading = false;
    //   state.error = "Invalid Email or Password";
    // });
  },
});

export default userSlice.reducer;
