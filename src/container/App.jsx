import React, { Component } from 'react';
import Main from '../components/Main';
import { createGlobalStyle } from 'styled-components';

// El estilo global de la App
const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
    
`;

// Aca traemos el componente Main
export default class App extends Component {
    render() {
        return (
            <div>
                <Aside />
                <Main>
                    <GlobalStyle />
                </Main>
            </div>
        )
    }
}
