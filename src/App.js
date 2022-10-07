import "./App.css";
import Layout from "./componemnts/Layout/Layout";
import Movies from "./componemnts/Movies/Movies";

function App() {
  document.body.classList.add("bg-dark");

  return (
    <Layout>
      <Movies />
    </Layout>
  );
}

export default App;
