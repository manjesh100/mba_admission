import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFaq {
    faqDetails: any;
}
const initialState: IFaq = {
    faqDetails: {},
}

const faqSlice = createSlice({
    name: "FAQ",
    initialState: initialState,
    reducers: {
        setFaqResponse: (state, action: PayloadAction<string>) => {
            state.faqDetails = action.payload;
        }
    }
});

export const { setFaqResponse } = faqSlice.actions;
export const faqReducer = faqSlice.reducer;
export type loginActions = ReturnType<typeof setFaqResponse>