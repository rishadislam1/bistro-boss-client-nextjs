const { createSlice } = require("@reduxjs/toolkit");

const initialState ={
    pageName: undefined
};

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers:{
        pageTrack: (state,action)=>{
            state.pageName= action.payload;
        }
    }
})

export const {pageTrack} = pageSlice.actions;
export default pageSlice.reducer;