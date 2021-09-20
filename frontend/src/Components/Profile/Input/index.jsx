import styled from "styled-components";
import { useDispatch } from "react-redux";

const ListInputWrapper = styled.li `
    list-style: none;
    display: flex;
    flex-direction: column;

    label {
        color: ${(props) => props.theme.black50};
        font-size: ${(props) => props.theme.textSizeXS};
    }

    input {
        display: flex;
        width: 100%;
        align-items: center;
        height: 100%;
        border: none;
        border-bottom: solid 1px ${props => props.theme.black20};
        outline: rgba(0,0,0,0);
        background: none;
    }
`

const Input = (props) => {
    const name = props.name;
    const value = props.value;
    const key_name = props.key_name;
    const type = props.type;

    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const input = e.target.id;
        dispatch({ type: "TEMLATE_PROFIL", payload: { [input]: value } });
    };

    const handleSelect = (e) => {
        e.target.select();
    }
    
    return (
        <ListInputWrapper 
            key={key_name}
            htmlFor={"label_" + key_name}>
        <label>
          {name}
        </label>
        <input 
            onChange={onChangeHandler}
            defaultValue={value} 
            type={type}
            id={key_name}
            name={"label_" + key_name}
            onFocus={handleSelect}
        >
        </input>
       
      </ListInputWrapper>
    )
}

export default Input;