import Header from "./Header";
import Posts from "./Posts";
import Profile from "./Profile";

import styles from './App.module.css';
import {useState} from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "Emmanoel Mendes",
    role: "CEO @MendesAssessoria",
    userImage: "https://github.com/emmanoeldev.png",
    coverImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
  });
  return (
    <>
      <Header/>
      <main className={styles.container}>
        <Profile
          user={user}/>
        <Posts/>
      </main>
    </>
  );
}

export default App
