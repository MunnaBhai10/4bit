
import Card from "./Card.jsx";
import Button from "./button.jsx";
import Student from "./Student.jsx";
import Greeting from "./Greeting.jsx";
function App() {
  return(
    <>
    <Greeting isLoggedin={true} username="Prabesh" />
    <Card></Card>
    <Card></Card><br />
    <Student name="Prabesh" age={20} isStudent={true}/>
    <Student name="Biplop" age={50} isStudent={false}/>
    <Student name="Aayush" age={10} isStudent={true}/>
    <Student name="Aryan"/>
    <Button/>
    
    </>
  );
}

export default App
