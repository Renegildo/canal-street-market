import { Page } from "../types";
import salesDeskImage from "/src/assets/images/sales-desk-food.avif";

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
        <div className="flex items-center gap-20 relative">
          <h1 className="text-[10rem] leading-[1] w-full font-ogg mt-32 max-w-[1030px]">
            The Food Hall
          </h1>
          <img src={salesDeskImage} className="h-[490px]" />

          <h2 className="text-7xl absolute -right-52 top-0">餐饮</h2>
        </div>
      </div>
    </div>
  );
};

export default FoodContent;
