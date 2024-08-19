
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

const About = () => {

  return (
    <div className="body">
      <UserContext.Consumer>
        {({loggedInUser})=>(
          <h1 className="font-bold">{loggedInUser}</h1>
        )}
      </UserContext.Consumer>
      <UserClass name={"Smita Singh"} age={26} />
    </div>
    
  );
};
export default About;
