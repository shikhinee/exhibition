//Styles must be imported here
import styles from "./Dropdown.module.scss";

const Dropdown = (props) => {
  return (
    <div className={styles.container}>
          <select defaultValue={'DEFAULT'} className={styles.dropdownContainer}>
            <option value="DEFAULT" disabled>ProjectName</option>
            <option value="">MaySeven</option>
            <option value="">Landing Page</option>
            <option value="">Infrastructure</option>
            <option value="">ERP</option>
          </select>
    </div>
  );
};

export default Dropdown;
