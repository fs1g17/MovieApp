import useFetch from "./useFetch";
import MyDropDown from "./MyDropDown";
import { useState } from "react";

const Navbar = ({ studio, setStudio }) => {
    const { data, isPending, error } = useFetch('http://my-json-server.typicode.com/1SpatialGroupLtd/studiodata/studios/')
    
    return ( 
        <div>
            <navbar className="navbar">
                <h1>Studio</h1>
                { data && <MyDropDown className="navbar-item" items={data} setStudio={setStudio}/>}
            </navbar>
            <p>Studio selected: {studio}</p>
        </div>
     );
}
 
export default Navbar;