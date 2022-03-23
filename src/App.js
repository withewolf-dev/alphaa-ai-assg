import LeftCol from "./components/LeftCol";
import "./App.css";
import CenterCol from "./components/CenterCol";
import RightCol from "./components/RightCol";

function App() {
  return (
    <div className=" md:flex bg-blue-50">
      <div className="md:w-2/5 h-screen">
        <LeftCol />
      </div>
      <div className="md:w-4/5  h-screen">
        <CenterCol />
      </div>
      <div className="md:w-2/5   h-screen">
        <RightCol />
      </div>
    </div>
  );
}

export default App;
