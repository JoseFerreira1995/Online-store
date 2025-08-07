import { Computer, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t bottom-0 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
      
      {/* Brand */}
      <div>
        <h2 className="text-lg font-bold uppercase mb-3">The Online Store</h2>
        <p className="text-gray-600">Your destination for quality products and unbeatable service.</p>
      </div>

      {/* Shop Links */}
      <div>
        <h3 className="font-semibold mb-2">Shop</h3>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">All Products</a></li>
          <li><a href="#" className="hover:underline">New Arrivals</a></li>
          <li><a href="#" className="hover:underline">Best Sellers</a></li>
          <li><a href="#" className="hover:underline">Gift Cards</a></li>
        </ul>
      </div>

      {/* Info Links */}
      <div>
        <h3 className="font-semibold mb-2">Information</h3>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">FAQs</a></li>
        </ul>
      </div>

      {/* Legal Links */}
      <div>
        <h3 className="font-semibold mb-2">Legal</h3>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t py-4 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} The Online Store. All rights reserved.
    </div>
  </footer>
  );
}
