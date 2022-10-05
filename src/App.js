import "./App.css";
import SearchForm from "./componemnts/Forms/SearchForm";
import Layout from "./componemnts/Layout/Layout";
import Movies from "./componemnts/Movies/Movies";

function App() {
  document.body.classList.add("bg-dark");
  return (
    <Layout>
      <div className="container bg-dark py-3 justify-content-center mx-auto">
        <SearchForm />
        <ul>
          <Movies />
        </ul>
      </div>
    </Layout>
  );
}

export default App;
