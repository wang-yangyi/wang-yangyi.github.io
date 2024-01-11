import React from 'react';

export default function Resume() {
    const embedurl = "https://drive.google.com/file/d/1xU7EpD9Taw0Xl2o-ZeWTd-lDEGum1x18/preview"
    return(
        <section className='resume section' id='resume'>
            <div className='resume-container container grid'>
                <h1 className='section_title resume-title'>
                    RESUME
                </h1>
                <iframe src={embedurl} width="700" height="900" allow="autoplay" title="gdriveResume"></iframe>
            </div>
        </section>
    );
}
