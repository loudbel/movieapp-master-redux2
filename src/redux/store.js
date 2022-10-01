import { configureStore } from "@reduxjs/toolkit";
import moviereducer from './features/movieSlice'

console.log('moviereducer:store::::',moviereducer)
const store = configureStore({
    reducer:{
        movie:moviereducer,

    }
})

export default store