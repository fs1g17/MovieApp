import useFetch from "./useFetch";
import MyDropDown from "./MyDropDown";

const Navbar = ({ setStudio }) => {
    const { data, isPending, error } = useFetch('http://my-json-server.typicode.com/1SpatialGroupLtd/studiodata/studios/')
    
    return ( 
        <div>
            <navbar className="navbar">
                <h1>Studio</h1>
                { data && <MyDropDown className="navbar-item" items={data} setStudio={setStudio}/>}
            </navbar>
        </div>
     );
}
 
export default Navbar;