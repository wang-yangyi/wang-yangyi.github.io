import React, { useState } from 'react';

export default function Experience() {
    
    const [toggleState, setToggleState] = useState(1);

    const changeTab = (index) => {
        setToggleState(index);
        console.log("selected:", index);
    };

    const edu = [{period: "2019 - 2023", sch: "National University of Singapore", qf: "BSc (Hons.) Data Science and Analytics"}, 
                {period: "2017 - 2018", sch: "St Andrew's Junior College", qf: "GCE A level"}]

    const work = [{period: "Jun 2022 - Dec 2022", comp: "Societe Generale", role: "Data Analyst Intern", desc: "As a Data Analyst Intern, I took on various projects and worked with different stakeholders to implement data driven solutions to address their needs. My main project include building data pipelines to automate data cleaning and dashboard generation for the sales and trading team in another region, saving at least 6 hours of manual work each month."},
                {period: "Jan 2022 - Jun 2022", comp: "Data4Life", role: "Data Engineer Intern", desc: "I mainly worked on a POC (proof of concept) project to build data pipelines for handling parquet files and integrate it into current data infrastructure. Other miscellaneous tasks include implementing RESTFUL API endpoints in the web application."},
                {period: "Dec 2021 - Dec 2021", comp: "Moaah", role: "Full Stack Developer Intern", desc: "In this 1 month internship, I picked up AngularJS and implemented 5 interactive web components that can retrieve and render data from the cloud storage. Other functionalities include sorting and filtering of data."},
                {period: "May 2021 - Jul 2021", comp: "KLA", role: "Summer Intern", desc: "I wrote python scripts which improved the efficiency of Data extraction and Data wrangling for over 5000 files. I also had other tasks which allowed me to explore different python packages such as Tkinter for building GUI."}]

    const hack = [{period: "Nov 2021", name: "Code for Asia CodeathonX 2021", desc: "Evaluated problems with online education arrangement and came up with solutions that would fill the gaps in rising Edtech industry. We then made a pitch deck to pitch the idea to experienced entrepreneurs.", title: "Winner team", link: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=414787620055387"},
                {period: "Jan 2021", name: "NUS Data Science Competition 2021", desc: "This competition was organised in partnership with HP who has provided participants with the data. We were tasked to build a model to detect and count acumens on the paper, find anomalies and perform handwriting recognition. Using labellmg from github, we were able to train the model to detect and count the acumens.", title: "Top 10 team", link: ""},
                {period: "Nov 2020", name: "Shopee Product and Design Challenge 2020", desc: "We conducted user research to find out common pain points customer faced when shopping on Shopee. With the findings, we came up with a solution of having a forum page and created a prototype using Figma.", title: "Participant", link: ""}]

    return(
        <section className='experience section' id='experience'>
            <h1 className='section_title resume-title'>
                EXPERIENCE
            </h1>
            <div className='experience-container container'>
                <div className='experience-tabs'>
                    <div className={toggleState === 1 ? 'experience-button active-button':'experience-button'} onClick={() => changeTab(1)}>
                        <i class='bx bxs-graduation'></i>
                        Education
                    </div>
                    <div className={toggleState === 2 ? 'experience-button active-button':'experience-button'} onClick={() => changeTab(2)}>
                        <i class='bx bx-briefcase-alt-2'></i>
                        Experience
                    </div>
                    <div className={toggleState === 3 ? 'experience-button active-button':'experience-button'} onClick={() => changeTab(3)}>
                        <i class='bx bx-code-alt'></i>
                        Hackathon
                    </div>
                </div>
                <div className='experience-content'>
                    <div className={toggleState === 1 ? 'active-content' : 'no-content'}>
                        {edu.map((entry, index) => (
                            <div key = {index} className="exp-data">
                                <div>
                                    <span className='exp-dot'></span>
                                    <span className='exp-line'></span>
                                </div>
                                <div> 
                                    <div className='exp-time'>{entry.period}</div>
                                    <h2 className='exp-title'>{entry.sch}</h2>
                                    <h3 className='exp-subtitle'>{entry.qf}</h3>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className={toggleState === 2 ? 'active-content' : 'no-content'}>
                        {work.map((entry, index) => (
                            <div key = {index} className="exp-data">
                                <div>
                                    <span className='exp-dot'></span>
                                    <span className='exp-line'></span>
                                </div>
                                <div> 
                                    <div className='exp-time'>{entry.period}</div>
                                    <h2 className='exp-title'>{entry.comp}</h2>
                                    <h3 className='exp-subtitle'>{entry.role}</h3>
                                    <p className='desc'>{entry.desc}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className={toggleState === 3 ? 'active-content' : 'no-content'}>
                        {hack.map((entry, index) => (
                            <div key = {index} className="exp-data">
                                <div>
                                    <span className='exp-dot'></span>
                                    <span className='exp-line'></span>
                                </div>
                                <div> 
                                    <div className='exp-time'>{entry.period}</div>
                                    <h2 className='exp-title'>{entry.name}</h2>
                                    <h3 className='exp-subtitle'>{entry.title}</h3>
                                    <p className='desc'>{entry.desc}</p>
                                    {entry.link ? 
                                        <a href={entry.link} target="_blank" rel="noreferrer" className='hack-link'> 
                                            View More
                                            <i class="uil uil-arrow-up-right"></i>
                                        </a> : null }
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
    
}