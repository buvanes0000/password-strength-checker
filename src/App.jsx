import React, { useState } from "react";
import Lottie from "lottie-react";
import PasswordInput from "./components/PasswordInput";
import StrengthIndicator from "./components/StrengthIndicator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import animationData from "./assets/password_strength.json";
import "./App.css";
import "animate.css";
import Articles from './components/Articles';


const App = () => {
  const [strength, setStrength] = useState(null);

  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="animate__animated animate__lightSpeedInLeft">
            Test your pass Strength
          </h1>
          <div className="animation-wrapper">
            <Lottie animationData={animationData} loop={true} />
          </div>
          <PasswordInput onCheckStrength={setStrength} />
          <StrengthIndicator strength={strength} />
        </div>
      </main>
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
