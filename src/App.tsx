import "./globals.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["app-wrapper"]}>
      <h1>My App</h1>

      <div className="nest-check">Hello</div>
      <div className="test">
        <span className="nested">TESTX</span>
      </div>
    </div>
  );
}

export default App;
