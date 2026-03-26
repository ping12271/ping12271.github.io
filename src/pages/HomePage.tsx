import astronaut from "@/assets/astronaut.png";
import moon from "@/assets/fullmoon.png";
import mars from "@/assets/mars.png";
import codes from "@/assets/codes.png";
import company from "@/assets/company.png";
import slp_admin from "@/assets/slp_admin.png";
import slp_app from "@/assets/slp_app.png";
import kiosk from "@/assets/kiosk.png";
import admin2 from "@/assets/admin2.png";
import pos from "@/assets/pos.png";
import lemon from "@/assets/lemon.png";
import eureka from "@/assets/eureka.png";
import { useState } from "react";
import MenuOverlay from "@/components/MenuOverlay";

const HomeSection = () => {
  return (
    <section id="home">
      <div className="flex items-center justify-end max-md:items-end py-20 lg:py-60 px-8 lg:px-20 min-h-svh w-screen relative">
        <div className="absolute left-[20%] top-[50%] h-auto z-0 max-md:top-[30%] max-md:left-[50%]">
          <img
            src={astronaut}
            alt="astronaut"
            className="w-[22vw] max-md:w-[45vw] h-auto animate-[astronaut_20s_ease-in-out_infinite]"
          />
        </div>
        <div className="flex flex-col items-end">
          <div className="uppercase text-gradient leading-none">
            <h1 className="en text-[15vw]">portfolio</h1>
            <h2 className="en text-[2rem] text-right">web publisher</h2>
          </div>
          <div className="mt-[10vw]">
            <p className="text-white/90 text-2xl leading-relaxed">
              안녕하세요, 5년 차 웹 퍼블리셔 신혜은입니다. <br /> React 기반
              프로젝트에서 퍼블리싱 체계를 설계하고, <br />
              효율적인 구조와 높은 퍼포먼스를 만들어내는 데 집중합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const PROJECT_LIST = [
    {
      id: 1,
      title: "유레카코즈 서비스",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/01-32a415da99ef80bab2a7f3c0be777de4?source=copy_link",
      image: codes,
    },
    {
      id: 2,
      title: "SLP POS",
      desc: "WEB | 퍼블리싱",
      link: "https://www.notion.so/02-SLP-POS-32d415da99ef802a8e72fe74aee85015?source=copy_link",
      image: pos,
    },
    {
      id: 3,
      title: "SLP 키오스크",
      desc: "WEB | 퍼블리싱",
      link: "https://www.notion.so/03-SLP-32b415da99ef80909e37cbd9ae9ac723?source=copy_link",
      image: kiosk,
    },
    {
      id: 4,
      title: "키오스크 & POS 관리자",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/04-POS-32d415da99ef80108454c79253e6d11c?source=copy_link",
      image: admin2,
    },
    {
      id: 5,
      title: "SLP 주거 통합 서비스 관리자",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/05-SLP-32a415da99ef80258116d07518a192a8?source=copy_link",
      image: slp_admin,
    },
    {
      id: 6,
      title: "기업 관리자",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/06-32b415da99ef80769879cc631b5d02aa?source=copy_link",
      image: company,
    },
    {
      id: 7,
      title: "SLP 앱",
      desc: "App | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/07-SLP-32a415da99ef8024968bc83e09555bb3?source=copy_link",
      image: slp_app,
    },
    {
      id: 8,
      title: "레몬클라우드 홈페이지",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/08-32d415da99ef80f9a992d08bbcb16b7e?source=copy_link",
      image: lemon,
    },
    {
      id: 9,
      title: "유레카코즈 랜딩페이지",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/09-32a415da99ef80c5a86be354a79118e3?source=copy_link",
      image: eureka,
    },
  ];

  return (
    <section
      id="work"
      className="min-h-svh w-screen py-60 flex flex-col items-center relative"
    >
      <div className="absolute max-w-[600px] top-0 -left-[20%] -z-1 animate-[moon_180s_ease-in-out_infinite]">
        <img src={moon} alt="" />
      </div>

      <div className="relative px-7 lg:px-20 w-full max-w-[1900px] flex flex-col justify-center">
        <div className="flex flex-wrap items-baseline mb-10 text-gradient">
          <h2 className="text-[15vw] en tracking-tighter leading-none">work</h2>
          <span className="text-lg">클릭하면 상세 화면으로 이동합니다!</span>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {PROJECT_LIST.map((project) => (
            <li key={project.id} className="group">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-card content-${project.id} block rounded-lg border overflow-hidden border-white/10 transition-all duration-500 group-hover:rotate-[5deg]`}
              >
                <div className="aspect-video">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </a>
              <div className="p-5">
                <h3 className="text-white text-2xl mb-1">{project.title}</h3>
                <span className="text-gradient group-hover:text-white transition-colors">
                  {project.desc}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section
    id="contact"
    className="flex flex-col justify-center relative overflow-hidden px-7 lg:px-20 py-60"
  >
    <div className="absolute right-0 bottom-0 -z-1 w-[100vw]">
      <img
        src={mars}
        alt="mars"
        className="w-full animate-[mars_180s_ease-in-out_infinite]"
      />
    </div>

    <h3 className="en uppercase text-[13vw] tracking-[-2vw] text-gradient">
      contact me
    </h3>
    <ul className="pl-8 flex flex-col gap-[2%]">
      <li>
        <a
          href="mailto:ping12271@hanmail.net"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-[3vw] text-gradient hover:underline"
        >
          - Mail : ping12271@hanmail.net
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ping12271"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-[3vw] text-gradient hover:underline"
        >
          - Github
        </a>
      </li>
      <li>
        <a
          href="https://www.notion.so/5-32d415da99ef80c697e8cde57578e508?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-[3vw] text-gradient hover:underline"
        >
          - 이력서보기
        </a>
      </li>
    </ul>
  </section>
);

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      id="wrap"
      className="w-screen min-h-svh overflow-x-hidden text-white relative overflow-y-auto"
    >
      <nav className="fixed top-0 w-full z-50 flex justify-between p-7">
        <button
          onClick={() => handleScrollToSection("home")}
          className="en text-gradient text-[2rem] leading-10 transition-opacity duration-100 opacity-1 hover:opacity-80"
        >
          SHIN
          <br />
          HYEEUN
        </button>
        <div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="en z-[60] uppercase tracking-widest text-gradient text-[2rem]"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onItemClick={handleScrollToSection}
      />

      <div id="inner" className="relative z-10">
        <HomeSection />
        <WorkSection />
        <ContactSection />
      </div>
    </div>
  );
}
