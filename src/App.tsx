import React, { useRef } from 'react';
import Item from './item/index';
import { ComponentToPrint } from './ComponentToPrint';
import ReactToPrint from 'react-to-print';



function App() {
 /* return (
    <><Item /><ComponentToPrint /></>
  );*/

  const componentRef = useRef(null);

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};


export default App;
