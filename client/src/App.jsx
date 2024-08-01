
import Card from "./Card.jsx";
import Button from "./button.jsx";
import Student from "./Student.jsx";
import Greeting from "./Greeting.jsx";
import Fruits from "./Fruits.jsx";
function App() {
  const list =[
    {name: 'Apple',
     calories: 120,
     id: 1
    },
    {name:'Banana',
     calories: 90,
     id: 2
   },
   {name:'Orange',
    calories: 40,
    id: 3
   },
   {name: 'Mango',
     calories: 80,
     id: 4
   },
   {name: 'Pine-apple',
     calories: 60,
     id: 5
   }
  ];
   const list2 =[
    {name: 'Potato',
     calories: 120,
     id: 6
    },
    {name:'Brocoli',
     calories: 90,
     id: 7
   },
   {name:'Onion',
    calories: 40,
    id: 8
   },
   {name: 'Celery',
     calories: 80,
     id: 9
   },
   {name: 'Carrot',
     calories: 60,
     id: 10
   }];
  return(
    <>
    <Greeting isLoggedin={true} username="Prabesh" />
   
    <Card></Card>
    <Card></Card>
    <Card></Card><br />
    {list.length>0? <Fruits items={list} category="Fruits" /> : null}
    {list.length>0? <Fruits items={list2} category="Vegetable"/>: null}

    <Student name="Prabesh" age={20} isStudent={true}/>
    <Student name="Biplop" age={50} isStudent={false}/>
    <Student name="Aayush" age={10} isStudent={true}/>
    <Student name="Aryan"/>
    <Button/>
    
    </>
  );
}

export default App
