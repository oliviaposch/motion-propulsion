import menu from "../../../../Assets/svgs/menu.svg";
import styled from "styled-components";
import GenericAvatar from "../../../../Assets/pngs/generic_user.png";

const HeaderWrapper = styled.span`
  width: 100%;
  height: 93px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const MenuPicture = styled.img``;
const ProfilPicture = styled.img`
  height: 50px;
  width: 50px;
`;
const ProfileInformation = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
`;
const TimeStyled = styled.p`
  font-size: ${(props) => props.theme.textSizeS};
  opacity: 0.5;
`;
const UsernameStyled = styled.p`
  font-size: ${(props) => props.theme.textSizeS};
`;
const PostInformation = styled.div`
  margin-left: 12px;
`;

const HeaderLeft = styled.div`
  padding-right: 30px;
`;

const Header = ({ user }) => {
  return (
    <HeaderWrapper>
      <ProfileInformation>
        <ProfilPicture src={user.avatar ? user.avatar : GenericAvatar} />
        <PostInformation>
          <UsernameStyled>
            {user ? user.first_name : null} {user ? user.last_name : null}
          </UsernameStyled>
          <TimeStyled>6h ago</TimeStyled>
        </PostInformation>
      </ProfileInformation>
      <HeaderLeft>
        <MenuPicture src={menu} />
      </HeaderLeft>
    </HeaderWrapper>
  );
};
export default Header;