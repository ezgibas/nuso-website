import Page from './Page'

function CourseRegistration() {
    const headerContent = <h1>NORTHEASTERN UNIVERSITY SYMPHONY ORCHESTRA</h1>
    const pageName = "DUES"
    const information = <div>
        {/* TODO MAKE VARIABLES */}
        <p>NUSO members are required to pay dues every semester to help fund activities, food, and merchandise.</p>
        <p>As of the 2019-2020 school year, dues paid within the mid-semester deadline are as follows:</p>
        <p>1 semester: $20    //    2 semesters: $35</p>
        <p>Dues received after this deadline increase by $5. Members who have not paid by the concert date
             will not be allowed to play in the concert. Members of more than one NU Bands group (Wind Ensemble,
              Concert Band, etc.) are eligible for a discounted fee of $10 per semester.</p>
              {/* TODO REST OF CONTENT */}
    </div>

    return (
        <Page headerContent = {headerContent} pageName={pageName} information={information}></Page>
    );
}


export default CourseRegistration;