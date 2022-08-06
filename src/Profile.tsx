import {PencilLine} from "phosphor-react";

import styles from './Profile.module.css';

const Profile = () => {
  return (
    <aside className={styles.container}>
      <img className={styles.cover}
           src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
           alt=""/>
      <div className={styles.content}>
        <img className={styles.avatar} src="https://github.com/emmanoeldev.png" alt="User avatar"/>
        <h1 className={styles.name}>Emmanoel Mendes</h1>
        <p className={styles.role}>CEO @MendesAssessoria</p>
      </div>
      <footer className={styles.footer}>
        <button className={styles.button}><PencilLine width={20}/>Editar seu perfil</button>
      </footer>
    </aside>
  );
}

export default Profile;
