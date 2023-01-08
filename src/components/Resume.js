import React from 'react';

export default function Resume() {
    const embedurl = "https://drive.google.com/file/d/1bxFRY9-I28Qu_wKnLUEx6_Dz21IERxMj/preview"
    return(
        <section className='resume section' id='resume'>
            <div className='resume-container container grid'>
                <h1 className='section_title resume-title'>
                    Resume
                </h1>
                <iframe src={embedurl} width="700" height="900" allow="autoplay" title="gdriveResume"></iframe>
            </div>
        </section>
    );
}
