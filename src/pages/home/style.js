import styled from "styled-components"

export const Container = styled.div`

    background: rgb(0,5,0);
    background: linear-gradient(180deg, 
                rgba(0,5,0,1) 0%, 
                rgba(17,146,230,1) 100%); 
    .profile{
        width: 100%;
        height:80vh;

        .profile__content{
            width: 50%;
            height: 80%;
            border-right: 1px solid #ffffff;
        }

        .profile__about{
            flex-direction: column;
            width: 50%;
            height: 80%;

            .profile__image{
                width: 13rem;
                height: 13rem;
                margin: 1rem;
                border-radius: 50%;
                border: 2px solid #ffffff;
            }

            .profile__info{
                width: 80%;
                height: 50%;
                border: 1px solid #ffffff;
            }
        }
    }
    
    .intro2{
        width: 100%;
        height:80vh;
    }

    .intro3{
        width: 100%;
        height:80vh;
    }

    .intro4{
        width: 100%;
        height:80vh;
    }
`