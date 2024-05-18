import React, { useState } from 'react';
import { loginData, signupData } from './Elements.js';
import '../Styles/LoginSignupStyles.css';
import Footer from '../components/Layout/Footer.js';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const formData = isLogin ? loginData : signupData;

  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Form submission logic can be added here
    console.log('Form submitted!');
  };

  return (
    <>
    <div className="form-container">
      
      <div className="form-header">
        <button
          className={`form-toggle-button ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </button>
        <button
          className={`form-toggle-button ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>
      <form onSubmit={handleSubmit}> {/* Add form tag */}
        <h1>{formData.title}</h1>
        {formData.sections.map((section) => (
          <div key={section.id} className="form-section">
            <h2>{section.title}</h2>
            {section.subsections.map((subsection) => (
              <div key={subsection.id} className="form-subsection">
                <h3>{subsection.title}</h3>
                <p>{subsection.subtitle}</p>
                {subsection.users.map((user) => (
                  <div key={user.id} className="form-group">
                    <label htmlFor={user.id}>{user.name}</label>
                    <input
                      type={user.type}
                      id={user.id}
                      name={user.name}
                      placeholder={user.placeholder}
                      defaultChecked={user.type === 'checkbox' ? user.defaultValue : undefined}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button> {/* Submit button */}
      </form>
      <div className="background"></div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginSignup;
