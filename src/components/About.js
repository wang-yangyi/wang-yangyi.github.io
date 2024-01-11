import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return(
            <section className='about section' id='about'>
               <div className='about-container container grid'>
                    <div>
                        <h1 className='profile-title'>
                            Hello, I'm Wang Yang Yi
                        </h1>
                        <p className='profile-text'>
                            I'm a recent graduate with a degree in Data Science and Analytics at the National University of Singapore (NUS).
                            During my academic journey, I developed a profound interest in data engineering and software roles
                            through enriching internships. Now, as a Data Engineer, I work closely with clients to understand
                            their data, construct efficient pipelines and analyze datasets for valuable insights. Explore some of
                            my work and experiences here!
                        </p>
                        <a href="https://www.linkedin.com/in/wang-yang-yi/" target="_blank" rel="noreferrer" className='social-icon'>
                            <i class='bx bxl-linkedin-square'></i>
                        </a>
                        <a href="https://github.com/wang-yangyi" target="_blank" rel="noreferrer" className='social-icon'>
                            <i class='bx bxl-github' ></i>
                        </a>
                        <a href="mailto:yangyi.yang24@gmail.com" target="_blank" rel="noreferrer" className='social-icon'>
                            <i class='bx bxl-gmail' ></i>
                        </a>
                    </div>
                    <div className='profile-img-container'>
                        <div className='profile-img'></div>
                    </div>
                    
                </div> 
            </section>
            
        );
    }
}