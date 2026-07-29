import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import User from "./components/User";

export default function App(){
  return(
    <>
      <Header />
      <Main />
      <Footer />
      <hr />
      <User name="철수" age={20} />
    </>
  );
}