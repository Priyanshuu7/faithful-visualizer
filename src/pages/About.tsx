import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background px-4 py-12">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="font-inter text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
          About Us
        </h1>
        <p className="font-inter text-lg md:text-2xl text-gray-500 mb-6 leading-relaxed">
          <strong>Galaxies Photography and Film Productions</strong> is a professional <strong>photography</strong> & <strong>videography</strong> company based in India, led by <strong>Apoorv Shrivastava</strong>. We specialize in a wide range of creative and commercial photography services, including <strong>prewedding photography</strong>, <strong>wedding photography</strong>, <strong>real-estate photography</strong>, <strong>lifestyle photography</strong>, <strong>behind-the-scenes shoots</strong>, <strong>block printing shoots</strong>, and <strong>manufacturing process shoots</strong> for various industries.
        </p>
        <p className="font-inter text-lg md:text-2xl text-gray-500 mb-6 leading-relaxed">
          With years of experience in capturing both <strong>personal</strong> and <strong>brand stories</strong>, we focus on delivering <strong>high-quality</strong>, <strong>cinematic visuals</strong> that resonate with emotion and purpose. Our team works closely with individuals, couples, and businesses to understand their vision and translate it into powerful imagery that speaks for itself.
        </p>
        <p className="font-inter text-lg md:text-2xl text-gray-500 mb-6 leading-relaxed">
          Whether you’re looking to document your love story through a <strong>prewedding shoot</strong>, capture your big day with <strong>timeless wedding photos</strong>, showcase your product’s <strong>manufacturing process</strong>, or visually represent your brand through a <strong>lifestyle shoot</strong>, <strong>Galaxies Photography</strong> ensures <strong>professionalism</strong>, <strong>creativity</strong>, and <strong>attention to detail</strong> in every frame.
        </p>
        <p className="font-inter text-lg md:text-2xl text-gray-500 mb-6 leading-relaxed">
          Our work has taken us across cities and states, and we’re available for <strong>travel-based assignments</strong> across India and internationally. We use <strong>professional-grade equipment</strong> and a <strong>client-first approach</strong> to deliver seamless photography experiences from concept to final edit.
        </p>

        <h2 className="font-inter text-xl md:text-2xl font-semibold mt-8 mb-3 text-black">Why Choose Us?</h2>
        <ul className="font-inter text-lg md:text-xl text-gray-500 list-disc list-inside space-y-2 mb-8">
          <li><strong>Expertise</strong> in prewedding and wedding photography</li>
          <li><strong>Specialized</strong> in block printing and product manufacturing shoots</li>
          <li><strong>Skilled</strong> at capturing authentic lifestyle and BTS (behind the scenes) moments</li>
          <li><strong>Cinematic, high-resolution visuals</strong> tailored for both personal and commercial needs</li>
          <li><strong>Reliable, creative, and deadline-focused</strong> service</li>
        </ul>

        <p className="font-inter text-lg md:text-xl text-black font-semibold mb-10 leading-relaxed">
          Let <strong>Galaxies</strong> bring your story to life, through <strong>visuals that last forever</strong>.
        </p>

        <div className="flex gap-8 font-inter text-base md:text-lg text-black mt-8">
          <a href="https://www.instagram.com/galaxiesphotography" className="hover:underline">Instagram</a>
          <a href="mailto:iamapoorv23@gmail.com" className="hover:underline">Mail</a>
        </div>
      </div>
    </section>
  );
};

export default About;
