import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Ankit Tiwari', email: 'ankittiwarirk@gmail.com', phone: '8946074009' }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded text-white">Send Message</button>
      </form>
      {message && <p className="mt-4 text-green-400">{message}</p>}
    </section>
  );
}
