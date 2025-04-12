import React from 'react';

function Service() {
  const services = [
    { title: 'Web Development', img: 'https://cdn.pixabay.com/photo/2022/03/25/01/15/online-shop-7090105_960_720.png' },
    { title: 'Software Development', img: 'https://cdn.pixabay.com/photo/2021/12/28/01/07/website-6898411_960_720.png' },
    { title: 'Mobile App Development', img: 'https://cdn.pixabay.com/photo/2024/04/17/20/14/man-8702916_960_720.jpg' },
    { title: 'UI/UX Design', img:'https://cdn.pixabay.com/photo/2016/08/26/18/19/responsive-1622825_960_720.png' },
    { title: 'Digital Marketing', img: 'https://cdn.pixabay.com/photo/2021/10/08/18/55/website-6692147_960_720.png' },
  ];

  return (
    <section id='about' className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h1>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              {/* Circle with Image */}
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              {/* Service Title */}
              <h2 className="text-md font-semibold text-gray-700">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;