import styled from "styled-components";

export const MBDiv = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  background: #ffffff;
  z-index: 1;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 1, 0.09);
`;

export const MenuLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 3%;
  align-items: center;
  width: 70%;
`;

export const BaseBtn = styled.button`
  background: none;
  border: none;
  height: 100%;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid #ad73fd;
    height: 103.5%;
    cursor: pointer;
  }
`;

export const MenuRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3%;
  align-items: center;
  width: 19%;
  position: relative;
`;

export const LogoImg = styled.img`
  height: 26px;
  width: 26px;
`;

export const MBTitle = styled.p`
  font-size: ${(props) => props.theme.textSizeTitle};
  margin-left: 2%;
  margin-right: 8%;
`;

export const BasePFBtn = styled(BaseBtn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 103.5%;
  font-size: ${(props) => props.theme.textSizeDefault};

  :hover {
    border-bottom: 2px solid #ad73fd;
    height: 103.5%;
  }
`;

export const PostsBtn = styled(BasePFBtn)`
  width: 80px;
  margin-right: 6%;
`;

export const FriendsBtn = styled(BasePFBtn)`
  width: 129px;
`;

export const MenuBtn = styled(BaseBtn)`
  width: 20px;
  height: 100%;
  margin-left: 7%;
`;

export const UserBtn = styled(BaseBtn)`
  width: 50px;
  margin-left: 30%;
  height: 100%;
`;

export const DropdownNav = styled.div.attrs(() => ({tabIndex: 0}))`
    background: white;
    border-radius: 4px;
    position: absolute;
    top: 78px;
    right: 0;
    width: 300px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    &.active{
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    } 
    width:82%;
`;
export const Li = styled.li`
  list-style-type: none;
  padding: 1rem 2rem;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const LiSpan = styled.span`
  margin-right: 20px;
  position: relative;
  top: 3px;
`;