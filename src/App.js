import './App.css'; 
import { useState } from 'react';  

function App() {   
  const [img, setImg] = useState(null);   
  const [load, setLoad] = useState(false);   
  const [qrdata, setqrdata] = useState("");   
  const [error, setError] = useState(null);    

  const Qr_gen = () => {     
    if (!qrdata) {
      setError('Please enter data for the QR code.');       
      return;     
    }
    setLoad(true);     
    setError(null); 
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=200x200`;
    setImg(url);     
    setLoad(false);   
  };    

  return (     
    <div className="App">       
      <h1>QR Code Generator</h1>         
      {load && <p>Generating QR code...</p>}       
      {error && <p className="error-message">{error}</p>}       
      {img && <img src={img} alt="QR Code" className="qr-image" />}        
      <label htmlFor="datainput">Enter Data</label>       
      <input         
        type="text"         
        id="datainput"         
        placeholder="Enter data"         
        onChange={(e) => setqrdata(e.target.value)}         
        value={qrdata}       
      />      
      <br></br>   
      <button className="gen-btn" onClick={Qr_gen}>Generate QR Code</button>     
    </div>   
  ); 
}  

export default App;
