// components/Footer.jsx
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className='py-10 border-t border-gray-400'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* About */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Shop Fusion</h2>
          <p className='text-sm text-gray-400'>
            Discover the best deals on fashion, electronics, and more. Quality
            and trust delivered to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-gray-400 text-sm'>
            <li>
              <a href='/' className='hover:text-[#ff4655]'>
                Home
              </a>
            </li>
            <li>
              <a href='/shop' className='hover:text-[#ff4655]'>
                Shop
              </a>
            </li>
            <li>
              <a href='/cart' className='hover:text-[#ff4655]'>
                Cart
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:text-[#ff4655]'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Support</h3>
          <ul className='space-y-2 text-gray-400 text-sm'>
            <li>
              <a href='/faq' className='hover:text-[#ff4655]'>
                FAQ
              </a>
            </li>
            <li>
              <a href='/returns' className='hover:text-[#ff4655]'>
                Returns
              </a>
            </li>
            <li>
              <a href='/shipping' className='hover:text-[#ff4655]'>
                Shipping
              </a>
            </li>
            <li>
              <a href='/privacy' className='hover:text-[#ff4655]'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
          <div className='flex gap-4 text-white text-xl'>
            <a href='#' className='hover:text-blue-500'>
              <Facebook size={20} />
            </a>
            <a href='#' className='hover:text-pink-500'>
              <Instagram size={20} />
            </a>
            <a href='#' className='hover:text-sky-400'>
              <Twitter size={20} />
            </a>
            <a href='#' className='hover:text-red-600'>
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6'>
        &copy; {new Date().getFullYear()} Shop Fusion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
