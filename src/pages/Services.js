import React from 'react';
import Service from '../components/Service';

function Services() {
  const services = [
    { title: 'High Speed Internet', description: 'Fiber-optic connections available across all spaces.' },
    { title: 'Transportation', description: 'Convenient travel arrangements within the region.' },
    { title: 'Rental Services', description: 'Access to equipment and outdoor gear.' },
    { title: 'Food Delivery', description: 'Daily healthy meals delivered to your space.' }
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <Service key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}

export default Services;
