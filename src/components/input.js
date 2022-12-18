import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';

function Search({setVal}) {
  const handleChange=(event)=>{
      setVal(event.target.value);
  }
 
  return (
    <>
      <InputGroup className="mb-3"  >
        <Form.Control  placeholder="search" onChange={handleChange} aria-label="Text input with dropdown button" />
      </InputGroup>
    </>
  );
}

export default Search;