import styled from "styled-components";
import MenuBar from "./Menu_Bar";
import SearchBar from "./Search_Bar/index";

const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const Header = () => {
  return (
    <HeaderMain>
      <MenuBar />
      <SearchBar />
    </HeaderMain>
  );
};

export default Header;
