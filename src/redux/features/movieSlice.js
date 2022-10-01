import { createSlice } from "@reduxjs/toolkit";

import {moviesList} from "../../assets/mookData"

const initialState= {movies:moviesList}

const movieSlice= createSlice({
    name:"movie",
    initialState,
    reducers:{
        addmovie:(state,action)=>{
            state.movies.push(action.payload)
        }
    }

})

export default movieSlice.reducer;
console.log('actions reducer',movieSlice.actions)
export const {addmovie}= movieSlice.actions