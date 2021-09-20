import CrossIcon from "../../../Assets/svgs/cross_icon.svg";
import styled from "styled-components";

const ThingWrapper = styled.li`
    list-style: none;
    display: flex;
    align-items: center;

    background: ${(props) => props.theme.black05};
    border: none;
    border-radius: 18px;
    padding: 8px 16px;
    margin-right: 8px;
    margin-top: 8px;

    p {
        font-size: ${(props) => props.theme.textSizeXXS};
    }

    img {
        width: 10px;
        height: 10px;
        margin-left: 5px;
    }

`



const Thing = (props) => {


    return (
        <ThingWrapper>
            <p>{props.name}</p>
            <img
                id={props.name}
                src={CrossIcon}
                alt={"X"}
                onClick={props.handler}
            />
        </ThingWrapper>
    )
}

export default Thing;