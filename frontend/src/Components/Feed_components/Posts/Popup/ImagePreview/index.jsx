import styled from 'styled-components';
import CrossIcon from '../../../../../Assets/svgs/cross_icon.svg';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 5px 5px 5px 0;
`

const ImageWrapper = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
`

const Image = styled.img`
    border-radius: 4px;
    width: 100px;
    height: 100px;
`

const Caption = styled.figcaption`
    font-size: 14px;
`

const DeleteIcon = styled.img`
    position: absolute;
    top: 5%;
    right: 5%;
    width: 20px;
    height: 20px;
`

const ImagePreview = ({image, deleteHandler}) => {
    return (
        <FlexContainer>
            <ImageWrapper>
                <Image src={URL.createObjectURL(image)} />
                <DeleteIcon src={CrossIcon} onClick={deleteHandler} />
            </ImageWrapper>
            <Caption>{image.name}</Caption>
        </FlexContainer>
    )
}

export default ImagePreview;