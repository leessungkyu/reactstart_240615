import styled from "styled-components";

type ProfileImgProps = {
  imgUrl?: string;
};
const Container = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProfileImg = ({ imgUrl }: ProfileImgProps) => {
  return (
    <Container>
      <Img src={imgUrl} />
    </Container>
  );
};

export default ProfileImg;
