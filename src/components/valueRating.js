import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
function ValueRate({setValueRating}) {
  const [value, setValue] = useState("");
    console.log("hi")
    setValueRating(value);
    return (
      <div>
      <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
    </div>
    );
  }
export default ValueRate;
