import styled from 'styled-components';

export const Container = styled.div `
    text-align: center;

    & h1 {
        font-size: 28px;
    }

    & span {
        font-size: 22px;
        font-weight: 600;
        color: tomato;
    }

    & h6 {
        font-size: 22px;
        font-weight: 600;
        color: tomato;
    }
`

export const Slides = styled.ul `
    height: 300px;
    margin-bottom: 15px;
    

    & li {
        list-style: none;
        margin: auto 25px ;
        background-color: #F2F2F2;
        :target{
            z-index: 3;
        }
    }



    & h1 {
        width: 250px;
        text-align: center;
    }

    & img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: top;
    }

`

export const Thumbnails = styled.ul`
    display: flex;
    margin-bottom: 48px;
    flex-wrap: wrap;

    & li {
        margin-left: 0;
        margin-right: 35px;
        list-style: none;
        display: inline-flex;
        flex-direction: row;
    }

    & img {
        width: 64px;
        height: 69px;
    }
`