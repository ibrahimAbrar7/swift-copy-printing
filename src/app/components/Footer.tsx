import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail, MdAccessTime } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white text-sm py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1: Google Map */}
        <div className="w-full">
          <h4 className="font-semibold mb-4 text-lg">Google Maps</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3594.4715366928126!2d-73.98230765680418!3d40.7493053249779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590662a3f215%3A0x85ef044f7f0ac5af!2sSwift%20Copy%20Printing!5e0!3m2!1sen!2sus!4v1744633071408!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Column 2: Contact Info */}
        <div className="w-full flex flex-col justify-center items-start md:items-center md:items-start">
          <div className="flex flex-col gap-4 justify-center text-center md:text-left">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-xl text-white" />
              <span className="text-base">212-683-4900</span>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-3">
              <MdAccessTime className="text-xl text-white mt-1" />
              <div className="flex flex-col">
                <strong className="text-base flex items-start">Office Hours:</strong>
                <div className="flex flex-col gap-1">
                  <p className="text-sm">
                    Monday – Friday: 9:00 am to 5:00 pm.
                  </p>
                  <p className="text-sm">Saturday & Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <MdEmail className="text-xl text-white" />
              <span className="text-base">info@swiftcopy.com</span>
            </div>
          </div>
        </div>

        {/* Column 3: Links + Social */}
        <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-6">
          <div className="flex flex-col gap-4">
            {/* Links */}
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:underline text-base">
                Home
              </a>
              <a href="#" className="hover:underline text-base">
                About Us
              </a>
              <a href="#" className="hover:underline text-base">
                Products
              </a>
              <a href="#" className="hover:underline text-base">
                Clients
              </a>
              <a href="#" className="hover:underline text-base">
                File Upload
              </a>
              <a href="#" className="hover:underline text-base">
                Contact Us
              </a>
              <a href="#" className="hover:underline text-base">
                Admin
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex items-center gap-3">
              <FaFacebookSquare className="text-blue-500 text-xl hover:text-blue-600 cursor-pointer" />
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagramSquare className="text-pink-500 text-xl hover:text-pink-600 cursor-pointer" />
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-md">
        <p>&copy; 2025 Swift Copy Printing. All rights reserved.</p>
      </div>
    </footer>
  );
}
