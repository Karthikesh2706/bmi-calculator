import './App.css'; 
import { useState } from 'react';  

function App() {   
  const [img, setImg] = useState(null);   
  const [load, setLoad] = useState(false);   
  const [qrdata, setqrdata] = useState("");   
  const [error, setError] = useState(null);    
  const [size, setSize] = useState(200);

  const handleSizeChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 1000) {
      setSize(value);
    }
  };

  const Qr_gen = () => {     
    if (!qrdata) {
      setError('Please enter data for the QR code.');       
      return;     
    }
    if (!size || size <= 0 || size > 1000) {
      setError('Please enter a valid size between 1 and 1000 pixels.');
      return;
    }
    setLoad(true);     
    setError(null); 
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${size}x${size}`;
    setImg(url);     
    setLoad(false);   
  };    

  return (     
    <div className="App">
      <div className="container">       
        <h1>QR Code Generator</h1>
        <div className="input-group">
          <label htmlFor="datainput">Enter Data</label>       
          <input         
            type="text"         
            id="datainput"         
            placeholder="Enter data for QR code"         
            onChange={(e) => setqrdata(e.target.value)}         
            value={qrdata}       
          />
        </div>

        <div className="input-group">
          <label htmlFor="size">QR Code Size (pixels)</label>
          <input
            type="number"
            id="size"
            min="1"
            max="1000"
            placeholder="Enter size (e.g., 200)"
            value={size}
            onChange={handleSizeChange}
          />
          <span className="size-hint">Enter a value between 1 and 1000 pixels</span>
        </div>

        <button className="gen-btn" onClick={Qr_gen}>Generate QR Code</button>

        {error && <p className="error-message">{error}</p>}
        {load && <p className="loading">Generating QR code...</p>}
        
        {img && (
          <div className="qr-container">
            <img src={img} alt="QR Code" className="qr-image" />
            <p className="size-info">Size: {size}x{size} pixels</p>
          </div>
        )}
      </div>     
    </div>   
  ); 
}  

export default App;
