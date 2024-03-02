import Page from './Page'

export default function Auditions() {
    const headerContent = <h1>NORTHEASTERN UNIVERSITY SYMPHONY ORCHESTRA</h1>
    const pageName = "AUDITIONS"
    // TODO MAKE VARIABLES FOR AUDITION SHEET, LOCATION, AND TIME
    const information = <div>
        <p>
        Below you can find information about our audition requirements, and access the audition excerpts. If you have any questions about auditions you can email our secretary at nuso.secretary@gmail.com.
        </p>
        <p>
            Auditions occur at the beginning of every semester. All new and returning members must audition in the Fall, but only new members must audition in the Spring.
        </p>
        <p>
            In order to sign up for auditions, please fill out the form here. Sign up for your audition timeslot on this Google Sheet.
        </p>
        <p>
            In order to be added to the Email list for more information, please email the Secretary at nuso.secretary@gmail.com
        </p>
        <p>
            Audition Guidelines
        </p>
        <p>
            All auditions will be held at the Fenway Center, located at 77 St. Stephen Street.
        </p>
        <p>
            Auditions will start 9/6.
        </p>
        <p>
            If you need to rent an instrument and haven’t let us know, reach out to Crystal (nuso.manager@gmail.com) ASAP!
        </p>
        <p>
            Music for auditions
        </p>
        <ul>
            <p>
            Please prepare two brief contrasting excerpts from your instrument’s solo literature that demonstrate your expressive and technical capabilities. For example, this may consist of a fast, technical excerpt and a slow, expressive one. While ideally, they are from different pieces, excerpts may be from the same piece—just make sure they are as contrasting as possible.
            </p>
            <p>
            Please also prepare the orchestral excerpts for your instrument (available online at the link below and from the orchestra secretary).
            </p>
        </ul>
        <p>
            Excerpts (Fall 2023 and Spring 2024)
        </p>
    </div>
    return (
        <Page headerContent = {headerContent} pageName={pageName} information={information}></Page>
    );
}

