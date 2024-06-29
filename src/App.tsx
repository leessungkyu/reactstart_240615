import CustomButton from "./Button/CustomButton";
import CircleButton from "./Button/CircleButton";
import HardButton from "./Button/HardButton";
import SmoothButton from "./Button/SmoothButton";
import SnackBar from "./Button/SnackBar";
import PillBtn from "./PillBtn/PillBtn";
import Circle from "./pill/Circle";
import CircleWithX from "./pill/CircleWithX";
import Pallet from "./pallet/Pallet";
import Items from "./Items";
import ProfileImg from "./Comment_test/ProfileImg";
import Content from "./Comment_test/Content";
import CommentItem from "./Comment_test/CommentItem";
import CommentPage from "./Comment_test/CommentPage";
import NickName from "./Comment/NickName";
import ProfileImage from "./Comment/ProfileImage";
import CommentDate from "./Comment/CommentDate";
import Comment from "./Comment/Comment";
import MyButton from "./MyButton";
import InputForm from "./inputForm";
import InputType from "./InputType";
import { useState } from "react";
import Recruit from "./recruit";
function App() {
  //h1 태그 css 색은 하늘색, 폰트사이즈 20px
  //h1 태그 내용 오늘 점심
  return (
    <div>
      <Recruit />
    </div>
  );
}

export default App;
// tailwindcss 설치
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
{
  /* 
      <MyButton />
      <CommentPage />
      <Comment />

      <Pallet Bgcolor="white" Texts="light blue" />
      <Pallet Bgcolor="#E1F5FE" Texts="50" />
      <Pallet Bgcolor="#B3E5FC" Texts="100" />
      <Pallet Bgcolor="#81D4FA" Texts="200" />
      <Pallet Bgcolor="#4FC3F7" Texts="300" />
      <Pallet Bgcolor="#29B6F6" Texts="400" />
      <Pallet Bgcolor="#03A9F4" Texts="500" />
      <Pallet Bgcolor="#039BE5" Texts="600" />
      <Pallet Bgcolor="#0288D1" Texts="700" />
      <Pallet Bgcolor="#0277BD" Texts="800" />
      <Pallet Bgcolor="01579B" Texts="900" />

      <Items />

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

      <Circle BgColor="red" />
      <Circle BgColor="blue" />
      <Circle BgColor="yellow" />
      <CircleWithX />
      <PillBtn CircleBakColor="red" Texts="XML" />
      <PillBtn CircleBakColor="#FF9800" Texts="javascript" />
      <PillBtn CircleBakColor="blue" Texts="UI" />


*/
}
