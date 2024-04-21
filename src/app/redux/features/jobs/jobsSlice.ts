import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../configurations/api";
import { App } from "../../../configurations/api/config";
/*Initial State of the Application/*/
const initialState: any = {
 
  dashBoardData: null,

  dashBoadLoading: false,
  
 
};

/*Define an impletentation function for Components Interaction*/

/*GetClients*/
export const getDashBoardData = createAsyncThunk(
  "jobs/getDashBoardData",
  async (data: any, thunkAPI) => {
    // data = {"dateFrom":"2024-02-09T18:30:00.000Z","jobType":"all"}
    let url = encodeURI(App.services.dashboard);
    return API.post(url, {}, null, null);
  }
);

/*Slice Of the Jobs*/
export const jobs = createSlice({
  name: "jobs",
  initialState,
  reducers: {
   
  
    refreshEmptyTabData: (state, action) => {
      state.dashBoardData = {}
    }
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(getDashBoardData.pending, (state) => {
        state.dashBoadLoading = true;
      })
      .addCase(getDashBoardData.fulfilled, (state, action: any) => {
        state.dashBoadLoading = false;
        state.dashBoardData = action.payload.data || null;
      })
      .addCase(getDashBoardData.rejected, (state, action) => {
        state.dashBoadLoading = false;
        throw new Error(action.error.message);
      })
      
  },
});

export const { refreshEmptyTabData } = jobs.actions;
export default jobs.reducer;
