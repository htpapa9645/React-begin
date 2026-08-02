import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import User from "./components/User";

export default function App(){
  const userObj = {
    name: "민우",
    age: 42,
  };
  
  const clickHandler = function(){
    //console.log("클릭했슈");
    alert("클릭했슈");
  };

  return(
    <>
      <Header />
      <Main />
      <Footer />
      <hr />
      {/* <User name="철수" age={20} /> */}
      {/* <User userObj={ userObj } /> */}
      <User userObj={ userObj }  clickHandler={ clickHandler } />
    </>
  );
}