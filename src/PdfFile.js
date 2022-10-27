// import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';

// const PdfFile = () => {
//     const componentRef = useRef();
//     const handlePrint = useReactToPrint({
//         content: () => componentRef.current,
//         documentTitle: 'emp-data',
//         onAfterPrint: () => alert("Print success")
//     })
//     return (
//         <>
//          <div ref={componentRef} style={{width: '100%', height: window.innerHeight}}>
//          <h1>asdfasdfadsf</h1>
//          </div>
         
//          <button onClick={handlePrint}>Print</button>
//         </>
//     );
// };

// export default PdfFile;