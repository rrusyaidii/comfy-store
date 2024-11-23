const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        At ComfyShop, comfort is more than a word—it’s our philosophy. We’re
        passionate about bringing ease and style into your life, making every
        corner of your space feel just right. Whether you’re unwinding after a
        long day or creating a cozy spot to share with loved ones, we’re here to
        make comfort your everyday reality.
      </p>
    </>
  );
};
export default About;
