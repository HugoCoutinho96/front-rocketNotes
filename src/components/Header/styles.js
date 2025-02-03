import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: "header";

    height: 105px;
    width: 100%;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    padding: 0 80px;

    @media(max-width: 768px){
        padding: 0 20px; 
    }
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span{
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }

        strong{
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE}
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;
    font-size: 36px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    transition: color 0.1s;

    &:hover{
        cursor: pointer;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`
