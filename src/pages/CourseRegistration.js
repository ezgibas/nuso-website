import Page from './Page'

function CourseRegistration() {
    const headerContent = <h1>NORTHEASTERN UNIVERSITY SYMPHONY ORCHESTRA</h1>
    const pageName = "COURSE REGISTRATION"
    const information = <div>
        {/* TODO UPDATE CRN & MAKE VARIABLE */}
        <p>NUSO members are strongly encouraged to enroll in the Orchestra course on myNortheastern (MUSC 1906, CRN 30367 as of Spring 2020). 
            A course description can be found on the Northeastern Registrar’s Office website.
             Enrollment affects funding, so please register for the class as soon as possible.</p>
        <p>Orchestra is a one-credit, non-billable class that can only be taken pass/fail.  A passing grade
             is for a member that attends rehearsals and concerts, and makes an effort to learn the repertoire.
              Members with 19 credits or above are still allowed to register for Orchestra as a class 
              without being charged an additional tuition fee. (Such members may need to contact their academic
               advisers to raise their credit limit.) Furthermore, undergraduate students are still allowed to 
               enroll in Orchestra during co-op.</p>
        <p>Registration for the class can be completed during the open registration period of each semester. Once this period is over, late registration can be completed via the Office of the Registrar.
             For more information, please look at the <a href="https://registrar.northeastern.edu/article/late-course-registration/">registrar's page</a>.</p>
    </div>

    return (
        <Page headerContent = {headerContent} pageName={pageName} information={information}></Page>
    );
}


export default CourseRegistration;