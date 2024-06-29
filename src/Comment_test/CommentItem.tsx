import styled from "styled-components";
import ProfileImg from "./ProfileImg";
import Content from "./Content";

type CommentProps = {
  imgUrlProps?: string;
  idProps: string;
  dateProps: string;
  contentProps: string;
};

const CommentItem = ({
  imgUrlProps,
  idProps,
  dateProps,
  contentProps,
}: CommentProps) => {
  const StyleDiv = styled.div`
    display: flex;
    padding-bottom: 50px;
  `;
  return (
    <StyleDiv>
      <ProfileImg imgUrl={imgUrlProps} />
      <Content
        idProps={idProps}
        dateProps={dateProps}
        contentProps={contentProps}
      />
    </StyleDiv>
  );
};

export default CommentItem;
