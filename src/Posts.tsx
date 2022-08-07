import Avatar from "./Avatar";
import Comment from "./Comment";

import {formatDistance} from "./date-util";

import styles from "./Posts.module.css";

type Author = {
  name: string,
  role: string,
  userImage: string
};

type Content = {
  type: string,
  content: string
};

type Comment = {
  author: {
    name: string,
    userImage: string
  },
  content: Content[],
  publishedAt: Date
};

type Post = {
  id: string,
  author: Author,
  content: Content[]
  publishedAt: Date,
  comments: Comment[]
};

type PostsProps = {
  posts: Post[],
};

const Posts = ({posts}: PostsProps) => {
  return (
    <section className={styles.container}>
      {posts.map(post => (
        <article className={styles.post}>
          <header className={styles.postHeader}>
            <Avatar image={post.author.userImage}/>
            <div>
              <h1>{post.author.name}</h1>
              <p>{post.author.role}</p>
            </div>
            <time
              dateTime={post.publishedAt.toISOString()}>
              {formatDistance(post.publishedAt)}
            </time>
          </header>
          <div className={styles.postContent}>
            {post.content.map(c => {
              if (c.type == "paragraph") {
                return <p>{c.content}</p>
              }
              if (c.type == "anchor") {
                return (
                  <p><a href="#">{c.content}</a></p>
                )
              }
            })}
          </div>
          <footer className={styles.postFooter}>
            <h2>Deixe Seu feedback</h2>
            <form>
              <textarea placeholder="Escreva um comentário..."></textarea>
              <button type="submit">Publicar</button>
            </form>
            {post.comments.map(comment => (
              <Comment
                author={comment.author}
                content={comment.content}
                publishedAt={comment.publishedAt}
              />
            ))}
          </footer>
        </article>
      ))}
    </section>
  );
}

export default Posts;
