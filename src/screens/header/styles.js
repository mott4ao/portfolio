import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
  width: 100vw;
  height: 75px;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  flex: 1;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex: 1;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    margin: 0px 70px;
    
    >h1{
        font-weight: 900;
        font-size: 20px;
    }

    >ul{
        list-style: none;

        >li{
        display: inline-flex;
        padding: 10px;
        }
    }


`;
