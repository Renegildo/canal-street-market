import { Page } from "../types";

const FoodContent = ({
  currentPage,
}: {
  currentPage: Page;
}) => {
  return (
    <div
      style={{display: currentPage === "food" ? "block" : "none"}}
      className="content opacity-0"
    >
      <div className="m-20 mr-64">
        <h1 className="text-7xl font-ogg mt-32 max-w-[1030px]">
          Food content
        </h1>
      </div>
    </div>
  );
};

export default FoodContent;
