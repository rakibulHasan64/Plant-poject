// const Footer = () => {
//   return (
//     <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
//       <div className='py-6 text-sm text-center text-gray-400'>
//         © 2025-2026 PlantNet Inc. All rights reserved.
//       </div>
//     </footer>
//   )
// }

// export default Footer

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaGooglePlusG, FaRss } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#222] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC01/image/catalog/demo/banners/footer-logo.png" alt="logo" className="" />
            {/* <h1 className="text-2xl  font-thin">
              <span className="text-green-500">Nur</span>sery
            </h1> */}
          </div>
          <p className="text-gray-400 text-sm">
            Majority have suffered alteration in some form, by injected.
          </p>
        </div>

        {/* Column 2: Extras */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Extras</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Brands</li>
            <li>Gift Certificates</li>
            <li>Specials</li>
            <li>Site Map</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3: My Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">My Account</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>My Account</li>
            <li>Order History</li>
            <li>Wish List</li>
            <li>Newsletter</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Column 4: Store Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Store Information</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Demo Store, United States
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> 0123456789
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> dem@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Payment icons */}
      <div className="mt-10 flex justify-center gap-4">
        <img src="/assets/payment.png" alt="payments" className="h-6" />
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        Powered By OpenCart Your Store © 2025
        <div className="flex justify-center gap-4 mt-2 text-lg">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG />
          <FaRss />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
