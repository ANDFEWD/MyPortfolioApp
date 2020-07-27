import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

// https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSr8uWo1xuhzhZR9YrFMFrkL3-zlcznly1wqcYwWDlv3a2WVX6&usqp=CAU

export default class Landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} >
                <Grid className="landingpage-grid" >
                    <Cell col={12}>
                        <img src="https://cdn1.iconfinder.com/data/icons/avatar-vol-5-1/512/2-512.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Front-End Web Developer</h1>

                            <hr/>
                            <p> HTML/CSS | Bootstrap | JavaScript | React | Node.js | Express </p>
                            <div className="social-links">   
                                {/*LinkEdin */}
                                <a href="https://www.linkedin.com/in/andrii-blashchuk-6116461b2/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/*GitHub */}
                                <a href="https://github.com/ANDFEWD" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/*Peopleperhour */}
                                <a href="https://www.peopleperhour.com/freelancer/development-it/andrew-blashchuk-junior-web-developer-vyazywx" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-users" aria-hidden="true" />
                                </a>
                                {/*Freecodecamp */}
                                <a href="https://www.freecodecamp.org/fcc159c1e77-cb38-4855-908b-c86d9e9ba504" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                
                            </div>
                        </div>
                    </Cell>
                </Grid>  
               
            </div>
        )
    }
}
