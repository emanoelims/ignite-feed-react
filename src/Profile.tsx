import {PencilLine} from "phosphor-react";

import Avatar from "./Avatar";

import styles from './Profile.module.css';

type ProfileProps = {
  user: {
    name: string,
    role: string,
    userImage: string,
    coverImage: string
  }
};

const Profile = ({user}: ProfileProps) => {
  return (
    <aside className={styles.container}>
      <img className={styles.cover}
           src={user.coverImage}
           alt=""/>
      <div className={styles.content}>
        <Avatar image={user.userImage}/>
        <h1 className={styles.name}>{user.name}</h1>
        <p className={styles.role}>{user.role}</p>
      </div>
      <footer className={styles.footer}>
        <button className={styles.button}><PencilLine width={20}/>Editar seu perfil</button>
      </footer>
    </aside>
  );
}

export default Profile;
