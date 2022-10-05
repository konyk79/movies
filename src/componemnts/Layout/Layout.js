import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="bg-dark">{props.children}</main>
    </>
  );
};

export default Layout;
