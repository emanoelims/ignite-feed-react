import {ThumbsUp, Trash} from "phosphor-react";

import styles from "./Comment.module.css";
import {formatDistance} from "./date-util";

type CommentProps = {
  author: {
    name: string,
    userImage: string
  },
  content: { type: string, content: string }[],
  publishedAt: Date
};

const Comment = ({author, content, publishedAt}: CommentProps) => {
  return (
    <article className={styles.container}>
      <img src={author.userImage} alt=""/>
      <div className={styles.content}>
        <div className={styles.top}>
          <header className={styles.header}>
            <div>
              <h1>{author.name}</h1>
              <time dateTime={publishedAt.toISOString()}>{formatDistance(publishedAt)}</time>
            </div>
            <Trash width={20} height={20}/>
          </header>
          {content.map(c => {
            if (c.type == "paragraph") {
              return <p>{c.content}</p>
            }
          })}
        </div>
        <button className={styles.actions}>
          <ThumbsUp width={20} height={20}/>Aplaudir <span>03</span>
        </button>
      </div>
    </article>
  );
}

export default Comment;
