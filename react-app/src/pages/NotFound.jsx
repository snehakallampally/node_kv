import { Link } from "react-router-dom"

const NotFound=()=>{
    return(
    <div>
       <p>Page Not Found</p>
       <Link to="/" >Go back</Link>
    </div>
    )
}
export default NotFound