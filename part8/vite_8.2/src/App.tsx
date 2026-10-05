import Input from "./components/controlled/Input";
import Input2 from "./components/controlled/Input2";
import Input3 from "./components/controlled/Input3";
import Checkbox from "./components/controlled/Checkbox";
import Checkbox2 from "./components/controlled/Checkbox2";
import Radio from "./components/controlled/Radio";
import Radio2 from "./components/controlled/Radio2";
import Textarea from "./components/controlled/Textarea";
import Textarea2 from "./components/controlled/Textarea2";
import Input4 from "./components/controlled/Input4";
                                                                                                                                              
export default function App(){
  return(
    <>
      <Input />

      <hr style={{borderColor: 'red'}} />
      <Input2 />
      
      <hr style={{borderColor: 'red'}} />
      <Input3 />
      
      <hr style={{borderColor: 'red'}} />
      <Checkbox />
      
      <hr style={{borderColor: 'red'}} />
      <Checkbox2 />
      
      <hr style={{borderColor: 'red'}} />
      <Radio />
      
      <hr style={{borderColor: 'red'}} />
      <Radio2 />

      <hr style={{borderColor: 'red'}} />
      <Textarea />

      <hr style={{borderColor: 'blue'}} />
      <Textarea2 />

      <hr style={{borderColor: 'blue'}} />
      <Input4 />
    </>
  );
}