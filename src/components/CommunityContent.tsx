import { Page } from "../types";

const CommunityContent = ({
  currentPage
}: {
    currentPage: Page
}) => {
  return (
    <div
      className="content opacity-0" 
      style={{display: currentPage === "community" ? "block" : "none"}}
    >
      <div className="m-20 mr-64 relative">
        <h1 className="text-[10rem] leading-[1] font-ogg mt-32 max-w-[1030px] font-bold">
          Canal St. <br />
          COmmunity
        </h1>

        <h2 className="absolute top-0 -right-48 text-7xl">文化</h2>
      </div>
    </div>
  );
};

export default CommunityContent;
