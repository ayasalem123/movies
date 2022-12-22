import {useParams,useNavigate} from "react-router-dom"
import data from '../data'
function Hi(){
    const navigate = useNavigate();
    const {id}=useParams()
    return(
        <div>
            <h1> description: {data [id].description}</h1>
    <iframe width="420" height="315"
     src={data [id].src}>
    </iframe>
    <button onClick={() => navigate("/")}>Navigate to home </button>
        </div>
    
    )
}
export default Hi