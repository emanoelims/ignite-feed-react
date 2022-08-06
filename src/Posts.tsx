import styles from "./Posts.module.css";
import Avatar from "./Avatar";

const Posts = () => {
  return (
    <section className={styles.container}>
      <article className={styles.post}>
        <header className={styles.postHeader}>
          <Avatar />
          <div>
            <h1>Emmanoel Mendes</h1>
            <p>CEO @MendesAssessoria</p>
          </div>
          <time>Publicado há 1 dia</time>
        </header>
        <div className={styles.postContent}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,
            evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉 <a href="#">jane.design/doctorcare</a></p>
          <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
        </div>
        <footer className={styles.postFooter}>
          <h2>Deixe Seu feedback</h2>
          <form>
            <textarea placeholder="Escreva um comentário..."></textarea>
            <button type="submit">Publicar</button>
          </form>
        </footer>
      </article>
    </section>
  );
}

export default Posts;
