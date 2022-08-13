import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.jpg";
import work2 from "../assets/images/work_images/2.jpg";
import work3 from "../assets/images/work_images/3.jpg";
import work4 from "../assets/images/work_images/4.jpg";
import work5 from "../assets/images/work_images/5.jpg";
import work6 from "../assets/images/work_images/6.jpg";
import work7 from "../assets/images/work_images/7.jpg";
import work8 from "../assets/images/work_images/8.jpg";
import work9 from "../assets/images/work_images/9.jpg";
import checkers from "../assets/images/work_images/Checkersgiphy - Copy.gif";
import profolio from "../assets/images/work_images/Pro-folio-app - Copy.gif";
import sneakers from "../assets/images/work_images/SneakersAppgiphy - Copy.gif";
// works small images
import workSmall1 from "../assets/images/work_images/small/1.jpg";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.jpg";
import workSmall4 from "../assets/images/work_images/small/4.jpg";
import workSmall5 from "../assets/images/work_images/small/5.jpg";
import workSmall6 from "../assets/images/work_images/small/6.jpg";
import workSmall7 from "../assets/images/work_images/small/7.jpg";
import workSmall8 from "../assets/images/work_images/small/8.jpg";
import workSmall9 from "../assets/images/work_images/small/9.jpg";

// blog post images
// import blog6 from "../assets/images/blog_images/6.jpg";
// import blog4 from "../assets/images/blog_images/4.jpg";
// import blog2 from "../assets/images/blog_images/2.jpg";
// import blog1 from "../assets/images/blog_images/1.jpg";
// import blog3 from "../assets/images/blog_images/3.jpg";
// import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
// import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
// import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
// import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
// import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
// import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
// import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
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

