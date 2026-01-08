import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn 
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shubham-raj26/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:shubhamraj2613@gmail.com ",
    },
    {
      id: 3,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/shubhamraj2604",
      style:"rounded-br-md"
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500 bg-transparent "+ style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white ml-1"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
      l
    </div>
  );
};

export default Social; 