import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import User from "./components/User";

export default function App(){
  const userObj = {
    name: "철수",
    age: 20,
  };
  return(
    <>
      <Header />
      <Main />
      <Footer />
      <hr />
      {/* <User name="철수" age={20} /> */}
      <User userObj={ userObj } />
    </>
  );
}