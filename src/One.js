import { useParams } from "react-router-dom"
import result from "./assets/data"

const  One = () => {
   let params = useParams()
   const {name, image, status} = result.results.find(el => el.id == params.number)
   return(<div>{name}
   <img src={image} alt={name}/>
   <p>{status}</p>
   </div>)
}
export default One