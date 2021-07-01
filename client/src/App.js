import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Index from './components/login/Index';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  const[user, setUser] = useState({});


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
        });
      }
    });
  }, []);
  if (!user) return <Index onLogin={setUser} />;

  return (
    <>
  <NavBar user={user} setUser={setUser} />
  <Router>
    <main>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        </Switch>
    </main>
      </Router>
    </>
  );
}

export default App;
