import { github } from "@/assets";

export const Footer = () => {
  return (
    <footer className="items-center flex flex-col lg:flex-row justify-between bottom-0 sticky w-full p-4 bg-[#6DD1E3]">
      <p className="text-[#F8F7F6] ">Chingu Voyage 46</p>
      <p className="text-[#F8F7F6]">
        © Copyright
        {new Date().getFullYear() > 2023
          ? ` 2023 - ${new Date().getFullYear()}`
          : " 2023"}
        , CYUM YUM
      </p>
      <a
        href="https://github.com/chingu-voyages/v46-tier2-team-19"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="github" className="w-12 h-12" />
      </a>
    </footer>
  );
};
