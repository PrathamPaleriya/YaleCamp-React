import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { BarLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';

const About = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/prathampaleriya')
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID , 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID , 
        formData, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setAlert(null);
    } catch (err) {
      console.error(err);
      setAlert(err.text);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">

      <Helmet>
        <title>About - Yelpcamp</title>
      </Helmet>

      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 md:mb-0 md:mr-8 flex-shrink-0">
            <img src={data.avatar_url} className="rounded-full" alt="Avatar" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-5">About YelpCamp</h1>
            <p className="text-gray-700 mb-4">
              Welcome to YelpCamp, your go-to website for finding the best campgrounds. <br />
              This project is a portfolio piece, showcasing the use of modern technologies such as React.js, Tailwind CSS, Appwrite BaaS, and more.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/PrathamPaleriya/YaleCamp-React" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/prathampaleriya/" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>

              {alert && (
                <div className="text-lg text-red-500 w-full">
                  <p>{alert}</p>
                </div>
              )}

              <div className="flex justify-center items-center h-full py-2">
                {loading && (
                  <BarLoader
                    color={"#000"}
                    loading={loading}
                    width={100}
                    speedMultiplier={3}
                  />
                )}
              </div>

              <button
                type="submit"
                className={`px-6 py-2 text-white rounded-md hover:bg-slate-800 ${alert ? 'bg-red-400' : 'bg-slate-950'}`}
                disabled={loading}
              >
                {alert ? 'Send again' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p className="text-gray-700 mb-4">Your message has been sent successfully. 🙌🏻</p>
            <button onClick={closeModal} className="px-4 py-2 bg-slate-950 text-white rounded-md hover:bg-slate-800">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
