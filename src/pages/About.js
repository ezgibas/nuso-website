import Page from './Page'

const headerContent = <h1>NORTHEASTERN UNIVERSITY SYMPHONY ORCHESTRA</h1>

function About() {
    const pageName = "ABOUT"
    const information = <div>
    <p>General Information:</p>
    <p>The Northeastern University Symphony Orchestra (NUSO) is a full symphonic ensemble open to students,
         staff, and faculty from all backgrounds and majors.  It performs music from the baroque period to 
         the present day. Its past repertoire has included symphonies, film scores, romantic and contemporary
          music, and premieres of new works.  Concerts are at the end of the fall and spring semesters.</p>
    <p>NUSO is open to all currently enrolled students, staff, and faculty.
         Any additional requests to join will be considered at the discretion of the Director. 
         Rehearsals are Wednesdays, 6:15-8:45pm at the Fenway Center, with the first rehearsal 
         of each semester open to all interested members. Auditions are held at the beginning of
          each semester to determine the size and repertoire of the ensemble, as well as seating 
          within sections and eligibility for chamber ensembles. All new and returning members must audition 
          each school year to participate in NUSO.</p>
    <p>Orchestra is an extracurricular activity, but membership in NUSO requires an <a href="/dues">enrollment fee</a> to sustain 
        the organization. Signing up for orchestra as a free, one-credit elective is also
         required by the College of Arts, Media and Design (CAMD). Undergraduate students may register for 
         orchestra on myNortheastern by adding the section for MUSC 1906.  This course may be repeated every
          semester for credit. For more information about enrolling, click <a href="/registration">here.</a></p>
    </div>
    // TODO ADD INFORMATION ABOUT DIRECTOR/EBOARD HERE
    return (
        <Page headerContent = {headerContent} pageName={pageName} information={information}></Page>
    );
}

function AboutVideo() {
    // TODO ADD VARIABLE FOR EMBED ID
    const pageName = "VIDEO"
    const information = <div>
        <p> Learn more about NUSO!</p>
        <p> You can check out some of the clips from our rehearsals and concerts in the video below.
             The video also includes interviews with our director Evan and some of our members!</p>
        <iframe
        src={`https://youtube.com/embed/QLiGDgVHvz4?si=bJJsI4UnGLSK0nDc`}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    />
    </div>

    return (
        <Page headerContent = {headerContent} pageName={pageName} information={information}></Page>
    );
}



export {About, AboutVideo};