import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VerticalNav = () => {
  useGSAP(() => {
    gsap.to(".vertical-item", {
      y: 0,
      stagger: -0.1,
      duration: 1,
      ease: "power2",
    });
  });

  return (
    <nav className="fixed h-screen right-0 text-xl flex">
      <button className="font-mono w-16 bg-cyan h-full flex flex-col items-center pt-20 vertical-item -translate-y-[100%]">
        <p>餐饮</p>
        <span className="[writing-mode:vertical-lr] my-auto">
          Food
        </span>
      </button>
      <button className="font-mono w-16 bg-red h-full flex flex-col items-center pt-20 vertical-item -translate-y-[100%]">
        <p>購物</p>
        <span className="[writing-mode:vertical-lr] my-auto">
          Retail
        </span>
      </button>
      <button className="font-mono w-16 bg-yellow h-full flex flex-col items-center pt-20 vertical-item -translate-y-[100%]">
        <p>文化</p>
        <span className="[writing-mode:vertical-lr] my-auto">
          Community
        </span>
      </button>
    </nav>
  );
};

export default VerticalNav;
