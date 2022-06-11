import { NavLink } from "react-router-dom";

export default function PageNotFound(){
        return(
            <>
                 <div className="align mt-5">
                 <h1> 404</h1>
                 <h1> Page Not Found</h1>
                 <h6>Go back to the <NavLink to="/" style={{textDecoration:'none'}}>homepage</NavLink>.</h6>
                 </div>
             </>
             
         )

    }
