import "./App.css";
import AppClass from "./components/AppClass";

function App() {
  const people = [
    <AppClass key="1" name="Sera" age="20" DOB="05/18/2004" city="Charlotte" />,
    <AppClass key="2" name="John" age="25" DOB="01/01/1996" city="New York" />,
    <AppClass
      key="3"
      name="Emma"
      age="30"
      DOB="02/15/1991"
      city="Los Angeles"
    />,
    <AppClass
      key="4"
      name="Michael"
      age="35"
      DOB="03/30/1986"
      city="Chicago"
    />,
  ];

  return <div>{people}</div>;
}

export default App;
