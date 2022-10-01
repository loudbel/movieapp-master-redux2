import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import {moviesList} from "../../assets/mookData"

export const fetchMovies = createAsyncThunk("movie/fetchMovies", ()=>{
 return axios('https://www.omdbapi.com/?apikey=edf8783e&r=json&type=movie&s=bat')
    .then((response)=>{
        return response.data.Response == 'True' ? response.data.Search.map((m)=>
            {
                return{
                    title: m.Title,
                    poster: m.Poster,
                    description: `The aging patriarch of an organized crime 
                    dynasty transfers control of his clandestine 
                    empire to his reluctant son.`,
                    rate: 5
                }

            }
        ) : []

    })
})

//https://www.omdbapi.com/?apikey=edf8783e&r=json&type=movie&s=bat

const initialState= {
    movies:moviesList,
    loading: false,
    error: ''
}

const movieSlice= createSlice({
    name:"movie",
    initialState,
    reducers:{
        addmovie:(state,action)=>{
            state.movies.push(action.payload)
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchMovies.pending, (state)=>{
            state.movies = []
            state.loading = true
            state.error =  ''
        })
        builder.addCase(fetchMovies.fulfilled, (state, action)=>{
            state.movies = action.payload
            state.loading = false
            state.error =  ''
            console.log('fulfilllll', action.payload)
        })
        builder.addCase(fetchMovies.rejected, (state, action)=>{
            state.movies = []
            state.loading = false
            state.error =  action.payload
        })
    }

})

export default movieSlice.reducer;
console.log('actions reducer',movieSlice.actions)
export const {addmovie}= movieSlice.actions