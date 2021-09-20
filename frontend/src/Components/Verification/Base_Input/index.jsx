import { useState } from 'react';
import {InputWrapper, PlaceholderLabel, Icon, FlexColumnDiv, BaseInput} from './styled.js';

const Input = ({type, id, name, icon, onChange}) => {
    const [hasContent, setHasContent] = useState(false);

    const onChangeHandler = (event) => {
        event.target.value === '' ? setHasContent(false) : setHasContent(true);
        onChange(event);
    };

    return (
        <InputWrapper>
            {icon !== undefined ? <Icon src={icon} /> : null }
            <FlexColumnDiv>
                {hasContent ? <PlaceholderLabel>{name}</PlaceholderLabel> : null}
                <BaseInput type={type} placeholder={name} id ={id} onChange={onChangeHandler} />
            </FlexColumnDiv>
        </InputWrapper>
    )
}

export default Input;