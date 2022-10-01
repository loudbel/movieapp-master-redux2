import React from 'react';

import { useSelector } from "react-redux";
const Filter = ({filtred}) => {
    const movielist = useSelector((state) => state.movie.movies);
    const hundlesubmit = (e) =>{
        e.preventDefault();
        const title = e.target.filter.value;
        return filtred(title)
    }
    
    
 
    return (
        <div>
            <form onSubmit={hundlesubmit}>
            <input type="text" name='filter' placeholder='what do you wanna filter?'  />
            <button type="submit" >submit</button>
            </form>
        </div>
          
    );
};

export default Filter;