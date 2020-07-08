import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: none;
    }

    body, html{
        font-family: 'Nunito', sans-serif;
        width: 100vw;
    }
    
`;

export default Global;
