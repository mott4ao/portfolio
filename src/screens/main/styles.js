import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600&display=swap');
    width: 100vw;
    height: 750px;
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const Body = styled.div`
    display: flex;
    margin: 50px 0px;
    flex-direction: column;
    align-items: center;
    font-family: 'Catamaran', sans-serif;
    font-weight: 600;

    >h1{
        flex-direction: column;
        margin-top: 32px;
        text-align: center;
        font-size: 33px;
    }

    >h2{
        margin-top: 10px;
        color: #8f8f8f;
        text-align: center;
        font-size: 16px;
        letter-spacing: 5px;
    }

    >button{
        margin-top: 10em;
        background: #2A35FC;
        box-shadow: 0px 1px 1px #444CE2;
        border-radius: 6px;
        border: none;
        width: 200px;
        height: 50px;
        color: white;
        font-family: Catamaran;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 90%;
    }
`;

export const Logo = styled.div`
    justify-content: center;
    justify-self: center;
`;
