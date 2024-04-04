import Button from "./Button";
import styles from "./App.Module.css";
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text="Continue"/>
    </div>
  );
}

export default App;
