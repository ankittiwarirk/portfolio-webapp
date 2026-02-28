import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setStatus(data.message);
      
      if (res.ok) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-white">Contact Me</h2>
      
      {status && (
        <div className="mb-4 p-4 bg-green-900 text-green-100 rounded">
          {status}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 bg-gray-800 border border-gray-700 rounded text-white"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 bg-gray-800 border border-gray-700 rounded text-white"
        />
        
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 bg-gray-800 border border-gray-700 rounded text-white"
        />
        
        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 py-3 px-4 rounded text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
