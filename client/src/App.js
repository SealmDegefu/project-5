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
import Venue from './pages/Venue';
import NotesList from './pages/NotesList';
import { nanoid } from 'nanoid';
import NoteSearch from './pages/NoteSearch';

//notes
const initialState = {
notes: "",
date: ""
}

function App() {
  const[user, setUser] = useState({});
  const[userChecklistItems, setUserChecklistItems] = useState({})
  const [filteredId, setFilteredId] = useState(null)
  const [notes, setNotes] = useState(initialState);

const [searchText, setSearchText] = useState("");
//function to update note state

const addNote = (text) =>{
   const date = new Date()
   const newNote={
     id: nanoid(),
     text: text,
     date: date.toLocaleDateString()
   }
   const newNotes = [...notes, newNote];
   setNotes(newNotes);
};

// delete note 
const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes)
}
  //complete checklist_item
  
  const handleToggle = (id) => {
    let mapped = user.user_checklist_items.map(item => {
      return item.id === Number(id) ? { ...item, isCompleted: !item.isCompleted } : { ...item};
    });
    setUserChecklistItems(mapped);
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
          
        });
      }
    });
  }, []);

  // useEffect(() => {
  //   // get user_checklist_item
  //   fetch("/user_checklist_items").then((r) => {
  //     if (r.ok) {
  //       r.json().then((userChecklistItems)=> {setUserChecklistItems(userChecklistItems)})
  //     }
  //   });
  // }, []);


  if (!user) return <Index onLogin={setUser} />;

  return (
    <>
  <NavBar 
  userChecklistItems={userChecklistItems} 
  user={user} 
  setUser={setUser} />
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
        <Route path="/Wedding Registry" >
        <WeddingRegistry 
        handleToggle={handleToggle}
        filteredId={filteredId}
        user={user} />
        </Route>
        <Route path="/Venue" >
        <Venue 
         handleToggle={handleToggle}
        filteredId={filteredId}
        user={user} />
        </Route>
        <Route path="/Bridesmaids" >
        <Bridesmaids 
        userChecklistItems={userChecklistItems}
        handleToggle={handleToggle}
        filteredId ={filteredId}
        user={user} />
        </Route>
        <div className="notes-container">
        <NoteSearch handleSearchNote={setSearchText} />
        <Route path="/notes">
          <NotesList 
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}/>
        </Route>
        </div>
        </Switch>
    </main>
      </Router>
    </>
  );
}

export default App;
