import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background px-4 py-12">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="font-inter text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
          About Us
        </h1>
        <p className="font-inter text-lg md:text-2xl text-gray-500 mb-6 leading-relaxed">
          <strong>Galaxies Photography and Film Productions</strong> is a photography and videography company based in <strong>Jaipur</strong>, led by visual storyteller <strong>Apoorv Shrivastava</strong>. What began in 2017 as a personal passion has grown into a professional business dedicated to capturing stories with precision, authenticity, and cinematic style.
        </p>
        <p className="font-inter text-lg md:text-2xl text-gray-500 mb-6 leading-relaxed">
          We offer a wide range of photography and filmmaking services, including <strong>prewedding and wedding photography</strong>, <strong>real estate shoots</strong>, <strong>lifestyle coverage</strong>, and <strong>behind-the-scenes documentation</strong>. We also focus on product manufacturing processes, especially in the textile and block printing sectors.
        </p>
        <p className="font-inter text-lg md:text-2xl text-gray-500 mb-6 leading-relaxed">
          Since our first commissioned shoot in 2019, we’ve worked with individuals, couples, artists, and brands to bring over <strong>250 stories</strong> to life. We approach each project with a fresh perspective and genuine creative intent. Over the years, including during the challenges of the pandemic, we’ve continually improved our craft, evolved our visual style, and remained committed to storytelling that connects with people.
        </p>
        <p className="font-inter text-lg md:text-2xl text-gray-500 mb-6 leading-relaxed">
          At Galaxies, every project is a collaboration. We spend time understanding our clients' goals, whether it’s capturing the intimacy of a love story or showcasing the artistry of handcrafted products. Our team uses professional gear, has technical expertise, and follows a flexible approach to deliver high-quality results.
        </p>
        <p className="font-inter text-lg md:text-2xl text-gray-500 mb-6 leading-relaxed">
          We are open to travel-based assignments across India and internationally. We take pride in being reliable, meeting deadlines, and staying creatively involved from start to finish.
        </p>
        <h2 className="font-inter text-xl md:text-2xl font-semibold mt-8 mb-3 text-black">Why Choose Galaxies?</h2>
        <ul className="font-inter text-lg md:text-xl text-gray-500 list-disc list-inside space-y-2 mb-8">
          <li><strong>Expertise</strong> in prewedding and wedding photography</li>
          <li><strong>Specialized</strong> in documenting the story of your brand and its manufacturing processes</li>
          <li><strong>Skilled</strong> at lifestyle photography and authentic behind-the-scenes storytelling</li>
          <li><strong>Cinematic, high-resolution visuals</strong> tailored for personal and commercial projects</li>
          <li><strong>Professional, dependable, and creatively focused</strong> team</li>
        </ul>
        <p className="font-inter text-lg md:text-xl text-black font-semibold mb-10 leading-relaxed">
          Let <strong>Galaxies Photography and Film Productions</strong> bring your story to life through <strong>visuals that communicate your narrative and create lasting memories</strong>.
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
