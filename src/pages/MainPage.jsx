import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";
import { ChevronDown } from "lucide-react";

const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const guideImages = [
  {
    step: "STEP 01",
    title: "아이디어 입력",
    image: "/Guide_01_Idea.png",
  },
  {
    step: "STEP 02",
    title: "경쟁 서비스 탐색",
    image: "/Guide_02_Explore.png",
  },
  {
    step: "STEP 03",
    title: "BMC 자동 생성",
    image: "/Guide_03_Create.png",
  },
  {
    step: "STEP 04",
    title: "BMC 분석",
    image: "/Guide_04_Analyze.png",
  },
  {
    step: "STEP 05",
    title: "결과 출력",
    image: "/Guide_05_Result.png",
  },
  {
    step: "STEP 06",
    title: "마이페이지",
    image: "/Guide_06_MyPage.png",
  },
  {
    step: "STEP 07",
    title: "BMC 수정",
    image: "/Guide_07_Edit.png",
  },
];

function MainPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section
        id="hero"
        className="
          relative
          overflow-hidden
          bg-[radial-gradient(circle_at_center,_#e6edff_0%,_#dbe6fb_45%,_#cfddf5_100%)]
        "
      >
        <div
          className="
            relative
            w-[1440px]
            h-[817px]
            mx-auto
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/MainPage_Background.png')",
          }}
        >
          {/* 좌우 배경 연결 */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-40
              bg-gradient-to-r
              from-[#d7e2f7]
              to-transparent
              z-[1]
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              inset-y-0
              right-0
              w-40
              bg-gradient-to-l
              from-[#d7e2f7]
              to-transparent
              
              z-[1]
              pointer-events-none
            "
          />

          {/* Content */}
          <div className="relative z-10 px-10 pt-32">
            <div className="w-[760px] flex flex-col items-start gap-6">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                아이디어를 구조화하고
                <br />
                비즈니스를 설계하다
              </h1>

              <p className="text-gray-600 text-xl leading-8">
                AI가 도와주는 비즈니스 모델 분석으로,
                <br />
                아이디어를 실행 가능한 전략으로 바꿔보세요.
              </p>

              <Button>시작하기</Button>
            </div>
          </div>

          {/* Scroll Button */}
          <button
            onClick={() => scrollToSection("description")}
            className="
              absolute
              bottom-10
              left-1/2
              -translate-x-1/2
              text-gray-500
              hover:text-blue-500
              transition
              animate-bounce
              z-20
            "
          >
            <ChevronDown size={44} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* Description */}
      <section
        id="description"
        className="relative bg-[#F9FAFB] py-40"
      >
        <div className="max-w-[1440px] mx-auto px-10 text-center">
          <p className="text-gray-800 text-4xl font-bold leading-[1.7]">
            아이디어를 입력하면 비즈니스 모델이 구조화됩니다.
            <br />
            AI 기반 분석을 통해 BMC를 자동 생성하고,
            <br />
            핵심 요소를 빠르게 정리할 수 있습니다.
          </p>
        </div>

        <button
          onClick={() => scrollToSection("guide-0")}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-gray-500
            hover:text-blue-500
            transition
            animate-bounce
          "
        >
          <ChevronDown size={44} strokeWidth={1.5} />
        </button>
      </section>

      {/* Guide */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="flex flex-col gap-32">
            {guideImages.map((item, index) => (
              <section
                id={`guide-${index}`}
                key={item.step}
                className="relative flex flex-col gap-6 pb-20"
              >
                <div>
                  <span className="text-blue-500 font-semibold text-2xl tracking-wide">
                    {item.step}
                  </span>

                  <h3 className="text-3xl font-bold text-gray-900 mt-3">
                    {item.title}
                  </h3>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    rounded-3xl
                    border border-gray-200
                    shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                  "
                />

                {index !== guideImages.length - 1 && (
                  <button
                    onClick={() => scrollToSection(`guide-${index + 1}`)}
                    className="
                      absolute
                      -bottom-16
                      left-1/2
                      -translate-x-1/2
                      text-gray-500
                      hover:text-blue-500
                      transition
                      animate-bounce
                    "
                  >
                    <ChevronDown size={44} strokeWidth={1.5} />
                  </button>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default MainPage;