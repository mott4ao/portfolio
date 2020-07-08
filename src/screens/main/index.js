import React from 'react';

import { Container, Body, Logo } from './styles'
import {ReactComponent as CreativeLogo} from '../../imgs/creative.svg';

class Main extends React.Component {
    render() {
      return (
        <>
          <Container>
              <Body>
                  <Logo>
                <CreativeLogo />
                  </Logo>
                  <h1>
                    Trabalho com prazer, fazendo seu sonho uma<br></br> realidade
                  </h1>
                  {/* <h2>
                  Toda grande ideia começa com um sonho,
                    <br></br>meu trabalho é tornar esse sonho,
                    <br></br>realidade.
                  </h2> */}
                  <button>Descubra meus trabalhos</button>
              </Body>
          </Container>
        </>
      );
    }
  }

export default Main;