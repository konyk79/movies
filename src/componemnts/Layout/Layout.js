import Header from "./Header";
const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <div className="container bg-dark py-3 justify-content-center mx-auto">
          {props.children}
        </div>
      </main>
    </>
  );
};
export default Layout;
