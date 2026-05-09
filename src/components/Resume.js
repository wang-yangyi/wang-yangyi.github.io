import React from 'react';

export default function Resume() {
    const embedurl = "https://docs.google.com/document/d/e/2PACX-1vSyn_MYXCbt3izWNmq_D0ak-3YaY_PMhfSdHcbM3K3atubz9Q1nggRYzZwDR4aem4Z6UB_KJbdx7830/pub?embedded=true"
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
