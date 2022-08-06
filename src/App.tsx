import Header from "./Header";
import Posts from "./Posts";
import Profile from "./Profile";

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <Header/>
      <main className={styles.container}>
        <Profile/>
        <Posts/>
      </main>
    </>
  );
}

export default App
