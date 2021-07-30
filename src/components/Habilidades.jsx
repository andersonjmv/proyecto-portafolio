import React, { Component } from 'react'
import {Title} from '../style/styled';

export default class Habilidades extends Component {
    render() {
        return (
            <div>
                <Title>Habilidades</Title>
                
                <label for="file">HTML</label>
                <progress id="file" max="100" value="70"> 70% </progress>

                <label for="file">  CSS</label>
                <progress id="file" max="100" value="80"> 80% </progress>

                <label for="file">  JAVASCRIPT</label>
                <progress id="file progress" max="100" value="60"> 60% </progress>

                <div id="progress">
</div>
            </div>
        )
    }
}
