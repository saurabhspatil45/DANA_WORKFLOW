import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// read Task data

export const getAllTask = createAsyncThunk("getAllTask", async (search) => {
    const { data } = await axios.get(`http://localhost:3001/api/getalltask?searchQ=${search}`);
    return data;
  });

//Read Single Data

export const getSingleTask = createAsyncThunk(
  "task/getSingleTask",
  async (id) => {
    
    const { data } = await axios.get(`http://localhost:3001/api/task`,{id});
    console.log("task data is ")
    console.log(data.data[0]);
    return data.data[0];
  }
);
//Update Single Data

export const updateSingleTask = createAsyncThunk(
  "task/getSingleTask",
  async (credentials) => {
    console.log("id and credentials")
  const id = localStorage.getItem("workId")
    console.log(id  )

await axios.put(`http://localhost:3001/api/updatetask/${id}`,credentials);
   


  }
);
export const PostTaskData = createAsyncThunk('posttaskdata/post',
  async (data) => {
    console.log(data);
    await axios.post('http://localhost:3001/api/posttask', { data })
  })

// initialState

const initialState = {
  data: [],
  loading: true,
  success: false,
  singleData: [],
}

const TaskSlice = createSlice({
  name: 'TaskSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getSingleTask.pending, (state, action) => {
      state.loading = true
    })
    .addCase(getSingleTask.fulfilled, (state, action) => {
      state.singleData = (action.payload)
      state.loading = false

    })
      .addCase(getAllTask.pending, (state, action) => {
        state.loading = true;
        state.data = [];
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.searchstate = action.payload.message
        state.loading = false;
      });
      
  }
})

export const TaskSliceReducer = TaskSlice.reducer

export const TaskSliceAction = TaskSlice.actions