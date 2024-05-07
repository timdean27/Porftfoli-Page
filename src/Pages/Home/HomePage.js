import React from "react";
import userImage from "../../assets/images/about/avatar.jpg";
import downloadIcon from "../../assets/images/download.png";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import PageTitle from "../../Share/PageTitle";

const HomePage = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      {/* End pagetitle */}

      <div
        className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
        data-aos="fade"
      >
        <img
          className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
          src={userImage}
          alt=""
        />
        <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          Timothy Dean
        </h3>
        <p className="mb-4 text-[#7B7B7B]">Software Developer</p>
        {/* Avatar Info End */}

        {/* Social information start */}
        <div className="flex space-x-3">
          <a
          href="https://github.com/timdean27"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="socialbtn text-[#e14a84] ">
            <FaGithub />
          </span>
        </a>
          <a
            href="https://www.linkedin.com/in/timothy-p-dean/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#0072b1]">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
