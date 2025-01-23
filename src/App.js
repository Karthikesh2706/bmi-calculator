import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      // Determine BMI category
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 25) setCategory('Normal weight');
      else if (bmiValue >= 25 && bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setCategory('');
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <h1>BMI Calculator</h1>
        <div className="input-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
          />
        </div>
        <div className="input-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
          />
        </div>
        <div className="button-group">
          <button onClick={calculateBMI}>Calculate BMI</button>
          <button onClick={handleReset} className="reset-btn">Reset</button>
        </div>
        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p className="category">Category: <span>{category}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
