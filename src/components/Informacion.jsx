import React, { Component } from 'react'
import Estudios from './Estudios'
import Experiencia from './Experiencia'

import Certificaciones from '../components/Certificaciones'
import Habilidades from '../components/Habilidades'

//! A TENER EN CUENTA
//* Los componentes deben importarse en el mismo orden en que estan renderizados ↓↓↓.


export default class Informacion extends Component {
    render() {
        return (
            <div>
                <div className="informacion-container">
                    <Estudios /> 
                    <Experiencia />
                    <Certificaciones />
                    <Habilidades />
                </div>
            </div>
        )
    }
}
