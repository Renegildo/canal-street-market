import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import logo from "/src/assets/images/logo.svg";
import heroImage from "/src/assets/images/home-hero.avif";

type Page = "home" | "food" | "retail" | "community";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(".vertical-item", {
      y: 0,
      stagger: -0.1,
      duration: 1,
      ease: "power2",
    });
    
    timeline.to(".home > .content", {
      opacity: 1,
      duration: 1,
    });
  }, []);

  const updateCurrentPage = (newPage: Page) => {
    if (newPage === currentPage) return;

    const timeline = gsap.timeline();

    timeline.to(`.${currentPage} > .content`, {
      opacity: 0,
      duration: 0.2,
    });

    timeline.to(`.${currentPage}`, {
      width: 64,
      duration: 0.5,
      onComplete: () => setCurrentPage(newPage),
    });

    timeline.to(
      `.${newPage}`,
      {
        width: "100%",
        duration: 0.5,
        onComplete: () => {
          timeline.to(`.${newPage} > .content`, {
            opacity: 1,
          });
        }
      },
      "-=0.49"
    );
  };

  return (
    <nav className="fixed h-screen right-0 text-xl flex bg-black w-screen">
      <div
        className="font-mono min-w-16 bg-white h-full flex flex-col items-center pt-20 vertical-item -translate-y-[100%] home"
        onClick={() => updateCurrentPage("home")}
      >
        {currentPage === "home" ? (
          <div className="content opacity-0">
            <div className="m-20 mr-64">
              <a href="/">
                <img src={logo} />
              </a>
              <h1 className="text-7xl font-ogg mt-32 max-w-[1030px]">
                Canal Street Market is a carefully curated retail market, food hall {"&"}
                community space open year-round at 265 Canal Street. Support Small Business this weekend!
              </h1>
            </div>

            <img src={heroImage} />
          </div>
        ) : (
        <>
          <p>餐饮</p>
          <span className="[writing-mode:vertical-lr] my-auto">
            Home
          </span>
        </>
        )}
      </div>

      <div
        className="font-mono min-w-16 bg-cyan h-full flex flex-col items-center pt-20 vertical-item -translate-y-[100%] food"
        onClick={() => updateCurrentPage("food")}
      >
        {currentPage === "food" ? (
          <div className="content opacity-0">
            <div className="m-20 mr-64">
              <a href="/">
                <img src={logo} />
              </a>
              <h1 className="text-7xl font-ogg mt-32 max-w-[1030px]">
                Food content
              </h1>
            </div>

            <img src={heroImage} />
          </div>
        ) : (
        <>
          <p>餐饮</p>
          <span className="[writing-mode:vertical-lr] my-auto">
            Food
          </span>
        </>
        )}
      </div>

      <div
        className="font-mono min-w-16 bg-red h-full flex flex-col items-center pt-20 vertical-item -translate-y-[100%] retail"
        onClick={() => updateCurrentPage("retail")}
      >
        {currentPage === "retail" ? (
          <div className="content opacity-0">
            <div className="m-20 mr-64">
              <a href="/">
                <img src={logo} />
              </a>
              <h1 className="text-7xl font-ogg mt-32 max-w-[1030px]">
                Canal Street Market is a carefully curated retail market, food hall {"&"}
                community space open year-round at 265 Canal Street. Support Small Business this weekend!
              </h1>
            </div>

            <img src={heroImage} />
          </div>
        ) : (
          <>
            <p>購物</p>
            <span className="[writing-mode:vertical-lr] my-auto">
              Retail
            </span>
          </>
        )}
      </div>

      <div
        className="font-mono min-w-16 bg-yellow h-full flex flex-col items-center pt-20 vertical-item -translate-y-[100%] community"
        onClick={() => updateCurrentPage("community")}
      >
        {currentPage === "community" ? (
          <div className="content opacity-0">
            <div className="m-20 mr-64">
              <a href="/">
                <img src={logo} />
              </a>
              <h1 className="text-7xl font-ogg mt-32 max-w-[1030px]">
                Canal Street Market is a carefully curated retail market, food hall {"&"}
                community space open year-round at 265 Canal Street. Support Small Business this weekend!
              </h1>
            </div>

            <img src={heroImage} />
          </div>
        ) : (
          <>
            <p>文化</p>
            <span className="[writing-mode:vertical-lr] my-auto">
              Community
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default App;
