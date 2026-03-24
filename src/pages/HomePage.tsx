import astronaut from "@/assets/astronaut.png";
import moon from "@/assets/moon.png";
import mars from "@/assets/mars.png";
import resume from "@/assets/resume.pdf";
import { useState, useRef } from "react";
import gsap from "gsap";
import MenuOverlay from "@/components/MenuOverlay";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useLocation, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";

const HomeSection = () => (
  <section id="home" className="h-svh w-screen overflow-hidden relative">
    <div className="absolute left-[20%] top-[50%] h-auto z-0 max-md:top-[30%] max-md:left-[50%]">
      <img
        src={astronaut}
        alt="astronaut"
        className="w-[22vw] max-md:w-[45vw] h-auto animate-[astronaut_20s_ease-in-out_infinite]"
      />
    </div>
    <div className="p-5 absolute top-1/2 left-[30%] -translate-y-1/2 h-auto max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[65%]">
      <div className="uppercase text-gradient leading-none">
        <h1 className="en text-[12.5vw]">portfolio</h1>
        <h2 className="en text-[2rem] text-right">web publisher</h2>
      </div>

      <div className="max-w-[720px] pl-6 max-md:pl-0 max-md:mt-8">
        <p className="text-[1.2rem] text-gradient max-md:text-base leading-relaxed">
          안녕하세요!
          <br />
          5년차 웹퍼블리셔 신혜은입니다.
          <br />한 회사에서 5년간 퍼블리셔로 일했습니다. 독립적인 환경 속에
          Angular와 React 환경에서 SCSS, Bootstrap, Tailwind CSS, shadcn/ui 등
          프로젝트 상황에 최적화된 도구를 선택하고 내재화하며 성과를
          만들어왔습니다.
        </p>
      </div>
    </div>
  </section>
);

