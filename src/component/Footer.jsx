import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/logo2.png'
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className='flex items-center gap-2'>
                <Image
              src={logo}
              width={60}
              height={60}
              alt='baner image'
              className='bg-gray-200  h-15 w-15 rounded-full border-2 border-green-400 lg:ml-4'
              />
              <h1 className='font-bold text-4xl bg-[linear-gradient(9deg,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)] bg-clip-text text-transparent'>SummerMarket</h1>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
           A modern summer marketplace where you can find stylish outfits, sunglasses, skincare, and all your seasonal essentials in one place.
            </p>
          </div>

    <div></div>

          {/* Company */}
          <div className="text-xl">
            <h3 className=" font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
              
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Contact-Us
            </h3>
<div className="flex items-center gap-3">
     <a href="" className=""><FaFacebookF size={30} color="white"/></a>
            <a href="" className=""><FaInstagram size={30} color="white"/></a>
            <a href="" className=""><FaWhatsapp size={30} color="white"/></a>
</div>
           
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy policy
            </Link>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;