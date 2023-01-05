import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return(
            <section className='about section' id='about'>
               <div className='about-container container grid'>
                    <div className='profile-desc'>
                        <h1 className='profile-title'>
                            Hello, I'm Wang Yang Yi
                        </h1>
                        <p className='profile-text'>
                            I'm a final year student studying Data Science and Analytics at the National University of Singapore (NUS).
                            Through some classes taken in school and my internship experiences, 
                            I found my interest in Full stack development and wish to pursue a career in this area. 
                            I hope to explore more on data engineer or software engineer roles as well.
                        </p>
                        <a href="https://www.linkedin.com/in/wang-yang-yi/" target="_blank" className='social-icon'>
                            <i class='bx bxl-linkedin-square'></i>
                        </a>
                        <a href="https://github.com/wang-yangyi" target="_blank" className='social-icon'>
                            <i class='bx bxl-github' ></i>
                        </a>
                        <a href="mailto:yangyi.yang24@gmail.com" target="_blank" className='social-icon'>
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