import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { Page } from "./types";
import HomeContent from "./components/HomeContent";
import FoodContent from "./components/FoodContent";
import RetailContent from "./components/RetailContent";
import CommunityContent from "./components/CommunityContent";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

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
    if (newPage === currentPage || isTransitioning) return;

    setIsTransitioning(true);

    const timeline = gsap.timeline();

    timeline.to(`.${currentPage} > .button-container`, {
      opacity: 1,
      duration: 0.2,
    });

    timeline.to(`.${currentPage} > .content`, {
      opacity: 0,
      duration: 0.2,
    });

    timeline.to(`.${newPage} > .button-container`, {
      opacity: 0,
      duration: 0.2,
    }, "-=0.2");

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

    setIsTransitioning(false);
  };

  return (
    <nav className="fixed h-screen right-0 text-xl flex bg-black w-screen">
      <div
        className="font-mono min-w-16 bg-white h-full pt-20 vertical-item -translate-y-[100%] home"
        onClick={() => updateCurrentPage("home")}
      >
        <HomeContent currentPage={currentPage} />

        <div
          className="flex flex-col items-center h-full button-container"
          style={{display: currentPage !== "home" ? "flex" : "none"}}
        >
          <p>餐饮</p>
          <span className="[writing-mode:vertical-lr] my-auto">
            Home
          </span>
        </div>
      </div>

      <div
        className="font-mono min-w-16 bg-cyan h-ful pt-20 vertical-item -translate-y-[100%] food"
        onClick={() => updateCurrentPage("food")}
      >
        <FoodContent currentPage={currentPage} />

        <div
          className="flex flex-col items-center h-full button-container"
          style={{display: currentPage !== "food" ? "flex" : "none"}}
        >
          <p>餐饮</p>
          <span className="[writing-mode:vertical-lr] my-auto">
            Food
          </span>
        </div>
      </div>

      <div
        className="font-mono min-w-16 bg-red h-full pt-20 vertical-item -translate-y-[100%] retail"
        onClick={() => updateCurrentPage("retail")}
      >
        <RetailContent currentPage={currentPage} />

        <div
          className="flex flex-col items-center h-full button-container"
          style={{display: currentPage !== "retail" ? "flex" : "none"}}
        >
          <p>購物</p>
          <span className="[writing-mode:vertical-lr] my-auto">
            Retail
          </span>
        </div>
      </div>

      <div
        className="font-mono min-w-16 pt-20 bg-yellow h-full vertical-item -translate-y-[100%] community"
        onClick={() => updateCurrentPage("community")}
      >
        <CommunityContent currentPage={currentPage} />

        <div
          className="h-full flex flex-col items-center justify-center button-container"
          style={{display: currentPage !== "community" ? "flex" : "none"}}
        >
          <p>文化</p>
          <span className="[writing-mode:vertical-lr] my-auto">
            Community
          </span>
        </div>
      </div>
    </nav>
  );
};

export default App;
