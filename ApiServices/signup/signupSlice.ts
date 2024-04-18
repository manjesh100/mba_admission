import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFaq {
    signupResponse: any;
    signupAccessToken: string;
}
const initialState: IFaq = {
    signupResponse: {},
    signupAccessToken: "Hello",
}

const signupSlice = createSlice({
    name: "signup",
    initialState: initialState,
    reducers: {
        setSignupAccessToken: (state, action: PayloadAction<string>) => {
            state.signupAccessToken = action.payload;
        },
        setSignupResponse: (state, action: PayloadAction<any>) => {
            state.signupResponse = action.payload;
        }
    }
});

export const { setSignupResponse, setSignupAccessToken } = signupSlice.actions;
export default signupSlice.reducer;
// export type loginActions = ReturnType<typeof setSignupResponse>