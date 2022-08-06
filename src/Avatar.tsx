import styles from "./Avatar.module.css";

type AvatarProps = {
  image: string
}

const Avatar = ({image}: AvatarProps) => {
  return (
    <img className={styles.container} src={image} alt="User avatar"/>
  );
}

export default Avatar;
