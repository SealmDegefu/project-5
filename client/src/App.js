import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Index from './components/login/Index';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Footer from './pages/Footer';
import UserChecklist from './pages/UserChecklist';
import WeddingRegistry from './pages/WeddingRegistry';
import Bridesmaids from './pages/Bridesmaids';


function App() {
  const[user, setUser] = useState({});
  const [filteredId, setFilteredId] = useState(null)
  const [isCompleted, setIsCompleted] = useState(false)


  // const list = filteredItem.map((user) => user.list)
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
          
          // console.log(list)
        });
      }
    });
  }, []);

  function handleDeleteItem() {
    setIsCompleted((true))
  }

  //fetch Checklist 
  // useEffect(() => {
  //   fetch("/checklists")
  //   .then((r) => r.json())
  //   .then(setUserChecklist);
  // }, []);

  if (!user) return <Index onLogin={setUser} />;

  return (
    <>
  <NavBar user={user} setUser={setUser} />
  <Footer />
  <Router>
    <main>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/userchecklists" >
        <UserChecklist
        setFilteredId ={setFilteredId}
         user={user} />
        </Route>
        <Route path="/Wedding%20Registry" >
        <WeddingRegistry user={user} />
        </Route>
        <Route path="/Bridesmaids" >
        <Bridesmaids 
        onDeleteItem={handleDeleteItem}
        filteredId ={filteredId}
        user={user} />
        </Route>
        </Switch>
    </main>
      </Router>
    </>
  );
}

export default App;
