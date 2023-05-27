import React from 'react';
import { useContext } from 'react';
import {context} from "./Parent"
const Child = () => {
    const {userName} = useContext(context)
  return (
    <div>
      {userName}
    </div>
  );
}

export default Child;
