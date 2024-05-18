import React from 'react';
import { contactData } from '../Pages/Elements.js'; // Adjust the path as necessary
import '../Styles/ContactStyles.css';
import Footer from '../components/Layout/Footer.js';

const Contact = () => {
  const { title, subsections } = contactData;

  return (
    <>
    <div className="form-container3">
      <h1>{title}</h1>
      {subsections.map(subsection => (
        <div key={subsection.id} className="form-section3">
          <h2>{subsection.title}</h2>
          <p>{subsection.subtitle}</p>
          {subsection.fields.map(field => (
            <div key={field.id} className="form-group3">
              <label htmlFor={field.id}>{field.name}</label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </div>
      ))}
       <button type="submit" className="submit-button3">Submit</button>
       <div className="background3"></div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
