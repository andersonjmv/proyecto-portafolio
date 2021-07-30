import React, { Component } from 'react';
import styled from 'styled-components';
import {FaFacebook, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
import Foto from './img/myprofile.jpg';


const contenedorAside = styled.div`
height: 80vh;
;`


const PhotoAside = styled.img`
 border: 0.38vh solid #6d31ce;
  margin-top: 4.5vh;
  margin-left: 3.5vh;
  margin-right: 3.5vh; 
  border-radius: 50%;
  width: 13vw;
  height: 13vw;
    
;`  



const Name = styled.p`
text-align: center;
 color: cornflowerblue;
  font-size: 3vh;
`;

const Occupation = styled.p`
 font-size: 3vh;
    color: cornflowerblue;
    text-align: center;
`;

const Location = styled.p`
  color: rgb(196, 63, 63);
    font-size:  2.5vh!important;
    text-align: center;
`;

const Logos = styled.div`
justify-content: center;
display: inline-block;
padding-left: 5vh;
`;





const colorName= {color: '#3b5998', padding: ' 0 2vh'};
const colorTwitter= {color:'#00acee', padding: '0 2vh' };
const colorLinkedin = {color: '#0e76a8', padding: '0 2vh'};
const colorGithub = {color: '#000', padding: '0 2vh'};






export default class Aside extends Component {
    render() {
        return (
           <div className="contenedorAside">

           <PhotoAside src={Foto}></PhotoAside>

                <Name> Jorge Arley Tarifa <br />
  Rodriguez  </Name>
            
          <Occupation> Developer Front-End Junior </Occupation>
                <Location> Developing greatest applications  <br />

                Vancouver, CA.  </Location>

                <Logos>

                <FaFacebook style={colorName} />
                <FaTwitter style={colorTwitter} />
                <FaLinkedin style={colorLinkedin} />
                <FaGithub style={colorGithub} />

                </Logos>                
            </div>
        )
    }
}
