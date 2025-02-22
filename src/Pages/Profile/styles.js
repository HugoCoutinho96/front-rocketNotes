import styled from "styled-components";

export const Container = styled.div`
        width: 100%;

        > header{
            height: 144px;
            background: ${({theme}) => theme.COLORS.BACKGROUND_900};

            display: flex;
            align-items: center;

            padding: 0 124px;

            svg{
                color: ${({theme}) => theme.COLORS.GRAY_100};
                font-size: 24px;
                transition: color 0.1s;

                &:hover{
                    color: ${({theme}) => theme.COLORS.WHITE};
                }
            }

            button{
                background: none;
                border: none;
                cursor: pointer;
            }

            @media(max-width: 767px){
                padding: 0 20px;
            }
        }
`

export const Form = styled.form`
    max-width: 340px;
    margin: 0 auto;

    > div:nth-child(4){
        margin-top: 24px;
    }

    @media(max-width: 619px){
        padding: 0 15px;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -100px auto 32px;
    width: 186px;
    height: 186px;
    border-radius: 50%;

    > img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label{
        width: 48px;
        height: 48px;
        background-color: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        input{
            display: none;
        }

        svg{
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }
`