import styled from "styled-components";
import ProfileImg from "./ProfileImg";

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  padding: 10px;
  display: flex;
`;
const CommentSave = () => {
  return (
    <Container>
      <ProfileImg imgUrl="profile1.jpg" />
      <input type="text" />
    </Container>
  );
};

export default CommentSave;
