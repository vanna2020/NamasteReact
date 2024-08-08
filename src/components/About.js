import User from "./User";
import UserClass from "./UserClass";

const About = () => {

  return (
    <div className="body">
      {/* <h3>About Page</h3>
      <h3>About Page</h3> */}
      <User name={"vandana Singh"} age={25} />
      <UserClass name={"Smita Singh"} age={26} />
    </div>
    
  );
};
export default About;
