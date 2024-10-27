import React from 'react';
import Test1 from '../assets/img/Test1.jpg';

function Testimonial() {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Testimonials
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center mb-4">
              <img
                className="w-20 h-20 rounded-full border-2 border-indigo-500"
                src={Test1}
                alt="Client 1"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-700">Mr. Shashi Kumar </h3>
                <p className="text-sm text-gray-500">Sales Manager, THE SCHON German Based Company
                </p>
              </div>
            </div>
            <p className="text-gray-600">
            "The design was both functional and aesthetically striking, capturing our brand essence perfectly and making a remarkable impression on all visitors. We received countless compliments on the setup, and it undoubtedly contributed to the success of our participation in the exhibition."
            </p>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
