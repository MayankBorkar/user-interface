import './App.css';

import AddUser from "./component/Users/AddUser";
import UserList from "./component/Users/UserList";
import {useState} from "react";

function App() {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (uName, uAge) => {
      setUserList((prevUserList) => {
          return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString() },
          ];
      });
    };
    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={userList}/>
        </div>
    );
}
export default App;