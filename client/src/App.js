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
import NoteSearch from './pages/NoteSearch';
import Blogs from './pages/Blogs';


// set initial note state

function App() {
  const[user, setUser] = useState({});
  const[userChecklistItems, setUserChecklistItems] = useState([])
  const [filteredId, setFilteredId] = useState(null)
  const [notes, setNotes] = useState([]);
  const [blogs, setBlogs] = useState([])
  const [filterblogs, setFilterBlogs] = useState('all')

	
const [searchText, setSearchText] = useState("");
//function to update note state

function addNote (addedNotes){
  setNotes((notes) => [...notes, addedNotes]);
 };


// delete note 
const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id.id);
  setNotes(newNotes)
}
  //complete checklist_item
  const handleToggle = (toggled_item) => {
    let mapped = userChecklistItems.map(item => {
      return item.id === toggled_item.id ? { ...toggled_item} : { ...item};
    });
    setUserChecklistItems(mapped);
  }
  
//   const handleToggle = (event) => {
//   user.user_checklist_items.map(item => item.id === event.target.name ? handleCompleteToggle(event.target.name, item) : null)
//   console.log(event.target.name)
// }
//   const handleCompleteToggle = (name, completedItem) =>{
//     completedItem.isCompleted? setUser([...user.user_checklist_items.map(item => item.id === name ? {...item, isCompleted: false } :item )]) : setUser([...user.user_checklist_items.map(item => item.id === name ? { ...item, isCompleted: true} : item)])
//   }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
          
        });
      }
    });
  }, []);

  //fetch notes
  useEffect(() => {
    // auto-login
    fetch("/notes").then((r) => {
      if (r.ok) {
        r.json().then((notes) => {setNotes(notes)
        });
      }
    });
  }, []);

  //fetch blogs
  // useEffect(() => {
  //   fetch("/blogs").then((r) => {
  //     if (r.ok) {
  //       r.json().then((blogs) => {setBlogs(blogs)
          
  //       });
  //     }
  //   });
  // }, []);

  // filter blogs
  
  const setBlog= (event) => {
    setBlogs(event.target.value)
  }
  const onFilter = () =>{
    let url = '/blogs';
    if (filterblogs !== 'all'){
      url += `?label=${filterblogs}`
    }
    
    fetch(url)
    .then(res => res.json())
    .then(filteredBlogs => setBlogs(filteredBlogs))
    console.log(filterblogs)
    }
  useEffect(() => {
    // get user_checklist_item
    fetch("/user_checklist_items").then((r) => {
      if (r.ok) {
        r.json().then((userChecklistItems)=> {setUserChecklistItems(userChecklistItems)})
      }
    });
  }, []);


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
        <Route path="/blogs">
          <Blogs 
          setBlog={setBlog}
          filterblogs={filterblogs}
          setFilterBlogs={setFilterBlogs}
          onFilter={onFilter}
          blogs={blogs}/>
        </Route>
        <Route path="/userchecklists" >
        <UserChecklist
        setFilteredId ={setFilteredId}
         user={user} />
        </Route>
        <Route path="/Wedding Registry" >
        <WeddingRegistry 
          userChecklistItems={userChecklistItems}
        handleToggle={handleToggle}
        filteredId={filteredId}
        user={user} />
        </Route>
        <Route path="/Venue" >
        <Venue 
          userChecklistItems={userChecklistItems}
         handleToggle={handleToggle}
        filteredId={filteredId}
        user={user} />
        </Route>
        <Route path="/Bridesmaids" >
        <Bridesmaids
        setUser={setUser}  
        userChecklistItems={userChecklistItems}
        handleToggle={handleToggle}
        filteredId ={filteredId}
        user={user} />
        </Route>
        <div className="notes-background">
        <div className="notes-container">
        <NoteSearch handleSearchNote={setSearchText} />
        <Route path="/notes">
          <NotesList 
          searchText={searchText}
          user={user}
          onAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}/>
        </Route>
        </div>
        </div>
        </Switch>
    </main>
      </Router>
    </>
  );
}

export default App;
