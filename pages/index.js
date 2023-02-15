import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import Image from "next/image";
import Skills from "../components/Skills";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div>

          <div className="laptop:mt-40 mt-6 laptop:mb-20 mob:mt-20 mob:mb-10 flex justify-between">
            <div className="mt-8 flex flex-col items-center">
              <h1
                ref={textOne}
                className="text-center text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-center text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="text-center text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="text-center text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-2xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h1>
            </div>
            <div className="tablet:flex mob:hidden">
              <Image src='/images/animoji.png' alt='alt' width='400' height='400' />
            </div>
            <div>
            </div>
          </div>
          <div className="mob:mb-40">
            <Socials className="justify-center mt-1 laptop:mt-7" />
          </div>

        </div>

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold text-center">Work</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4 mob:p-2">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0 flex w-full mob: flex-col" ref={aboutRef}>
          <div className="laptop:flex-5">
            <h1 className="tablet:m-10 text-4xl text-bold">Things I do.</h1>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-xl w-full laptop:w-3/5 mob:text-sm mob:p-2 text-justify">
              {data.aboutpara}
            </p>
          </div>
          <div className="laptop:flex-3 w-100 mob:mt-10">
            <h1 className="tablet:m-10 text-4xl text-bold">Skills</h1>
            <div className="tablet:m-10 mt-2 text-xl laptop:text-5xl w-full laptop:w-3/5 mob:text-4xl grid grid-cols-3 tablet:grid-cols-6 gap-4">
              {/* {data.skills} */}
              <Skills />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
