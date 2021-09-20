import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import styled from "styled-components";
import React from "react";
import search_icon from "../../../../Assets/svgs/search_icon.svg";

const SBDiv = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  background: ${(props) => props.theme.postsBackground};
  z-index: 0;
  border-bottom: 1px solid rgba(0, 0, 1, 0.09);
`;

const BaseSBSection = styled.div`
  display: flex;
  align-items: center;
`;

const SBSectionLeft = styled(BaseSBSection)`
  justify-content: flex-start;
  padding-left: 10%;
  width: 65%;
`;

const SBSectionRight = styled(BaseSBSection)`
  justify-content: flex-end;
  width: 35%;
  padding-right: 7%;
`;

const BaseSBBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  height: 100%;
  opacity: 0.5;
  margin-left: 20%;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid black;
    height: 103.5%;
    opacity: 1;
  }
`;

const LikedBtn = styled(BaseSBBtn)`
  margin-left: 0;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SearchInput = styled.input`
  margin-left: 21px;
  border: none;
  height: 20px;
  background: ${(props) => props.theme.postsBackground};
  outline: none;

  :focus {
    outline: none;
  }
`;

const SearchBar = () => {

  const [search, setSearch] = useState('');
  //useffect
  const dispatch = useDispatch();
  useEffect(() => {
  const action = {
    type: "SEARCH_POSTS_USERS",
    payload: search
  }
  dispatch(action);

  }, [search])

  return (
    <SBDiv>
      <SBSectionLeft>
        <SearchForm>
          <img src={search_icon} alt=''/>
          <SearchInput type="text" placeholder="Search Friends.." onChange={ e => setSearch(e.target.value)}/>
        </SearchForm>
      </SBSectionLeft>
      <SBSectionRight>
        <LikedBtn>Liked</LikedBtn>
        <BaseSBBtn>Friends</BaseSBBtn>
        <BaseSBBtn>Follow</BaseSBBtn>
      </SBSectionRight>
    </SBDiv>
  );
};

export default SearchBar;