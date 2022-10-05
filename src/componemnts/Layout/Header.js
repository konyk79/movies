// I want to show another approach how make styles only for certain component.
//For header I use only plain css without bootstrap
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-content"]}>
        <div className={classes.logo}></div>
        <div>
          <h1>Movies</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Contact me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
