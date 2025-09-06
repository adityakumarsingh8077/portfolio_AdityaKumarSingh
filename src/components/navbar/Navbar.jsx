import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            // delay: 0.5,
            // ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          Aditya Kumar Singh
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/aditya-kumar-singh-ab139a242/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/singhaditya8077/">
            <img src="/leetcodeee.png" alt="" />
          </a>
          <a href="https://www.instagram.com/singhaditya8077/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://x.com/singhaditya8077">
            <img src="/twitterrr.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
