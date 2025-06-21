import React from 'react';
import './Services.css';

export default function Services() {
 const services = [
  {
    title: 'Modern Farming Techniques',
    description: (
      <>
        📘 Soil-less growing (cocopeat, hydroponics).{' '}
        <a
          href="https://www.agriculture.com/farming/modern-techniques"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      </>
    ),
  },
  {
    title: 'Watering Schedule Generator',
    description: (
      <>
        💧 Option to email or download the schedule.{' '}
        <a
          href="https://www.gardendesign.com/how-to/watering.html"
          target="_blank"
          rel="noreferrer"
        >
          Read Guide
        </a>
      </>
    ),
  },
  {
    title: 'Guided Tutorials & Learning',
    description: (
      <>
        🎓 Step-by-step video guides on soil, irrigation, pruning, etc.{' '}
        <a
          href="https://www.youtube.com/results?search_query=rooftop+farming+tutorial"
          target="_blank"
          rel="noreferrer"
        >
          Watch Tutorials
        </a>
      </>
    ),
  },
  
    {
    title: 'Request Rooftop Setup Service',
    description: (
      <>
       🛠️Simple form to request on-site setup...{' '}
        <a
          href="https://dir.indiamart.com/impcat/rooftop-farming.html"
          target="_blank"
          rel="noreferrer"
        >
          Watch Tutorials
        </a>
      </>
    ),
  },

  {
    title: 'Welcome to Rooftop Farming Shop',
    description: (
      <>
       🛒"We have been feeding your family fresh for years.{' '}
        <a
          href="https://www.trustbasket.com/collections/rooftop-organic-farming-kit?srsltid=AfmBOoryoQN7kWvOdIEnT6r6wzC3dcBigK3N2b1wdSW1dmn8LgDo48J_"
          target="_blank"
          rel="noreferrer"
        >
          Watch Tutorials
        </a>
      </>
    ),
  },



];



  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
