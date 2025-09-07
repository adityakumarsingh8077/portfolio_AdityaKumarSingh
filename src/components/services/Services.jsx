// import { useRef } from "react";
// import "./services.scss";
// import { animate, motion, useInView, stagger } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Services = () => {
//   const ref = useRef();
//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//       //  whileInView="animate"
//       ref={ref}
//       animate={"animate"}
//       // animate={isInView && "animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p>
//           I focus on helping your brand grow
//           <br /> and move forward
//         </p>
//         <hr />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           <img src="/people.webp" alt="" />
//           <h1>
//             <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
//           </h1>
//         </div>
//         <div className="title">
//           <h1>
//             <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
//             Business.
//           </h1>
//           <button>SOLUTIONS</button>
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           {" "}
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>

//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           {" "}
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>

//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>

//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           {" "}
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;


import { useRef } from "react";
import "./services.scss";
import { motion, useInView, stagger } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
      // animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on building solutions
          <br /> and developing my skills
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/myimage.JPG" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>My</motion.b> Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>&</motion.b> Expertise.
          </h1>
          {/* Add the anchor tag with the resume link */}
          <a href="https://drive.google.com/file/d/123Z5k_VuJP6tMz1srskRp2cSfzvJrEL4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button>My Resume</button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Programming Languages</h2>
          <p>
            C++, Python, JavaScript, PHP, HTML5, CSS3, SQL.
          </p>
          <button>Learn More</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frameworks & Libraries</h2>
          <p>
            React.js, Node.js, Next.js, Three.js, WebGL, jQuery, Bootstrap, Pandas, Scikit-learn.
          </p>
          <button>Learn More</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cloud & Tools</h2>
          <p>
            Git/GitHub, REST APIs, Azure Cloud, Postman, Docker, MySQL, Linux/Windows.
          </p>
          <button>Learn More</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Software Engineering</h2>
          <p>
            Data Structures & Algorithms, Object-Oriented Programming (OOP), Problem Solving, System Design Thinking.
          </p>
          <button>Learn More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;