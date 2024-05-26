import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.item}>
    <div className={styles.info}>
      <p className={styles.text}>
        <FaUserAlt className={styles.icon} /> {name}
      </p>
      <p className={styles.text}>
        <FaPhoneAlt className={styles.icon} /> {number}
      </p>
    </div>
    <button className={styles.button} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

export default ContactItem;
