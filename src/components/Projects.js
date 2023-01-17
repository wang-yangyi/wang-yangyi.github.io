import React, { Component } from 'react';
import { SiMysql, SiCss3 } from 'react-icons/si'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export default class Projects extends Component {
    render() {
        return(
            <section className='projects section' id='projects'>
                <h1 className='section_title resume-title'>
                    PROJECTS
                </h1>
                <h2 className='container'>
                    Web / Dashboard
                </h2>
                <div className='projects-container container grid'>
                    <div className='project-img'>
                        <div className='project-pic3'></div>
                        <a href="https://github.com/wang-yangyi/wang-yangyi.github.io" target="_blank" rel="noreferrer" className='overlay'>
                            <span className='proj-link'>
                                View More
                            </span>
                            <BsBoxArrowUpRight style={{marginLeft:'5px', color:'black'}}/>
                        </a>
                    </div>
                    <div className='project-text'>
                        <h3> Personal Portfolio Website </h3>
                        <p className='desc'>
                            Made this while learning ReactJS during my freetime. Page is hosted on GitHub Pages. Thanks for viewing!
                        </p>
                        <span className='tech-icon'>
                            <i class='bx bxl-react' style={{color:'#61dbfb'}}></i>
                        </span>
                        <span className='tech-icon'>
                            <i class='bx bxl-github' ></i>
                        </span>

                    </div>
                    <div className='project-text'>
                        <h3> Recommendation System Dashboard </h3>
                        <p className='desc'>
                            Objective of this project is to build a dashboard using python package Dash and build data pipeline 
                            to connect backend recommendation ML model and database to frontend. Final application will then be dockerized.
                        </p>
                         <span className='tech-icon'>
                            <i class='bx bxl-python' style={{color:'#306998'}}></i>
                        </span>
                        <span className='tech-icon'>
                            <SiMysql style={{color:'#00758F'}}/>
                        </span>
                        <span className='tech-icon'>
                            <SiCss3 style={{color:'#264de4'}}/>
                        </span>
                        <span className='tech-icon'>
                            <i class='bx bxl-docker' style={{color:'#0db7ed'}}></i>
                        </span>
                        <span className='tech-icon'>
                            <i class='bx bxl-github' ></i>
                        </span>
                    </div>
                    <div className='project-img'>
                        <div className='project-pic2'></div>
                        <a href="https://github.com/wang-yangyi/DSA3101-Data-Science-in-Practice" target="_blank" rel="noreferrer" className='overlay'>
                            <span className='proj-link'>
                                View More
                            </span>
                            <BsBoxArrowUpRight style={{marginLeft:'5px', color:'black'}}/>
                        </a>
                    </div>
                    <div className='project-img'>
                        <div className='project-pic1'></div>
                        <a href="https://github.com/wang-yangyi/IT2002-Database-Technology-And-Management" target="_blank" rel="noreferrer" className='overlay'>
                            <span className='proj-link'>
                                View More
                            </span>
                            <BsBoxArrowUpRight style={{marginLeft:'5px', color:'black'}}/>
                        </a>
                    </div>
                    <div className='project-text'>
                        <h3> ZOOMZOOM </h3>
                        <p className='desc'>
                            ZOOMZOOM is a carpool web app which allows users to search for, create and delete carpool rides. It 
                            is a fullstack development project with more emphasis on SQL and DBMS concepts.
                        </p>
                        <span className='tech-icon'>
                            <i class='bx bxl-django' style={{color:'#092e20'}}></i>
                        </span>
                        <span className='tech-icon'>
                            <i class='bx bxl-postgresql' style={{color:'#0064a5'}}></i>
                        </span>
                        <span className='tech-icon'>
                            <SiCss3 style={{color:'#264de4'}}/>
                        </span>
                    </div>
                </div>
                
            </section>
        );
    }
}