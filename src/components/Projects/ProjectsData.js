import Faasos from "../../img/faasos.PNG";
import Ubuy from "../../img/ubuy.PNG";
import Twitter from "../../img/twitter.PNG";
import { FaCss3Alt, FaReact, FaNode, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiRedux, SiMaterialui, SiExpress } from "react-icons/si";

export const projects = [
  {
    img: Twitter,
    title: "Twitter Clone",
    desc: "A simple Twitter Clone application created using React and firebase to mimic the basic design and functionality of the official Twitter app.",
    techStack: "TechStack:React js, Material UI, Express.js, firebase,Redux",
    type: "5 members and 5 days",
    gitLInk: "https://github.com/gopimudumal99/Twitter_Clone",
    liveLink: "https://twitter-project-work.netlify.app/",
    icons: [SiMaterialui, SiRedux, DiFirebase, FaReact],
  },
  {
    img: Ubuy,
    title: "Ubuy Clone",
    desc: "Ubuy is a popular cross border shopping e-commerce company that offers some of the best international brands which you can buy from the website",
    time: " 4 days",
    gitLInk: "https://github.com/gopimudumal99/Ubuy",
    liveLink: "https://ubuyclone.netlify.app/",
    techStack: "HTML, CSS, JavaScript",
    type: " 5 members and 4 days",
    icons: [FaHtml5, FaCss3Alt, IoLogoJavascript],
  },
  {
    img: Faasos,
    title: "Faasos Clone",
    desc: "Faasos delivers all types of foods from breakfast to lunch to dinner all from your local restaurants even let you customize each order.",
    gitLInk: "https://github.com/gopimudumal99/faasos-masai-clone",
    liveLink: "https://faasos-masai-clone.herokuapp.com/",
    techStack: "Node.js, MongoDB, Express, Html, Cs, ejs",
    type: "4 members and 5 days",
    icons: [FaHtml5, FaCss3Alt, FaNode, DiMongodb, SiExpress],
  },
];
