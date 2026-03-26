import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
      style: "rounded-br-xl"
    },
  ];

  return (
    <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={"ml-[-108px] flex h-14 w-44 items-center justify-between bg-slate-900/90 px-4 text-slate-100 shadow-lg shadow-cyan-950/40 backdrop-blur transition-all duration-300 hover:ml-[-8px] hover:bg-cyan-500/80 " + style}
          >
            <a
              href={href}
              className="ml-1 flex w-full items-center justify-between"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social; 