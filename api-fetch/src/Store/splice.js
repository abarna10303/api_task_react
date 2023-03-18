import { createSlice } from "@reduxjs/toolkit";
const slice=createSlice({
    name:'missiondatas',
    initialState: {
        missions: [],
      },
    reducers:{
        addMissions:(state,action)=>{
            state.missions=action.payload;
        }
    }
})
export const{addMissions}=slice.actions;
export default slice.reducer;