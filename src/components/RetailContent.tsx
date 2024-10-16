import { Page } from "../types";
import retailImage from "/src/assets/images/retail-image.avif";

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
        <div className="flex gap-20 items-center relative">
          <h1 className="text-[10rem] leading-[1] w-96 font-ogg mt-32 max-w-[1030px] font-bold">
            The Retail Market
          </h1>

          <img src={retailImage} className="h-[550px]" />

          <h2 className="text-7xl absolute top-0 -right-56">購物</h2>
        </div>
      </div>
    </div>
  );
};

export default RetailContent;
