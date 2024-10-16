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
      <div className="m-20 mr-64">
        <h1 className="text-7xl font-ogg mt-32 max-w-[1030px]">
          Community content
        </h1>
      </div>
    </div>
  );
};

export default CommunityContent;