import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
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

  // find items for Blogs  modal open
  // const handleBlogsData = (id) => {
  //   const find = blogsData.find((item) => item?.id === id);
  //   setSingleData(find);
  //   setIsOpen(true);
  // };

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
      title: "Just Checkers",
      img: checkers,
      imgSmall: checkers,
      bg: "#FFF0F0",
      //client: "Envato",
      langages: "JavaScript, CSS3, HTML5",
      link: "https://timdean27.github.io/Checkers-Just-Checkers-/",
      linkText: "Just-Checkers",
      github:"https://github.com/timdean27/Checkers-Just-Checkers-",
      githubText:"Just-Checkers-Github",
      description:
        "Included all features of a standard two-player game of checkers including multiple jumps, promotion to King and two-directional play for Kings. It also tracks player turns and captured pieces.",
    },
    {
      id: "2",
      tag: "Web Design",
      title: "Try FooDer",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      // client: "Themeforest",
      langages: "React, Django, Express ,PostgreSQL ,Python",
      link: "https://pro-folio-njt.netlify.app/",
      linkText: "Try FooDer",
      github:"https://github.com/timdean27/FooDer-frontend",
      githubText:"FooDer Front End Github",
      description:
        "Sole developer for this application which allows users to select restaurants by food type, price and distance. Django/Postgres backend and and Express proxy route for API calls to Yelp",
    },
    {
      id: "3",
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
    {
      id: "4",
      tag: "Web Design",
      title: "Profolio",
      img: profolio,
      imgSmall: profolio,
      bg: "#E9FAFF",
      client: "Envato",
      langages: "React.js,Expres,emailJS",
      link: "https://pro-folio-njt.netlify.app/",
      linkText: "Profolio",
      github:"https://github.com/timdean27/Pro-folio_frontend",
      githubText:"Profolio Front End Github",
      description:
        "Personal Project Management. The application will create a way for our team, as well as other developers, to market themselves through an app that is designed to showcase your personal projects all on one main page with links to individual project pages. The app will contain contact information including links to resumes, cover letters, gitHub, LinkedIn, etc.",
    },
    // {
    //   id: "5",
    //   tag: "UI/UX",
    //   title: "Chul urina",
    //   img: work5,
    //   imgSmall: workSmall5,
    //   bg: "#FFFAE9",
    //   client: "Envato",
    //   langages: "Photoshop",
    //   link: "https://www.envato.com",
    //   linkText: "www.envato.com",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    // },
    // {
    //   id: "6",
    //   tag: "Video",
    //   title: "Chul urina",
    //   img: work6,
    //   imgSmall: workSmall6,
    //   bg: "#F4F4FF",
    //   client: "Envato",
    //   langages: "Vimeo",
    //   link: "https://www.envato.com",
    //   linkText: "www.envato.com",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    // },
    // {
    //   id: "7",
    //   tag: "UI/UX",
    //   title: "Chul urina",
    //   img: work7,
    //   imgSmall: workSmall7,
    //   bg: "#FFF0F8",
    //   client: "Envato",
    //   langages: "Photoshop",
    //   link: "https://www.envato.com",
    //   linkText: "www.envato.com",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    // },
    // {
    //   id: "8",
    //   tag: "Web Design",
    //   title: "Chul urina",
    //   img: work8,
    //   imgSmall: workSmall8,
    //   bg: "#FFF0F8",
    //   client: "Envato",
    //   langages: "HTML, CSS, Javascript",
    //   link: "https://www.envato.com",
    //   linkText: "www.envato.com",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    // },
    // {
    //   id: "9",
    //   tag: "Logo",
    //   title: "Chul urina",
    //   img: work9,
    //   imgSmall: workSmall9,
    //   bg: "#FCF4FF",
    //   client: "Feepik",
    //   langages: "Figma",
    //   link: "https://www.freepik.com/free-photos-vectors/market-logo",
    //   linkText: "www.freepik.com",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    // },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  // const blogsData = [
  //   {
  //     id: "1",
  //     img: blog1,
  //     imgSmall: blogSmall1,
  //     date: "177 April",
  //     category: "Inspiration",
  //     title: "How to Own Your Audience by Creating an Email List.",
  //     bg: "#FCF4FF",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
  //   },
  //   {
  //     id: "4",
  //     img: blog4,
  //     imgSmall: blogSmall4,
  //     date: "000 April",
  //     category: "Inspiration",
  //     title: "Everything You Need to Know About Web Accessibility.",
  //     bg: "#EEFBFF",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
  //   },
  //   {
  //     id: "2",
  //     img: blog2,
  //     imgSmall: blogSmall2,
  //     date: "21 April",
  //     category: "Web Design",
  //     title: "The window know to say beside you",
  //     bg: "#FFF0F0",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
  //   },
  //   {
  //     id: "5",
  //     img: blog5,
  //     imgSmall: blogSmall5,
  //     date: "27 April",
  //     category: "Inspiration",
  //     title: "Top 10 Toolkits for Deep Learning in 2021.",
  //     bg: "#FCF4FF",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
  //   },
  //   {
  //     id: "3",
  //     img: blog3,
  //     imgSmall: blogSmall3,
  //     date: "27 April",
  //     category: "Inspiration",
  //     title: "How to Own Your Audience by Creating an Email List.",
  //     bg: "#FCF4FF",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
  //   },
  //   {
  //     id: "6",
  //     img: blog6,
  //     imgSmall: blogSmall6,
  //     date: "27 April",
  //     category: "Inspiration",
  //     title: "Everything You Need to Know About Web Accessibility.",
  //     bg: "#EEFBFF",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
  //   },
  // ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/home/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/home/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

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
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/homeTwo/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // experience items for about page
  const experienceArray = [
    {
      id: "1",
      icon: javascript,
      title: "Javascript",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#D566FF",
      bg: "#fcf1a1",
    },
    {
      id: "2",
      icon: python,
      title: "Python",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#DDA10C",
      bg: "#ebfcc5",
    },
    {
      id: "3",
      icon: react,
      title: "React",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#8774FF",
      bg: "#c5fcf5",
    },
    {
      id: "4",
      icon: postgresql,
      title: "Postgresql",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: mongodb,
      title: "MongoDB",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
    {
      id: "6",
      icon: nodejs,
      title: "Node.js",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      id: "7",
      icon: bootstrap,
      title: "Bootstrap",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#FF75D8",
      bg: "#cdd8fa",
    },
    {
      id: "8",
      icon: django,
      title: "Django",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#269FFF",
      bg: "#bccccd",
    },
  
    {
      id: "9",
      icon: html,
      title: "HTML",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#269FFF",
      bg: "#faeccd",
    },
    {
      id: "10",
      icon: github,
      title: "Github",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
      color: "#219FDF",
      bg: "#aaeccd",
    },
    {
      id: "11",
      icon: css,
      title: "CSS",
      //des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
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

      // id2: "03",
      // date2: "2021",
      // title2: "Best Developer ",
      // place2: "University Of Melbourne, NA",
      // bg2: "#FFF4F4",
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
    // {
    //   type: "Awards",
    //   icon: FaAward,
    //   id: "07",
    //   date: "2015-2017",
    //   title: "  Graphic Designer",
    //   place: "Web Graphy, Los Angeles, CA",
    //   bg: "#FCF4FF",

    //   id1: "08",
    //   date1: "2014 - 2015",
    //   title1: "Jr. Web Developer",
    //   place1: "Creative Gigs.",
    //   bg1: "#FCF9F2",

    //   id2: "09",
    //   date2: "2015-2017",
    //   title2: "Best Freelancer",
    //   place2: "Fiver & Upwork Level 2 & Top Rated",
    //   bg2: "#FCF4FF",
    // },
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
    // {
    //   id: "03",
    //   color: "#5185D4",
    //   name: "Illustrator",
    //   number: "100",
    // },
    // {
    //   id: "03",
    //   color: "#CA56F2",
    //   name: "Excell",
    //   number: "100",
    // },
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
      item1: "timdean29@gmail.com",
      item2: "timdean29@gmail.com",
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
    // blogsData,
    // handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    experienceArray,
    sliderImg,
    resumeArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
