import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="text-gray-200 py-4 mt-8 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg">
      <div className="mx-auto text-center">
        <p className="text-xl">&copy; {new Date().getFullYear()} Jamal Hashim. All rights reserved.</p>
        <p className="mt-2">
          <div className="flex justify-center items-center gap-5 text-2xl">
            <a href="https://github.com/Jamal-Hashim" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jamal-hashim-77b77a307/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="mailto:jamalhashim9120@gmail.com">
              <IoIosMail />
            </a>
          </div>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
