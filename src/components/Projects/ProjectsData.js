import Faasos from "../../img/faasos.PNG";
import Ubuy from "../../img/ubuy.PNG";
import Twitter from "../../img/twitter.PNG";
import { FaCss3Alt, FaReact, FaNode, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiRedux, SiMaterialui, SiExpress } from "react-icons/si";
import Calculator from "../../img/calculator.PNG";
import FoodRecipe from "../../img/foodIngreadients.PNG";
import Emart from "../../img/emart.PNG";
import Imgur from "../../img/imgur.PNG";
import MovieTrend from "../../img/movie-trend.PNG";

export const projects = [
  {
    img: Twitter,
    title: "Twitter Clone",
    desc: "A simple Twitter Clone application created using React and firebase to mimic the basic design and functionality of the official Twitter app.",
    techStack: "React js, Material UI, Express.js, firebase,Redux",
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
    desc: "Faasos delivers all types of foods from breakfast-lunch-dinner all from your local restaurants and even let you customize each order.",
    gitLInk: "https://github.com/gopimudumal99/faasos-masai-clone",
    liveLink: "https://faasos-masai-clone.herokuapp.com/",
    techStack: "Node.js, MongoDB, Express, Html, Css, ejs",
    type: "4 members and 5 days",
    icons: [FaHtml5, FaCss3Alt, FaNode, DiMongodb, SiExpress],
  },

  {
    img: Emart,
    title: "E-mart",
    desc: "Built an e-commerce website with classic look and greater user exprerience functionality",
    gitLInk: "https://github.com/gopimudumal99/emart",
    liveLink: "https://emart-react.netlify.app/",
    techStack: "React.js Bootstrap Redux ",
    type: "Solo and 2 days",
  },

  {
    img: FoodRecipe,
    title: "Food Ingredients",
    desc: "It is a food recipe app provide entire information of food by seach your ingredients ",
    gitLInk: "https://github.com/gopimudumal99/Food-Recipes-app.github.io",
    liveLink: "https://gopimudumal99.github.io/Food-Recipes-app.github.io/",
    techStack: "Html css JavaScripts ",
    type: "Solo and 1day",
  },

  {
    img: Calculator,
    title: "Calculator",
    desc: "A simple calculator performing all operations simillar normal calculator",
    gitLInk: "https://github.com/gopimudumal99/Calculator",
    liveLink: "https://gopi-reactjs-calculator.netlify.app/",
    techStack: "React.js css ",
    type: "Solo and 5hrs",
  },
  {
    img: Imgur,
    title: "imgur",
    desc: "imgur website designed by Html Css and JavaScript",
    gitLInk: "https://github.com/gopimudumal99/imgur.github.io",
    liveLink: "https://imgur-gopi.netlify.app/",
    techStack: "html js css",
    type: "Solo and 1day",
  },
  {
    img: MovieTrend,
    title: "Movie-search",
    desc: "Search a movie and get a rating of the movie and overview  ",
    gitLInk: "https://github.com/gopimudumal99/movieapp",
    liveLink: "https://movie-trend-app.netlify.app/",
    techStack: "Html JavaScript Css",
    type: "Solo and 1day",
  },
];
