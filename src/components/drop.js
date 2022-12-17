import Dropdown from 'react-bootstrap/Dropdown';

function Drop() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">horror</Dropdown.Item>
        <Dropdown.Item href="#/action-3">drama</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Drop;