const WorkSection = ({ onNavigate }: { onNavigate: (id: string) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stars = gsap.utils.toArray<HTMLElement>(".star");
      stars.forEach((star) => {
        gsap.to(star, {
          y: "100vh",
          x: "-=50",
          duration: "random(1.5, 3)",
          repeat: -1,
          delay: "random(0, 5)",
          ease: "none",
        });
      });
    },
    { scope: containerRef }
  );

  // const workItems = [
  //   {
  //     id: 1,
  //     title: "실무 프로젝트",
  //     projectId: "commercial",
  //     desc: "5년차 퍼블리셔의 실무 결과물 모음",
  //     video: VideoCodes,
  //   },
  //   {
  //     id: 2,
  //     title: "인터랙션 사이트",
  //     projectId: "interaction",
  //     desc: "GSAP을 활용한 역동적인 UI 구현",
  //     video: VideoCodes,
  //   },
  //   {
  //     id: 3,
  //     title: "웹표준 사이트",
  //     projectId: "standard",
  //     desc: "접근성을 준수한 마크업 가이드",
  //     video: VideoCodes,
  //   },
  // ];

  const PROJECT_LIST = [
    {
      id: 1,
      title: "유레카코즈 서비스",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/01-32a415da99ef80bab2a7f3c0be777de4?source=copy_link",
    },
    {
      id: 2,
      title: "SLP POS",
      desc: "WEB | 퍼블리싱",
      link: "https://www.notion.so/02-SLP-POS-32d415da99ef802a8e72fe74aee85015?source=copy_link",
    },
    {
      id: 3,
      title: "SLP 키오스크",
      desc: "WEB | 퍼블리싱",
      link: "https://www.notion.so/03-SLP-32b415da99ef80909e37cbd9ae9ac723?source=copy_link",
    },
    {
      id: 4,
      title: "키오스크 & POS 관리자",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/04-POS-32d415da99ef80108454c79253e6d11c?source=copy_link",
    },
    {
      id: 5,
      title: "SLP 주거 통합 서비스 관리자",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/05-SLP-32a415da99ef80258116d07518a192a8?source=copy_link",
    },
    {
      id: 6,
      title: "기업 관리자",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/06-32b415da99ef80769879cc631b5d02aa?source=copy_link",
    },
    {
      id: 7,
      title: "SLP 앱",
      desc: "App | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/07-SLP-32a415da99ef8024968bc83e09555bb3?source=copy_link",
    },
    {
      id: 8,
      title: "레몬클라우드 홈페이지",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/08-32d415da99ef80f9a992d08bbcb16b7e?source=copy_link",
    },
    {
      id: 9,
      title: "유레카코즈 랜딩페이지",
      desc: "WEB | 퍼블리싱 · 반응형",
      link: "https://www.notion.so/09-32a415da99ef80c5a86be354a79118e3?source=copy_link",
    },
  ];

  return (
    <section id="work" className="h-svh w-screen overflow-hidden relative">
      <div className="absolute -left-[10%] top-[60%] -z-1 max-md:-left-[20%] max-md:top-[75%]">
        <img
          src={moon}
          alt="moon"
          className="h-[125%] animate-[moon_180s_ease-in-out_infinite]"
        />
      </div>

      {/* 미완 리스트 */}
      <div
        ref={containerRef}
        className="relative z-10 h-full w-full overflow-y-auto scrollbar-hide p-[10vw]"
      >
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="star absolute w-[1px] h-[50px] bg-gradient"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-100px`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex items-baseline">
            <h2 className="text-gradient text-[8vw] en tracking-tighter leading-none">
              work
            </h2>
            <span className="text-gradient">클릭하면 노션으로 이동합니다.</span>
          </div>
        </div>

        <div ref={containerRef} className="p-10 flex items-center">
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10 w-full">
            {PROJECT_LIST.map((project) => (
              <li
                key={project.id}
                className="project-card group relative overflow-hidden rounded-sm border border-white/10 transition-all duration-500 hover:border-[#FF5F00]/50"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`content-${project.id} relative z-10 block p-8 h-full bg-transparent transition-all`}
                >
                  <span className="en text-gradient text-2xl font-bold italic opacity-70 group-hover:opacity-100 transition-opacity">
                    {project.id.toString().padStart(2, "0")}
                  </span>

                  <h3 className="text-white text-2xl mt-2 en mb-8 transition-colors group-hover:text-white">
                    {project.title}
                  </h3>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-white/50 text-sm group-hover:text-white transition-colors">
                      {project.desc}
                    </span>
                    <span className="text-white/50 group-hover:text-gradient group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 완성 리스트 */}
      {/* <div className="w-full absolute top-[55%] pl-[30%] pr-6 -translate-y-1/2">
        <div className="flex flex-col w-full gap-4">
          {workItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(`projects/${item.projectId}`)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group cursor-pointer flex items-center gap-10 transition-transform duration-300 hover:translate-x-4"
            >
              <div className="text-[10vw] text-gradient en opacity-40 group-hover:opacity-100 transition-opacity">
                {item.id}
              </div>
              <div className="flex flex-col">
                <div className="text-[2.5rem] text-gradient font-bold uppercase">
                  {item.title}
                </div>
                <p
                  className={`text-gradient text-lg transition-all duration-500 ${
                    hoveredItem === item.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="h-svh w-screen overflow-hidden relative">
    <div className="absolute right-0 bottom-0 h-auto -z-1">
      <img
        src={mars}
        alt="mars"
        className="w-[100vw] animate-[mars_180s_ease-in-out_infinite]"
      />
    </div>
    <div className="w-full absolute top-[20%] left-[10%] en uppercase ">
      <h3 className=" text-[10vw] tracking-[-2vw] text-gradient">contact me</h3>
      <div className="pl-6 text-4xl text-gradient">010-6627-3135</div>
    </div>
  </section>
);

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWarping, setIsWarping] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const currentSection = location.pathname.replace("/", "") || "home";

  const getThemeClass = () => {
    switch (currentSection) {
      case "home":
        return "theme-home";
      case "work":
        return "theme-work";
      case "contact":
        return "theme-contact";
      default:
        return "";
    }
  };

  const handleInnerDone = () => {
    setIsWarping(false);

    gsap.fromTo(
      innerRef.current,
      {
        scale: 6,
        autoAlpha: 0,
        filter: "blur(20px)",
      },
      {
        scale: 1,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.4,
        ease: "power4.out",
      }
    );
  };

  const handleMenuClick = (targetId: string) => {
    if (targetId === currentSection) {
      setIsMenuOpen(false);
      return;
    }

    setIsMenuOpen(false);

    gsap.to(innerRef.current, {
      scale: 0.2,
      autoAlpha: 0,
      filter: "blur(40px)",
      duration: 0.5,
      ease: "power4.in",
      onComplete: () => {
        navigate(targetId === "home" ? "/" : `/${targetId}`);
        setIsWarping(true);
      },
    });
  };

  return (
    <div
      id="wrap"
      className={`h-svh w-screen overflow-hidden text-white relative ${getThemeClass()}`}
    >
      {isWarping && (
        <LoadingScreen minDurationMs={1000} onDone={handleInnerDone} />
      )}

      <nav className="fixed top-0 w-full z-50 flex justify-between p-7">
        <a
          href="/home"
          className="en text-gradient text-[2rem] leading-10 transition-opacity duration-100 opacity-1 hover:opacity-80"
        >
          SHIN
          <br />
          HYEEUN
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="en z-[60] uppercase tracking-widest text-gradient text-[2rem] animate-pulse"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onItemClick={handleMenuClick}
      />

      <div id="inner" ref={innerRef} className="relative z-10">
        {currentSection === "home" && <HomeSection />}
        {currentSection === "work" && (
          <WorkSection onNavigate={(path) => handleMenuClick(path)} />
        )}
        {currentSection === "contact" && <ContactSection />}
      </div>

      <footer className="fixed bottom-0 p-[2rem] w-screen flex items-center justify-end bg-[linear-gradient(0deg,#000,transparent)] z-50">
        <div className="flex items-center gap-2">
          <span className="text-gradient text-sm">2026</span>
          <a
            href="https://github.com/ping12271"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer uppercase text-gradient text-sm transition-opacity duration-100 opacity-1 hover:opacity-80"
          >
            github
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer uppercase text-gradient text-sm transition-opacity duration-100 opacity-1 hover:opacity-80"
          >
            resume
          </a>
        </div>
      </footer>
    </div>
  );
}
