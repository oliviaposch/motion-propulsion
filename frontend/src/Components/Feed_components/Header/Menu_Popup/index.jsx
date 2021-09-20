import styled from "styled-components";

const PopUpMain = styled.div`
  width: 200px;
  height: 15px;
  position: absolute;
  bottom: 100px;
  border: 1px solid black;
`;

const MenuPopUp = () => {
  return (
    <PopUpMain>
      <p>hello</p>
    </PopUpMain>
  );
};

export default MenuPopUp;
