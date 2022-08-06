import Header from "./Header";
import Profile from "./Profile";

import styles from './App.module.css';

const App = () => {
  return (
    <>
      <Header/>
      <main className={styles.container}>
        <Profile/>
      </main>
    </>
  );
}

export default App
