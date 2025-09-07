// import { useRef } from "react";
// import "./portfolio.scss";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// const items = [
//   {
//     id: 1,
//     title: "AI-Powered Sustainable Material Advisor",
//     img: "/smaa.png", // Replace with a relevant image or a GIF of your project
//     desc: "Developed an ML-based recommendation system trained on over 5,000 records. Integrated a Next.js frontend with LLM APIs and LS-DYNA for simulations, and deployed the application on Azure Cloud.",
//     // Extracted from resume [cite: 47, 46]
//     // Extracted from resume
//   },
//   {
//     id: 2,
//     title: "Symphony of Stars",
//     img: "/sos.png", // Replace with a relevant image or a GIF of your project
//     desc: "Created a 3D web application to simulate solar system motion using Three.js, WebGL, and NASA APIs. The project rendered over 100 celestial bodies with real-time physics and spatial audio.",
//     },
//   {
//      id: 3,
//     title: "Share Market Forecasting Dashboard",
//     img: "https://imgs.search.brave.com/DU8tExw6yIqWczhqytI_v8yiWXG6VUz8ohPS9gbKWaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXRh/LWZsYWlyLnRyYWlu/aW5nL2Jsb2dzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy8y/LzIwMjAvMDUvU3Rv/Y2stUHJpY2UtUHJl/ZGljdGlvbi1wcm9q/ZWN0LWRhc2hib2Fy/ZC0yLmdpZg.gif", // Replace with a relevant image or a GIF of your project
//     desc: "Engineered a stock prediction dashboard that processes live NSE data via Google Sheets API. It uses Pandas for feature extraction and Scikit-learn for regression models, with visualizations created using Flask and Matplotlib.",
//      },
//   // {
//   //   id: 4,
//   //   title: "Relax Mobile App",
//   //   img: "https://images.pexels.com/photos/5077041/pexels-photo-5077041.jpeg?auto=compress&cs=tinysrgb&w=1600",
//   //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
//   // },
// ];
// const Single = ({ item }) => {
//     const ref=useRef();


//     const { scrollYProgress } = useScroll({
//     target: ref,  
//     // offset: ["start start", "end start" ], 
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
//   return <section>
//     <div className="container">
//         <div className="wrapper">
//             <div className="imageContainer"  ref={ref}>
//         <img src={item.img} alt="" />
//         </div>
//         <motion.div  style={{y}} className="textContainer">
//             <h2>{item.title}</h2>
//             <p>{item.desc}</p>
//             <button>See Demo</button>
//             </motion.div>
//             </div>
//         </div>
//         </section>;
// };

// const Portfolio = () => {
//   const ref = useRef();
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     // restDelta:0.001
//   });
//   return (
//     <div className="portfolio" ref={ref}>
//       <div className="progress">
//         <h1>Featured Works</h1>
//         <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//       </div>
//       {items.map((item) => (
//         <Single item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };

// export default Portfolio;



import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AI-Powered Sustainable Material Advisor",
    img: "/smaa.png",
    desc: "Developed an ML-based recommendation system trained on over 5,000 records. Integrated a Next.js frontend with LLM APIs and LS-DYNA for simulations, and deployed the application on Azure Cloud.",
    link: "https://smartmat-advisor.vercel.app/", // Add the live demo link
  },
  {
    id: 2,
    title: "Symphony of Stars",
    img: "/sos.png",
    desc: "Created a 3D web application to simulate solar system motion using Three.js, WebGL, and NASA APIs. The project rendered over 100 celestial bodies with real-time physics and spatial audio.",
    link: "https://symphonyofstarts.netlify.app/", // Add the live demo/GitHub link
  },
  {
    id: 3,
    title: "Share Market Forecasting Dashboard",
    img: "https://imgs.search.brave.com/DU8tExw6yIqWczhqytI_v8yiWXG6VUz8ohPS9gbKWaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXRh/LWZsYWlyLnRyYWlu/aW5nL2Jsb2dzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy8y/LzIwMjAvMDUvU3Rv/Y2stUHJpY2UtUHJl/ZGljdGlvbi1wcm9q/ZWN0LWRhc2hib2Fy/ZC0yLmdpZg.gif",
    desc: "Engineered a stock prediction dashboard that processes live NSE data via Google Sheets API. It uses Pandas for feature extraction and Scikit-learn for regression models, with visualizations created using Flask and Matplotlib.",
    link: "https://github.com/adityakumarsingh8077/sharemarket", // Add the live demo/GitHub link
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start" ],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* Wrap the button with an anchor tag */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // restDelta:0.001
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;