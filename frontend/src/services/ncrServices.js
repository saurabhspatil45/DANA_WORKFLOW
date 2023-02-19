import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


// post NCR data

export const PostNcrdata = createAsyncThunk('ncr/post',
    async (data) => {
    await axios.post('http://localhost:3001/api/createncr',{data})
})

//Get All Ncr Data
export const GetAllNcrData = createAsyncThunk('/getncr/get', async () => {
    const { data } = await axios.get('http://localhost:3001/api/getncr')
    console.log(data)
    return data
  })

  //Get single Ncr Data
export const getSingleNcrData = createAsyncThunk('/getSinglencr/get', async (issue) => {
 console.log("issue is "+ issue)
  const  data  = await axios.get('http://localhost:3001/api/getSingleNcr',{issue})
  console.log("this is actural data")
 console.log(data.data.sncr[0]);
  return data.data.sncr[0];
})

  // delete data

export const NcrDataDelete = createAsyncThunk('ncr/delete',
async (id) => {
  await axios.put('http://localhost:3001/api/ncrdatadelete', { id })
}
)

// patch request for Ncr
export const UpdateNcr = createAsyncThunk(
  "ncr/update",
  async (data) => {
    await axios.put("http://localhost:3001/api/updatencr", { data });
  }
);

const initialState = {
    data: [],
    data2:[],
    loading: true,
    // token: [],
    success: false,
    user: [],
    // isAdmin: false,
    singleData: [],
  }
  
  const NcrSlice = createSlice({
    name: 'NcrSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(GetAllNcrData.pending, (state, action) => {
        state.loading = true
      })
      .addCase(GetAllNcrData.fulfilled, (state, action) => {
        state.data.push(action.payload)
        state.loading = false
  
      })
      .addCase(getSingleNcrData.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getSingleNcrData.fulfilled, (state, action) => {
        state.data2.push(action.payload)
        state.loading = false
  
      })
    }
  })
  
  export const NcrSliceReducer = NcrSlice.reducer
  
  export const NcrSliceAction = NcrSlice.actions