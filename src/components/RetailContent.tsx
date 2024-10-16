import { Page } from "../types";

const RetailContent = ({
  currentPage
}: {
    currentPage: Page
}) => {
  return (
    <div
      className="content opacity-0"
      style={{display: currentPage === "retail" ? "block" : "none"}}
    >
      <div className="m-20 mr-64">
        <h1 className="text-7xl font-ogg mt-32 max-w-[1030px]">
          Retail content
        </h1>
      </div>
    </div>
  );
};

export default RetailContent;
