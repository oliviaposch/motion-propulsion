import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 60px;
    border-bottom: solid 1px ${props => props.theme.black20};
`

export const PlaceholderLabel = styled.label`
    font-size: ${props => props.theme.textSizeXS};
    color: ${props => props.theme.black50};
    margin-bottom: 7px;
`
export const Icon = styled.img`
    color: ${props => props.theme.purple};
    margin-right: 20px;
    margin-bottom: -3px;
`

export const FlexColumnDiv = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
`

export const BaseInput = styled.input`
    color: ${props => props.theme.black};
    outline: none;
    margin-bottom: 18px;
    border: none;

    ::placeholder {
        color: ${props => props.theme.black};
    }
`
export const EmailVerification = styled.input`
    
    outline: none;
    margin-bottom: 18px;
    border: none;

    
`