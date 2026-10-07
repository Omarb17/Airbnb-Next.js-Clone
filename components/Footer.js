import React from "react";

function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-4 text-sm text-gray-700">
          <h5 className="font-semibold text-gray-900">Support</h5>
          <p className="cursor-pointer hover:underline">Help Center</p>
          <p className="cursor-pointer hover:underline">AirCover</p>
          <p className="cursor-pointer hover:underline">Anti-discrimination</p>
          <p className="cursor-pointer hover:underline">Disability support</p>
          <p className="cursor-pointer hover:underline">Cancellation options</p>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <h5 className="font-semibold text-gray-900">Hosting</h5>
          <p className="cursor-pointer hover:underline">Airbnb your home</p>
          <p className="cursor-pointer hover:underline">AirCover for Hosts</p>
          <p className="cursor-pointer hover:underline">Hosting resources</p>
          <p className="cursor-pointer hover:underline">Community forum</p>
          <p className="cursor-pointer hover:underline">Hosting responsibly</p>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <h5 className="font-semibold text-gray-900">Airbnb</h5>
          <p className="cursor-pointer hover:underline">Newsroom</p>
          <p className="cursor-pointer hover:underline">New features</p>
          <p className="cursor-pointer hover:underline">Careers</p>
          <p className="cursor-pointer hover:underline">Investors</p>
          <p className="cursor-pointer hover:underline">Gift cards</p>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <h5 className="font-semibold text-gray-900">Discover</h5>
          <p className="cursor-pointer hover:underline">Popular destinations</p>
          <p className="cursor-pointer hover:underline">Unique stays</p>
          <p className="cursor-pointer hover:underline">Experiences</p>
          <p className="cursor-pointer hover:underline">Travel inspiration</p>
          <p className="cursor-pointer hover:underline">Airbnb Magazine</p>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 py-6 text-sm text-gray-700 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Airbnb Clone. All rights reserved.</p>

          <div className="flex gap-5">
            <p className="cursor-pointer hover:underline">Privacy</p>
            <p className="cursor-pointer hover:underline">Terms</p>
            <p className="cursor-pointer hover:underline">Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
