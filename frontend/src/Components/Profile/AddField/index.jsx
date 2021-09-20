import styled from "styled-components";
import { useState } from "react";

const AddFieldWrapper = styled.div`
    grid-area: inp;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    input {
        position: absolute;
        left: 0px;
        width: 100%;
        height: 100%;
        min-height: 50px;
        background: none;
        display: flex;
        align-items: center;
        border: none;
        border-bottom: solid 1px ${props => props.theme.black20};
        outline: rgba(0,0,0,0);
    }
    label {
        position: absolute;
        font-size: ${(props) => props.focus ? props.theme.textSizeXS : props.theme.textSizeS};
        transform: ${(props) => props.focus ? "translate(0px, -24px)" : "translate(0px, 0px)"};
        color: ${(props) => props.focus ? props.theme.black50 : "black"};
        transition: transform 0.4s, font-size 0.4s;
    }
`

const AddField = (props) => {

    const [focus, setFocus] = useState(false)

    const focusHandler = (e) => {
        setFocus(!focus)
    }

    return (
        <AddFieldWrapper focus={focus}>
            <label 
                value="Type"
                htmlFor="add_thing">
                    Type something...
            </label>
            <input
                id="add_thing"
                type="text"
                onChange={props.handler}
                onFocus={focusHandler}
                onBlur={focusHandler}>  
            </input>        
        </AddFieldWrapper>
    )
}

export default AddField;