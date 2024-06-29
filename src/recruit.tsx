import { ChangeEvent, useState } from "react";
import InputType from "./InputType";
import InputButton from "./inputButton";

const Recruit = () => {
  const [singUp, setSingUp] = useState({ id: "", pw: "", pwch: "" });
  const isAllLength =
    !!singUp.id.length && !!singUp.pw.length && !!singUp.pwch.length;
  const isAllPassed = singUp.id.includes("@") && singUp.pw === singUp.pwch;

  //   const [id, setId] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [passwordChek, setPasswordCheck] = useState("");
  //const [pass, setPass] = useState(false);

  const handleCheckId = (e: ChangeEvent<HTMLInputElement>) => {
    setSingUp((v) => ({ ...v, id: e.target.value }));
  };
  const handleCheckPw = (e: ChangeEvent<HTMLInputElement>) => {
    setSingUp((v) => ({ ...v, pw: e.target.value }));
  };
  const handleCheckPwchechk = (e: ChangeEvent<HTMLInputElement>) => {
    setSingUp((v) => ({ ...v, pwch: e.target.value }));
  };

  return (
    <div className="App">
      <InputType
        typeProps="email"
        labelProps="아이디"
        placeholderProps="사용하시는 이메일을 입력해주세요(abc@xxxx.com)"
        onChangeProps={handleCheckId}
      />
      <InputType
        typeProps="password"
        labelProps="비밀번호"
        placeholderProps="특수문자, 숫자, 영문 3가지 조합으로 8자리 이상 15이하 입력해주세요."
        onChangeProps={handleCheckPw}
      />
      <InputType
        typeProps="password"
        labelProps="비밀번호확인"
        placeholderProps="동일한 비밀번호를 입력해주세요."
        onChangeProps={handleCheckPwchechk}
      />
      <InputButton isPass={isAllLength && isAllPassed} />
    </div>
  );
};

export default Recruit;
