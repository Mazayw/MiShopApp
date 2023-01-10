import React, { useRef } from 'react';
import { ComponentToPrint } from './ComponentToPrint';
import ReactToPrint from 'react-to-print';
import { ContextProvider } from './context/global-context';
import Button from '@mui/material/Button';
import AddItems from './addItems';
import html2canvas from 'html2canvas';



function App() {

  const componentRef = useRef(null);

  const handleDownloadImage = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element as unknown as HTMLElement, {
      scale: 3
    });

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div>
       <ContextProvider>
      <AddItems/>
     
      <ComponentToPrint ref={componentRef} />
      <ReactToPrint
        trigger={() => <Button variant="contained" size="large" sx={{ mt: 5 }}>Print</Button>}
        content={() => componentRef.current}
      />
      <Button variant="contained" size="large" sx={{ mt: 5, ml: 5 }} onClick={handleDownloadImage}>Download as Image</Button>
      
      </ContextProvider>
      
    </div>
  );
};


export default App;
