const { createSlice } = require("@reduxjs/toolkit");

const initialState ={
    pageName: undefined,
    interval: false
};

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers:{
        pageTrack: (state,action)=>{
            state.pageName= action.payload;
        },
        intervalTrack: (state,action)=>{
            state.interval = action.payload;
        }
    }
})

export const {pageTrack,intervalTrack} = pageSlice.actions;
export default pageSlice.reducer;