import LeftCol from "./components/LeftCol";
import "./App.css";
import CenterCol from "./components/CenterCol";
import RightCol from "./components/RightCol";

function App() {
  return (
    <div className="flex bg-blue-50">
      <div className="w-2/5 h-screen">
        <LeftCol />
      </div>
      <div className="w-4/5  h-screen">
        <CenterCol />
      </div>
      <div className="w-2/5   h-screen">
        <RightCol />
      </div>
    </div>
  );
}

export default App;
