import styles from './style.module.scss';

export default function NotFound({ searchPath }) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 >
          Error 404: {searchPath ? searchPath : ''} Not Found
        </h1>
      </div>
    </div>)
};