import VerticalNav from "./components/VerticalNav";
import logo from "/src/assets/images/logo.svg";
import heroImage from "/src/assets/images/home-hero.avif";

const App = () => {
  return (
    <div className="flex justify-between">
      <div>
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
      <VerticalNav />
    </div>
  );
};

export default App;
