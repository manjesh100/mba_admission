import React from "react";

const SubscribeNewsletter: React.FC = () => {
  return (
    <>
      <div className="container_width mx-auto px-5">
        <div className="newsletter_box_sec mt-10 md:mt-28 mb-10 md:mb-28 text-center">
          <div className="quote_txt text-lg md:text-xl">
            Be the first to know when EdPlatza launches. Receive news, announcements, and reports.
          </div>
          <div className="signup_form_sec mt-4 md:mt-6">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full md:w-1/2 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="mt-4 md:mt-0 ml-0 md:ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeNewsletter;