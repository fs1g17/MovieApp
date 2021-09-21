import Dropdown from 'react-bootstrap/Dropdown' 

const MyDropDown = ({ items, setStudio }) => {
    return ( 
        <Dropdown>
            <Dropdown.Toggle variant="success" id="basic">
                Select Studio 
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items.map(item => (
                    <Dropdown.Item onClick={() => setStudio(item.id)}>{ item.title }</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
     );
}
 
export default MyDropDown;