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

 const clickHandler2 = () => {
    alert("클릭했슈2");
 };

  return(
    <>
      <Header />
      <Main />
      <Footer />
      <hr />
      {/* <User name="철수" age={20} /> */}
      {/* <User userObj={ userObj } /> */}
      {/* <User userObj={ userObj }  clickHandler={ clickHandler2 } /> */}
      {/* <User {...userObj} clickHandler={clickHandler2} /> */}
      {/* <User>
        <p>children01</p>
        <p>children02</p>
        <p>children03</p>
      </User> */}
      <User title="제목도 넘겨보자">
        <p>children01</p>
        <p>children02</p>
        <p>children03</p>
      </User>
    </>
  );
}