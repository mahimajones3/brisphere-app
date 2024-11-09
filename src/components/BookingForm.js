import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
      <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
      <input name="checkIn" type="date" onChange={handleChange} value={formData.checkIn} />
      <input name="checkOut" type="date" onChange={handleChange} value={formData.checkOut} />
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
