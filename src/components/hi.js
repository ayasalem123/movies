import {useParams,useNavigate} from "react-router-dom"

function Hi({filteredArr}){
    const navigate = useNavigate();
    const {id}=useParams()
    let obj=filteredArr.filter((el)=>el.id==id)
    return(
        <div>
            <h1> description: <br/>
                {obj.map((el)=>el.description)}</h1>
    <iframe width="420" height="315"
     src={obj.map((el)=>el.src)}>
    </iframe>
    <button onClick={() => navigate("/")}>Navigate to home </button>
        </div>
    
    )
}
export default Hi