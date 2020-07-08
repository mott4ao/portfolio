import React from 'react';

import { Container, Menu } from './styles';

function Header() {
  return (
      <Container>
        <Menu>
            <h1>Tauã Mota</h1>
            <ul>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </Menu>
      </Container>
  );
}

export default Header;