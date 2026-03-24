import { useNavigate } from "react-router-dom";

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

export function WorkDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white p-8 md:p-20 pt-32 ">
      <button
        onClick={() => navigate("/work")}
        className="en mb-12 z-[60] uppercase tracking-widest text-gradient text-[2rem] animate-pulse"
      >
        ← Back
      </button>

      <header className="mb-20">
        <h1 className="en text-[5vw] text-gradient uppercase leading-none">
          Commercial <br /> Projects
        </h1>
        <p className="mt-4 text-white/80 pl-5">
          지난 5년간 진행한 주요 실무 프로젝트 리스트입니다. 클릭 시 상세 기술
          문서(Notion)로 이동합니다.
        </p>
      </header>

      <div className="flex flex-col border-t border-zinc-800">
        {PROJECT_LIST.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group py-8 border-b border-zinc-800 flex justify-between items-center hover:bg-zinc-900/30 transition-all px-4"
          >
            <div className="flex flex-col gap-2">
              <span className="text-gradient en text-2xl">0{project.id}</span>
              <h3 className="text-white/80 text-xl md:text-2xl font-medium group-hover:text-gradient transition-colors">
                {project.title}
              </h3>
            </div>
            <span className="text-white text-sm uppercase">{project.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
