import styled from "styled-components";
import backgroundImg from "../../assets/notebook.jpg";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
`

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    
    > h1{
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
    
    > h2{
        font-size: 24px;
        margin: 48px 0;
    }
    
    > p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    
    > a{
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
    
    > button{
        cursor: pointer;
    }
    `
    
    export const Background = styled.div`
        flex: 1;
        background: url(${({$img}) => $img}) no-repeat center center;
    `


