import styled from "styled-components";
import MenuBar from "../../Components/Feed_components/Header/Menu_Bar";
import Main from "../../Components/Verification/Main Wrapper";
import Person from "../../Components/Friends_components/Person";
import AddField from "../../Components/Profile/AddField";
import { useEffect, useState } from "react";
import Axios from "../../API";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

export const FeedMain = styled(Main)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.postsBackground};
  height: auto;

  .find-friends {
    transform: translate(0px, 50px);
    width: 90%;
    margin: auto;
  }
`;

const FindFriends = () => {
  const token = useSelector((state) => state.token);
  const [userList, setUserList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  

  const changeHandler = (event) => {
    const input = event.target.value.toLowerCase().split(" ").join("");
    const filtereList = userList.filter( user => {
      let result = true;
      const reg = new RegExp(`${input != undefined ? input.toLowerCase() : ".*"}`)
      result = reg.test((user.first_name+user.last_name+user.username).toLowerCase());
      return result;
      });
      setFilteredList(filtereList);
  }

  const fetchUsers = async () => {
    const limit = 100;
    const offset = 0;
    const url = `users/?limit=${limit}&offset=${offset}`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const resp = await Axios.get(url, config);
      if (resp.status === 200) {
        setUserList(resp.data.results);
        setFilteredList(resp.data.results)
      }
    } catch (err) {
      if (err.response.status === 400) {
        console.log(err.response);
      }
    }
  }
  
  useEffect(() => {
    fetchUsers()
  }, [token]);

  return (
    <FeedMain>
      <MenuBar />
      <div className="find-friends">
        <AddField handler={changeHandler}/>
        <Masonry
          breakpointCols={4}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {
          filteredList.map((user,index) => {
            if (user.first_name != "") {
              return (<Person key={index} user={user} key={uuidv4()} />)
            }
          })
        }
        </Masonry>
      </div>
    </FeedMain>
  );
};

export default FindFriends;
