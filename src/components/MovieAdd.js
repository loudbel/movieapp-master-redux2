import { useDispatch } from "react-redux";
import { addmovie } from "../redux/features/movieSlice";


function MovieAdd() {
   const dispatch = useDispatch()
   const handlesub=(e)=>{
        e.preventDefault()
        const newmovie={
            title:e.target.title.value,
            poster:e.target.poster.value,
            description:e.target.description.value,
            rate: e.target.rating.value,

        }
        dispatch(addmovie(newmovie))
    }
    return ( <><h2>movieadd</h2>
    <form onSubmit={handlesub} >
        <label>title:<input type="text" name="title" ></input></label>
        <label>posterURL:<input type="text" name="poster" ></input></label>
        <label>description:<input type="text" name="description" ></input></label>
        <label>rating:<input type="text" name="rating" ></input></label>
        <button type="submit" >submit</button>
       
        </form></> );
}

export default MovieAdd;