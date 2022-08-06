import {ThumbsUp, Trash} from "phosphor-react";

import styles from "./Comment.module.css";

const Comment = () => {
  return (
    <article className={styles.container}>
      <img src="https://github.com/emmanoeldev.png" alt=""/>
      <div className={styles.content}>
        <div className={styles.top}>
          <header className={styles.header}>
            <div>
              <h1>Emmanoel Mendes (Você)</h1>
              <time>Cerca de 2h</time>
            </div>
            <Trash width={20} height={20}/>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <button className={styles.actions}>
          <ThumbsUp width={20} height={20}/>Aplaudir <span>03</span>
        </button>
      </div>
    </article>
  );
}

export default Comment;
