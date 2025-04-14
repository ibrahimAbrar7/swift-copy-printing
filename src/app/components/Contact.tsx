import React from "react";
import { FaClock, FaFacebook, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-lg shadow">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong><FaPhone className="inline mr-2"/></strong> 212-683-4900</p>
              <p><strong><FaClock className="inline mr-2"/></strong> <span className="font-semibold">Office Hours</span><br />
                Monday - Friday: 9:00 am to 5:00 pm<br />
                Saturday & Sunday: By Appointment
              </p>
              <p><strong><FaMailBulk className="inline mr-2"/></strong> info@swiftcopy.com</p>

              <div className="mt-4">
                <p className="font-semibold">Social Media</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-blue-600"><FaFacebook />Facebook</a>
                  <a href="#" className="text-pink-600"><FaInstagram /> SwiftCopy</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone no"
                className="w-full border px-4 py-2 rounded"
              />
              <textarea
                placeholder="Say whatever you want."
                className="w-full border px-4 py-2 rounded h-28"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold mb-4">Google Map</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3594.4715366928126!2d-73.98230765680418!3d40.7493053249779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590662a3f215%3A0x85ef044f7f0ac5af!2sSwift%20Copy%20Printing!5e0!3m2!1sen!2sus!4v1744633071408!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="rounded shadow"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
