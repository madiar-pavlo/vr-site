const ViewEmail = ({ personalInfo }) => {

  const { firstName = 'Anonym', lastName, tel = '+You dont have write it in+', email = 'youdonthavewrite@it.in' } = personalInfo;

  console.log(Boolean(null))

  return (
    <>
      <h3>Hi {`${firstName} ${lastName}`}</h3>

      <p>
        I dont have sent this mail to my mail
        <br />
        beacuse this page is fake web site for training
      </p>

      <h4>But I can show you your Personal Information</h4>

      <p>
        This is your tel:
        <br />
        {tel}
        <br />
        And this is your email:
        <br />
        {email}
      </p>
    </>
  );
};

export default ViewEmail
