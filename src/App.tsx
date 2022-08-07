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

  const posts = [
    {
      id: Math.random().toString(),
      author: {
        name: "EMmanoel Mendes",
        role: "CEO @MendesAssessoria",
        userImage: "https://github.com/emmanoeldev.png"
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋"
        },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
        },
        {
          type: "anchor",
          content: "👉 jane.design/doctorcaren"
        }
      ],
      publishedAt: new Date("2022-08-4"),
      comments: [
        {
          author: {
            name: "Emmanoel",
            userImage: "https://github.com/emmanoeldev.png"
          },
          content: [
            {type: "paragraph", content: "Muito bom Devon, parabéns!! 👏👏"},
          ],
          publishedAt: new Date("2022-08-06")
        },
        {
          author: {
            name: "Emmanoel",
            userImage: "https://github.com/emmanoeldev.png"
          },
          content: [
            {type: "paragraph", content: "Muito bom Devon, parabéns!! 👏👏"},
          ],
          publishedAt: new Date("2022-08-06")
        }
      ]
    }
  ];

  return (
    <>
      <Header/>
      <main className={styles.container}>
        <Profile
          user={user}/>
        <Posts posts={posts}/>
      </main>
    </>
  );
}

export default App
