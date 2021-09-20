import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export const withAuth = (WrapperComponent) => {
  return (props) => {
    const token = useSelector((state) => state.token);
    const history = useHistory();
    if (token) {
      return <WrapperComponent />;
    } else {
      history.push("/signin");
      return null;
    }
  };
};
