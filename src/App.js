import LeftCol from "./components/LeftCol";
import "./App.css";
import CenterCol from "./components/CenterCol";
import RightCol from "./components/RightCol";

function App() {
  return (
    <div className="xl:flex xl:flex-row h-screen bg-blue-50">
      <div className=" w-[400px]">
        <LeftCol />
      </div>
      <div className=" flex-grow">
        <CenterCol />
      </div>

      <div className=" w-[400px]">
        <RightCol />
      </div>
    </div>
  );
}

export default App;
