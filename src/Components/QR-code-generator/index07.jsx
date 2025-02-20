import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    const [qrCode,setQrCode] = useState('');
    const [input, setInput] = useState('');
    console.log(input);
    
  return (
    <div>
      <h1>QR CODE GENERATOR</h1>
      <div>
        <input name="qr-code" placeholder="Enter Text" type="text" onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button onClick={()=> setQrCode(input)}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor='burlywood' />
        <h1>The qr code is: {qrCode}</h1>
      </div>
    </div>
  );
}
