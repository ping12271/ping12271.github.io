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
import { useLayoutEffect, useRef, useState } from "react";
import MenuOverlay from "@/components/MenuOverlay";
import { gsap } from "gsap";

const HomeSection = () => {
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".char", { yPercent: -150, opacity: 0 });

      gsap.to(".char", {
        delay: 0.5,
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "bounce.out",
        stagger: {
          each: 0.1,
          from: "random",
        },
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative w-screen min-h-svh flex items-center overflow-hidden"
    >
      <div className="absolute left-[15%] top-[45%] z-0 opacity-80 max-md:top-[25%] max-md:left-[40%] pointer-events-none">
        <img
          src={astronaut}
          alt="astronaut"
          className="w-[20vw] max-md:w-[40vw] h-auto animate-[astronaut_20s_ease-in-out_infinite]"
        />
      </div>

      <div className="relative z-10 w-full px-8 lg:px-24 flex flex-col items-end text-right">
        <div ref={scope} className="mb-12">
          <h1 className="overflow-hidden">
            {"portfolio".split("").map((char, i) => (
              <span
                key={i}
                className="char inline-block text-gradient font-black tracking-tighter leading-[0.9] en text-[clamp(3.5rem,14vw,12rem)]"
              >
                {char}
              </span>
            ))}
          </h1>
          <p className="sub-text text-[clamp(1rem,2.5vw,2rem)] font-light tracking-[0.5em] text-white/60 mr-2">
            WEB PUBLISHER
          </p>
        </div>

        <div className="max-w-2xl mt-8">
          <p className="sub-text text-white/80 text-[clamp(1.1rem,2vw,1.35rem)] leading-relaxed break-keep">
            <strong className="text-gradient">
              안녕하세요, 5년 차 웹 퍼블리셔 신혜은입니다.
            </strong>
            <br />
            단순한 마크업을 넘어 재사용 가능한 컴포넌트 구조를 고민하고,
            <br />
            React 환경에서 퍼포먼스와 유지보수성을 함께 챙기는 개발을
            지향합니다.
          </p>
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
      className="relative w-screen py-[clamp(5rem,15vh,15rem)] flex flex-col items-center"
    >
      <div className="relative px-7 lg:px-24 w-full max-w-[1440px]">
        <div className="flex flex-col mb-32 relative">
          <h2 className="en text-[clamp(5rem,15vw,12rem)] font-black text-white/[0.06] absolute -top-16 -left-10 select-none">
            ARCHIVE
          </h2>
          <div className="relative z-10 pl-2">
            <h2 className="en text-[clamp(3rem,8vw,6rem)] mb-6 text-white leading-none">
              Work
            </h2>
            <p className="en text-gradient text-[clamp(1rem,2vw,1.25rem)] font-medium uppercase opacity-90">
              System UI & Component Architecture
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-[clamp(4rem,10vw,8rem)] w-full relative z-10">
          {PROJECT_LIST.map((project) => (
            <li key={project.id} className="group relative">
              <a
                href={project.link}
                target="_blank"
                className="block relative overflow-hidden rounded-xl border border-white/5 group-hover:border-white/20 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    alt={project.title}
                  />
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <span className="en tracking-[0.3em] border border-white/30 px-6 py-2 rounded-full">
                    VIEW DETAILS
                  </span>
                </div>
              </a>

              <div className="mt-6 px-2">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm tracking-wide">
                  {project.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="absolute max-w-[50%] bottom-0 -right-20 -z-1 pointer-events-none">
          <img
            src={moon}
            className="opacity-15 mix-blend-screen grayscale animate-[moon_180s_ease-in-out_infinite]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section
    id="contact"
    className="relative min-h-svh flex flex-col justify-center items-center overflow-hidden px-7 lg:px-20 py-[clamp(5rem,15vh,10rem)]"
  >
    <div className="absolute right-[-10%] bottom-[-20%] -z-1 w-[120vw] opacity-40 pointer-events-none">
      <img
        src={mars}
        alt="mars"
        className="w-full h-auto animate-[mars_180s_ease-in-out_infinite] mix-blend-screen grayscale-[0.3]"
      />
    </div>

    <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center text-center">
      <div className="en mb-24 relative group">
        <h3 className="font-black text-[clamp(4rem,15vw,12rem)] tracking-[-0.05em] leading-none text-white/5 absolute -top-12 left-1/2 -translate-x-1/2 select-none whitespace-nowrap">
          Get In Touch
        </h3>
        <h3 className="font-black text-[clamp(2.5rem,8vw,6rem)] tracking-tighter text-gradient relative z-10">
          Contact Me
        </h3>
        <p className="mt-4 text-white/40 text-[clamp(0.9rem,1.5vw,1.125rem)] tracking-[0.4em]">
          Let's Build Something Great
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {[
          {
            label: "Mail",
            value: "ping12271@hanmail.net",
            href: "mailto:ping12271@hanmail.net",
          },
          {
            label: "Github",
            value: "github.com/ping12271",
            href: "https://github.com/ping12271",
          },
          {
            label: "Resume",
            value: "이력서 바로가기",
            href: "https://www.notion.so/5-32d415da99ef80c697e8cde57578e508",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-10 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:translate-y-[-10px] hover:bg-white/[0.05]"
          >
            <span className="en block text-[1.5rem] text-white/60 mb-4">
              {item.label}
            </span>
            <span className="block text-xl font-medium text-white/90 group-hover:text-gradient transition-colors break-all">
              {item.value}
            </span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--secondary))] to-transparent transition-all duration-500 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="mt-32 opacity-80 text-[0.7rem] tracking-widest">
        © 2026 SHIN HYEEUN. ALL RIGHTS RESERVED.
      </div>
    </div>
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
      <nav className="fixed top-0 left-0 w-full z-[110] flex justify-between items-center p-8 lg:p-12 pointer-events-none">
        <button
          onClick={() => handleScrollToSection("home")}
          className="pointer-events-auto group flex flex-col items-start"
        >
          <span className="en text-[1.2rem] font-black leading-tight text-white group-hover:text-gradient transition-all duration-300">
            SHIN
            <br />
            HYEEUN
          </span>
        </button>
        <div className="pointer-events-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" uppercase tracking-[0.2em] text-[1.2rem] leading-tight  text-white/90 group transition-all duration-300 flex items-center gap-2"
          >
            <span className="max-md:hidden text-[0.7rem] opacity-70">
              EXPLORE
            </span>
            <span className="en font-black group-hover:text-gradient">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onItemClick={handleScrollToSection} />

      <div id="inner" className="relative z-10">
        <HomeSection />
        <WorkSection />
        <ContactSection />
      </div>
    </div>
  );
}
