import styles from "./style.module.css"

const PropertyList = () => {
  return (
    <div className={styles.pList}>
      <div className={styles.pListItem}>
        <img
        
          src="/sri-lanka.jpeg" 
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Hotels</h1>
          <h2>33 hotels</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          
          src="/sri-lanka.jpeg" 
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Apartments</h1>
          <h2>30 hotels</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          
          src="/sri-lanka.jpeg" 
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Resorts</h1>
          <h2>40 hotels</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
         
          src="/sri-lanka.jpeg" 
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListItem}>
          <h1>Villas</h1>
          <h2>30 hotels</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
         
         src="/sri-lanka.jpeg" 
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListItem}>
          <h1>Homestay</h1>
          <h2>12 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;