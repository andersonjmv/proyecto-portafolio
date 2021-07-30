import React, { Component } from 'react';
import styled from 'styled-components';
import Informacion from '../components/Informacion'
import Aside from '../components/Aside';

// Styled del grid de la App
const StyledMain = styled.div`
display: grid;
justify-content: center;
padding: 4em;
`;

// Styled del container
const ContainerMain = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
grid-gap: 3rem;
grid-row-gap: 0.5em;   
`;


//* Importar componente Aside 

export default class Main extends Component {
    render() {
        return (
            <div>
                <StyledMain>
                <ContainerMain>
                  <Aside />
                    <Informacion />
                </ContainerMain>
            </StyledMain>
            </div>
        )
    }
}
