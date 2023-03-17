import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// read Task data

export const getAllTaskObject = createAsyncThunk("getAllTaskObject", async (search) => {
    const { data } = await axios.get(`http://localhost:3001/api/getalltaskobject?searchQ=${search}`);

    return data;
  });

//Read Single Data

export const getSingleTaskObject = createAsyncThunk(
  "task/getSingleTaskObject",
  async (id) => {
    const { data } = await axios.get(`http://localhost:3001/api/taskobject/${id}`);
    return data;
  }
);

export const PostTaskDataObject = createAsyncThunk('posttaskdataobject/post',
  async (data) => {
    console.log("posting task object")
    await axios.post('http://localhost:3001/api/posttaskobject', { data })
  })

// initialState

const initialState = {
  data: [],
  loading: true,
  success: false,
  singleData: [],
}

const TaskObjectSlice = createSlice({
  name: 'TaskObjectSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getSingleTaskObject.pending, (state, action) => {
      state.loading = true
    })
    .addCase(getSingleTaskObject.fulfilled, (state, action) => {
      state.singleData = (action.payload)
      state.loading = false

    })
      .addCase(getAllTaskObject.pending, (state, action) => {
        state.loading = true;
        state.data = [];
      })
      .addCase(getAllTaskObject.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.searchstate = action.payload.message
        state.loading = false;
      });
      
  }
})

export const TaskObjectSliceReducer = TaskObjectSlice.reducer

export const TaskObjectSliceAction = TaskObjectSlice.actions