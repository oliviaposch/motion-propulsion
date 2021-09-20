import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Main from "../../Verification/Main Wrapper/index";
 
const FeedMain = styled(Main)`
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.postsBackground};

    .banner-container {
        height: 43%;
        overflow: hidden;

        img {
            width:100%;
            transform: ${(props) => `translate(0px, ${props.translateY}px);`};
        }
    }
    input {
        position: fixed;
        transform: rotate(-90deg) translate(60px, -80px);
        top: 25vh;
        left: 5%;

        z-index: 1;
        width: 200px;
        }
`;

const Background = () => {
    const dispatch = useDispatch();
    const image = useSelector(state => state.user.banner)
    const image_pos = useSelector(state => state.template_profil.banner_position);

    const image_elem = useRef();
    const div_elem = useRef();

    const [imageHeight, setImageHeight] = useState(0);
    const [divHeight, setDivHeight] = useState(0);

    const handleBannerPosition = (e) => {
        const h_img = image_elem.current.getBoundingClientRect().height; 
        setImageHeight(h_img);  
        const h_div = div_elem.current.getBoundingClientRect().height; 
        setDivHeight(h_div);

        const type = "BANNER_POSITION";
        const payload = {[e.target.id]: e.target.value};
        dispatch({type: type, payload: payload});     
    };

    const handleResize = () => {
        try {            
        const h_div = div_elem.current.getBoundingClientRect().height; 
        setDivHeight(h_div);
        const h_img = image_elem.current.getBoundingClientRect().height; 
        setImageHeight(h_img);
        } catch (error) {
            console.error(error);
        }
    } 

    const handleImageLoad = () => handleResize()
    useEffect(() => window.addEventListener('resize', handleResize), []);



    return (

        <FeedMain translateY={(imageHeight-divHeight) * (image_pos/100) - (imageHeight-divHeight)}> 
            <div 
                className="banner-container"
                ref={div_elem}>
                <img 
                    src={image}
                    ref={image_elem}
                    alt="banner"
                    onLoad={handleImageLoad}/>    
            </div>
            <input
                onChange={handleBannerPosition}
                defaultValue={image_pos}
                type="range" 
                min="0" 
                max="100" 
                className="slider" 
                id="banner_position"/>
        </FeedMain>

    )
}

export default Background;