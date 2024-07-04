import { useEffect, useState } from "react";
// for work_images

import fooder1 from "../assets/images/work_images/fooder1.gif";
import checkers from "../assets/images/work_images/Checkersgiphy - Copy.gif";
import profolio from "../assets/images/work_images/Pro-folio-app - Copy.gif";
import sneakers from "../assets/images/work_images/SneakersAppgiphy - Copy.gif";
import Church_concert_Gif from "../assets/images/work_images/Church_concert_Gif.gif";
//  icon use as img here
import javascript from "../assets/images/icons/javascript.svg";
import bootstrap from "../assets/images/icons/bootstrap.svg";
import css from "../assets/images/icons/css.svg";
import html from "../assets/images/icons/html.svg";
import react from "../assets/images/icons/react.svg";
import postgresql from "../assets/images/icons/post_gray_sql.svg";
import nodejs from "../assets/images/icons/nodejs-icon.svg";
import python from "../assets/images/icons/python.svg";
import mongodb from "../assets/images/icons/mongodb.svg";
import django from "../assets/images/icons/django.svg";
import github from "../assets/images/icons/github.svg";

// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser, FaAward } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };


  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Web Design",
      title: "GreenLawn Church Concert",
      img: Church_concert_Gif,
      imgSmall: Church_concert_Gif,
      bg: "#E9FAFF",
      langages: "Js, Python , React , Django , Express , Docker , AWS",
      link: "https://github.com/timdean27/Ticket_sales_front",
      linkText: "Github Front",
      github:"https://github.com/timdean27/Ticket_sales_back" ,
      githubText:"Github Back",
      description: "Full Stack Engineer |Freelance| Ticketing Webpage for Local Church\nReact, JavaScript, Django, Python, Express, Node.js, mySQL, Docker, AWS| Front-End|Back-End|Paypal\n● Built a dynamic website for a local church to help sell concert tickets to raise money for the church\n● Full stack website with react frontend built with Vite, back end restful API on Django with mySQL database\n● Connected to PayPal through express router\n● mySQL server on amazon RDS (Relational Database Service)\n● Hosted and connected backends frontend through docker hub and amazon EC2 cloud instances"

    },
    {
      id: "2",
      tag: "Web Design",
      title: "Just Checkers",
      img: checkers,
      imgSmall: checkers,
      bg: "#FFF0F0",
  
      langages: "JavaScript, CSS3, HTML5",
      link: "https://timdean27.github.io/Checkers-Just-Checkers-/",
      linkText: "Just-Checkers",
      github:"https://github.com/timdean27/Checkers-Just-Checkers-",
      githubText:"Just-Checkers-Github",
      description:
        "Included all features of a standard two-player game of checkers including multiple jumps, promotion to King and two-directional play for Kings. It also tracks player turns and captured pieces.",
    },
    {
      id: "3",
      tag: "Web Design",
      title: "Try FooDer",
      img: fooder1,
      imgSmall: fooder1,
      bg: "#FFF3FC",
      // client: "Themeforest",
      langages: "React, Django, Express ,PostgreSQL ,Python",
      link: "https://use-fooder-app.netlify.app/",
      linkText: "Try FooDer",
      github:"https://github.com/timdean27/FooDer-frontend",
      githubText:"FooDer Front End Github",
      description:
        "Sole developer for this application which allows users to select restaurants by food type, price and distance. Django/Postgres backend and and Express proxy route for API calls to Yelp",
    },
    {
      id: "4",
      tag: "Web Design",
      title: "Sneakers-Collection-App",
      img: sneakers,
      imgSmall: sneakers,
      bg: "#FFF0F0",
      client: "Freepik",
      langages: "JS, Express, MongoDB,EJS",
      link: "https://sneakers-collection-app.herokuapp.com/home",
      linkText: "Sneakers-Collection-App",
      github:"https://github.com/timdean27/Sneakers-App-2",
      githubText:"Sneakers-Collection-App FrontEnd",
      description:
        "  As a personal collecter/reseller of sneakers I wanted to create an app that will let me categorize, add, update, and delete sneakers in my collection/inventory as well as a page to keep track of upcoming releases.I also wanted to keep some minor accounting information to track when the sneaker was sold, for how much, and if the sale was profitable.",
    },
  ];
  const [data, setData] = useState(workItems);



  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Projects",
      link: "/projects",
      icon: <FiCodesandbox />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // experience items for about page
  const experienceArray = [
    {
      id: "1",
      icon: javascript,
      title: "Javascript",
      color: "#D566FF",
      bg: "#fcf1a1",
    },
    {
      id: "2",
      icon: python,
      title: "Python",
      color: "#DDA10C",
      bg: "#ebfcc5",
    },
    {
      id: "3",
      icon: react,
      title: "React",
      color: "#8774FF",
      bg: "#c5fcf5",
    },
    {
      id: "4",
      icon: postgresql,
      title: "Postgresql",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: mongodb,
      title: "MongoDB",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: nodejs,
      title: "Node.js",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      id: "7",
      icon: bootstrap,
      title: "Bootstrap",
      color: "#FF75D8",
      bg: "#cdd8fa",
    },
    {
      id: "8",
      icon: django,
      title: "Django",
      color: "#269FFF",
      bg: "#bccccd",
    },
  
    {
      id: "9",
      icon: html,
      title: "HTML",
      color: "#269FFF",
      bg: "#faeccd",
    },
    {
      id: "10",
      icon: github,
      title: "Github",
      color: "#219FDF",
      bg: "#aaeccd",
    },
    {
      id: "11",
      icon: css,
      title: "CSS",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
  
  ];

  // Resume items for Resume page
  const resumeArray = [
    {
      type: "Education",
      icon: MdOutlineSchool,
      id: "01",
      date: "January 2022 - July 2022",
      title: "Software Engineering Immersive",
      place: "General Assembly",
      bg: "#FFF4F4",

      id1: "02",
      date1: "2010-2016",
      title1: "BS in Business Management / Minor in Accounting & Applied Mathematics",
      place1: "Stony Brook University ",
      bg1: "#FFF1FB",

    },
    {
      type: "Experience",
      icon: MdOutlineBusinessCenter,
      id: "04",
      date: "2018 - Present",
      title: "Insurance Underwriter / Administrator ",
      place: "KAH Insurance Inc | Melville, New York",
      bg: "#EEF5FA",

      id1: "05",
      date1: "2017-2018",
      title1: "Payroll Team",
      place1: "Family Residences and Essential Enterprises | Melville, New York",
      bg1: "#F2F4FF",

    },

  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Web Design",
      number: "100",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Mobile App ",
      number: "100",
    },

  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+631-742-250",
      item2: "+631-742-250",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "timdeanSE@gmail.com",
      item2: "timdeanSE@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "East Northport",
      item2: " New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,

    NavLink,
    menuItemTwo,
    experienceArray,
    resumeArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
