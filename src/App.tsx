import LargeButton from "./LargeButton";
import LunchButton from "./LunchButton";

function App() {
  //h1 태그 css 색은 하늘색, 폰트사이즈 20px
  //h1 태그 내용 오늘 점심

  return (
    <div className="App">
      <LunchButton />
      <LunchButton />
      <LunchButton />

      <LargeButton />
      <LargeButton />
      <LargeButton />
    </div>
  );
}

export default App;
