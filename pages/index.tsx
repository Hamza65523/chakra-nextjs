import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faListCheck,
  faCompass,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className=" p-5 h-[50vh] items-start    md:h-[50vh] md:flex md:justify-center md:pb-8 md:items-center md:flex-col  bg-[#6b46c1] text-white ">
          <h1 className="font-bold text-3xl  md:font-bold md:text-4xl md:text-center">
            Simple Pricing for your business
          </h1>
          <h4 className="text-base  pt-4 md:text-xl md:text-center md:pt-4">
            Plans that are carefully crafted to suit your business.
          </h4>
        </div>
        <div className="w-[90%] mx-auto my-0 md:w-[90%] md:mx-auto md:my-0">
          <div className="absolute  bottom-32 h-[50vh] w-[90%]  md:absolute  md:bottom-32 md:h-[50vh] md:w-[80%] ">
            <div className=" bg-white shadow-lg  rounded-2xl md:flex md:bg-white md:shadow-lg  md:rounded-2xl">
              <div className="bg-[#f0eafb] w-full py-4 rounded-2xl space-y-1 flex justify-center items-center flex-col md:bg-[#f0eafb] md:w-64 md:rounded-2xl md:space-y-1 md:flex md:justify-center md:items-center md:flex-col">
                <h3 className="text-xl font-bold md:text-xl md:font-bold">Premium PRO</h3>
                <span className="text-4xl font-bold md:text-4xl md:font-bold">$329</span>
                <h6 className="pb-2 text-sm md:pb-2 md:text-sm">billed just once</h6>
                <button className="font-[500] text-lg bg-[#6b46c1] text-white px-10 py-2 rounded-lg  md:font-[500] md:text-lg md:bg-[#6b46c1] md:text-white md:px-10 md:py-2 md:rounded-lg ">
                  Get Started
                </button>
              </div>
              <div className="px-8 py-8 md:px-8 md:py-8">
                <h5 className="mb-3 md:mb-3">
                  Access these features when you get this pricing package for
                  your business.
                </h5>
                <div className="space-y-2 md:space-y-2">
                  <span className="flex gap-2 md:flex md:gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-5 text-[#6b46c1] md:w-5 md:text-[#6b46c1]"
                    />
                    International calling and messaging API
                  </span>
                  <span className="flex gap-2 md:flex md:gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-5 text-[#6b46c1] md:w-5 md:text-[#6b46c1]"
                    />
                    Additional phone numbers
                  </span>
                  <span className="flex gap-2 md:flex md:gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-5 text-[#6b46c1] md:w-5 md:text-[#6b46c1]"
                    />
                    Automated messages via Zapier
                  </span>
                  <span className="flex gap-2 md:flex md:gap-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-5 text-[#6b46c1] md:w-5 md:text-[#6b46c1]"
                    />{" "}
                    24/7 support and consulting
                  </span>
                </div>
              </div>
            </div>
            <div className="pb-5 space-y-2 mb-20 mt-8 px-4 md:flex md:gap-10 md:mt-8 md:px-8">
              <span className="flex gap-4 font-bold md:flex md:gap-4 md:font-bold">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="w-10 text-[#6b46c1] md:w-10 md:text-[#6b46c1]"
                />
                30 dayes money back Gurantee
              </span>
              <span className="flex gap-4 font-bold md:flex md:gap-4 md:font-bold">
                <FontAwesomeIcon
                  icon={faListCheck}
                  className="w-10 text-[#6b46c1] md:w-10 md:text-[#6b46c1]"
                />{" "}
                No setup fees 100% hassle-free
              </span>
              <span className="flex gap-4 font-bold md:flex md:gap-4 md:font-bold">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="w-10 text-[#6b46c1] md:w-10 md:text-[#6b46c1]"
                />{" "}
                No monthly subscription Pay once and for all
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
