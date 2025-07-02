import Globe from "react-globe.gl";
import { useRef, useEffect, useState } from "react";
import Button from "../Components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current && globeRef.current.controls) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      controls.enableRotate = true;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1;
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("rajatsen7568@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Rajat</p>
              <p className="grid-subtext">
                I’m a B.Tech Computer Science student with a specialization in
                AI & ML. I’ve developed <strong>Wanderlust</strong>, a fullstack
                travel listing platform. I love turning ideas into smooth,
                interactive digital experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                My tech stack includes JavaScript, React, Node.js, Express,
                MongoDB, TailwindCSS, and Three.js — enabling me to craft
                modern, full-stack web experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center ">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I am open to working both on-site at a company and remotely
              </p>
              <p className="grid-subtext">
                I'm based in India, passionate about building impactful web
                experiences from anywhere.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-24" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love turning ideas into interactive experiences—from clean UIs
                to powerful backends. My passion lies in coding and building
                immersive 3D web apps that truly stand out.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  rajatsen7568@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
