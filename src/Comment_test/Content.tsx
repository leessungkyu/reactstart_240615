import styled from "styled-components";

type ContentProps = {
  idProps: string;
  dateProps: string;
  contentProps: string;
};
const Content = ({ idProps, dateProps, contentProps }: ContentProps) => {
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
        <div>{idProps}</div>
        <div>{dateProps}</div>
      </StyledDiv>
      <StyleContent>{contentProps}</StyleContent>
    </div>
  );
};

export default Content;
