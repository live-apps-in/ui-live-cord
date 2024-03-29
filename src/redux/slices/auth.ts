import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_DATA, AUTH_STATE, INITIALIZE_ACTION } from "src/model";

const initialState: AUTH_STATE = {
  isAuthenticated: false,
  isInitialized: false,
  data: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initialize: (
      _state: AUTH_STATE,
      action: PayloadAction<Partial<INITIALIZE_ACTION>>
    ) => ({
      ..._state,
      ...action.payload,
      isInitialized: true,
    }),
    login: (
      _state: AUTH_STATE,
      action: PayloadAction<AUTH_DATA>
    ): AUTH_STATE => ({
      ..._state,
      isAuthenticated: true,
      data: action.payload,
    }),
    updateAuthData: (_state, action: PayloadAction<Partial<AUTH_DATA>>) => ({
      ..._state,
      data: {
        ..._state.data,
        ...action.payload,
      },
    }),
    discordLogin: (
      _state: AUTH_STATE,
      action: PayloadAction<AUTH_DATA["discord"]>
    ): AUTH_STATE => ({
      ..._state,
      data: {
        ..._state.data,
        discord: {
          ...(_state.data?.discord || {}),
          ...action.payload,
        },
      },
    }),
    logout: (_state: AUTH_STATE, _action: PayloadAction<void>): AUTH_STATE => ({
      ...initialState,
      isAuthenticated: false,
      data: null,
      isInitialized: true,
    }),
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
