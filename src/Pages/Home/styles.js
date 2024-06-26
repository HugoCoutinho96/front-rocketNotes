import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header" 
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    @media(max-width: 619px){
        grid-template-columns: auto;
        grid-template-rows: 105px 128px 500px 64px;
        grid-template-areas: 
            "header" 
            "search"
            "content"
            "newnote";

    }
`
export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1{
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.ORANGE};;
    }

    @media(max-width: 619px){
        display: none;
    }
`
export const Menu = styled.ul`
    grid-area: menu;
    width: 100%;
    margin: 0 auto;
    list-style: none;
    padding-top: 64px;
    text-align: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > li{
        margin-top: 24px;
    }

    @media(max-width: 619px){
        display: none;
    }
`
export const Search = styled.div`
    grid-area: search;
    padding: 64px 64px 0;

    @media(max-width: 619px){
        padding: 64px 15px;
    }
`
export const Content = styled.div`
    grid-area: content;
    padding: 0 64px;
    overflow-y: auto;

    @media(max-width: 619px){
        margin: 10px 0;
        padding: 0 15px;
    }
`
export const NewNote = styled(Link)`
    grid-area: newnote;

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media(max-width: 619px){
        justify-self: center;
        margin: 10px 0;
        padding: 30px 20px;
        width: 90%;
        border-radius: 10px;
    }
`