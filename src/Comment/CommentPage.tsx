import styled from "styled-components";
import CommentItem from "./CommentItem";
import CommentSave from "./CommentSave";

const TitleDiv = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: black;
  color: white;
`;
const CommentPage = () => {
  return (
    <div>
      <TitleDiv>
        댓글<span>3</span>
      </TitleDiv>
      <CommentItem
        imgUrlProps="profile1.jpg"
        idProps="푸드매니아"
        dateProps="2024-06-20"
        contentProps="너무너무 맛있을거 같아요:)"
      />
      <CommentItem
        imgUrlProps="profile2.jpg"
        idProps="피망조아"
        dateProps="2024-06-21"
        contentProps="맛도리!!"
      />
      <CommentItem
        imgUrlProps="profile3.jpg"
        idProps="푸드맨"
        dateProps="2024-06-22"
        contentProps="맛있다~"
      />
      <CommentSave />
    </div>
  );
};

export default CommentPage;
