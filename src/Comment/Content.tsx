import styled from "styled-components";

const Content = () => {
  const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    width: 500px;
  `;

  const StyleContent = styled.div`
    display: flex;
    justify-content: start;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    width: 500px;
  `;
  return (
    <div>
      <StyledDiv>
        <div>푸드매니아</div>
        <div>2024-06-22</div>
      </StyledDiv>
      <StyleContent>
        너무너무 맛있을거 같아요:)
        <br />
        ㅋㅋㅋㅋ
      </StyleContent>
    </div>
  );
};

export default Content;
