import LeftCol from "./components/LeftCol";
import "./App.css";
import CenterCol from "./components/CenterCol";
import RightCol from "./components/RightCol";

function App() {
  return (
    <div className=" md:flex bg-blue-50 min-h-screen">
      <div className="md:w-[450px]">
        <LeftCol />
      </div>
      <div className="md:flex-grow ">
        <CenterCol />
      </div>
      <div className="md:w-[400px]  ">
        <RightCol />
      </div>
    </div>
  );
}

export default App;
