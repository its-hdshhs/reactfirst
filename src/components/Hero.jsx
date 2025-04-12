import React from 'react';

function Hero() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to <span className="text-emerald-700">AI Wallet-Hub</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mt-4">
            Your trusted partner in managing finances with the power of AI. We're thrilled to have you here. Start your journey today!
          </p>
          <button className="mt-6 px-6 py-3 bg-emerald-700 text-white text-base sm:text-lg font-medium rounded-lg shadow-lg hover:bg-emerald-800 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <img
            src="https://cdn.pixabay.com/photo/2024/05/20/13/28/ai-generated-8775235_960_720.png"
            alt="AI Wallet"
            className="rounded-2xl shadow-lg w-10/12 sm:w-8/12 md:w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;