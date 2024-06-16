import CustomButton from "./CustomButton";
import CircleButton from "./CircleButton";
import HardButton from "./HardButton";
import SmoothButton from "./SmoothButton";
import SnackBar from "./SnackBar";

function App() {
  //h1 태그 css 색은 하늘색, 폰트사이즈 20px
  //h1 태그 내용 오늘 점심

  return (
    <div className="App">
      <div>
        <HardButton content="Home" />
        &nbsp;
        <HardButton content="About" />
        &nbsp;
        <SmoothButton />
        &nbsp;
        <CircleButton />
      </div>
      <CustomButton
        contentProp="HOME"
        backgroundColor="main"
        colorProp="white"
        borderRadiusProp="smooth"
      />
      <CustomButton
        contentProp="HOME"
        backgroundColor="side"
        colorProp="white"
        borderRadiusProp="circle"
      />
      <SnackBar iconColor="green" />
      <SnackBar iconColor="blue" />
      <SnackBar iconColor="red" />
    </div>
  );
}

export default App;
