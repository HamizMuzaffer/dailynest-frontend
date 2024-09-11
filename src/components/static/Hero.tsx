const Hero = () => {
  return (
    <div className="flex h-screen pt-12 md:pt-0 flex-col md:flex-row bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Left Section: Heading and Text */}
      <div className="flex flex-col justify-center items-center px-8 md:px-12 w-full md:w-2/4">
        <h1 className="text-4xl md:text-6xl px-8 font-extrabold leading-tight mb-4 text-center md:text-left">
          Stay Organized, Stay Productive!
        </h1>
        <p className="text-lg md:text-xl font-light leading-relaxed max-w-lg text-center md:text-left">
          Effortlessly manage your tasks, track progress, and collaborate with
          your team. Whether you're handling personal projects or managing a
          team, our app helps you stay focused and achieve more—on time, every
          time.
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-2/4 flex justify-center items-center relative">
        <img
          src="/dailyNest.png"
          className="md:h-auto h-auto max-w-full max-h-full object-contain drop-shadow-lg"
          alt="Task Management App"
        />
      </div>
    </div>
  );
};

export default Hero;
