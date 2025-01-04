import Link from "next/link";

function Footer() {
  return ( 
    <div>
      <div className="bg-gray-100 py-10">
  {/* Main Footer */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-4">
    {/* Account Section */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Account</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
         <li><Link href="/signin"> Log In</Link></li>
        <li><Link href="/signup">Sign Up</Link> </li>
        <li>Redeem a Gift Card</li>
      </ul>
    </div>

    {/* Company Section */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li>About</li>
        <li>Environmental Initiatives</li>
        <li>Factories</li>
        <li>DEI</li>
        <li>Careers</li>
        <li>International</li>
        <li>Accessibility</li>
      </ul>
    </div>

    {/* Get Help Section */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Get Help</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li>Help Center</li>
        <li>Return Policy</li>
        <li>Shipping Info</li>
        <li>Bulk Orders</li>
      </ul>
    </div>

    {/* Connect Section */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Affiliates</li>
        <li>Our Stores</li>
      </ul>
    </div>

    {/* Newsletter Section */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Stay Updated</h3>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button className="bg-black text-white px-4 py-2 rounded-r-lg">
          →
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Footer */}
  <div className="mt-10 text-center text-gray-500 text-xs">
    <div className="space-y-2 sm:space-y-0 sm:space-x-4">
      <span>Privacy Policy</span>
      <span>Terms of Service</span>
      <span>Do Not Sell or Share My Personal Information</span>
      <span>CS Supply Chain Transparency</span>
      <span>Vendor Code of Conduct</span>
      <span>Sitemap Pages</span>
      <span>Sitemap Products</span>
    </div>
    <p className="mt-4">© 2023 All Rights Reserved</p>
  </div>
</div>

    </div>
   );
}

export default Footer;