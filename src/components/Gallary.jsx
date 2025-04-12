import React from 'react';

function Gallary() {
  const images = [
    'https://cdn.pixabay.com/photo/2022/03/26/01/52/seo-7092116_960_720.png',
    'https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775232_960_720.png',
    'https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775233_640.png',
    'https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764522_640.jpg',
    'https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_640.jpg',
    'https://cdn.pixabay.com/photo/2024/06/07/21/43/ai-generated-8815430_640.jpg',
    'https://cdn.pixabay.com/photo/2019/04/25/11/39/hacking-4154618_640.jpg',
    'https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764524_640.jpg',
  ];

  return (
    <section id='gallery' className="bg-gray-100 py-12">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallary;