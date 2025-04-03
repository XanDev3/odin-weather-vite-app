import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {FooterWrapper, GithubLink} from './Footer.styles.js'

export function Footer(){
    return(
        <FooterWrapper>
            Xander© 2023
            <GithubLink 
             href="https://github.com/xandev3/odin-weather-vite-app"
             target="_blank"
             rel="noopener" >
            <FontAwesomeIcon icon={faGithub} size= "lg"/> 
            </GithubLink>
            
        </FooterWrapper>
    )
}
