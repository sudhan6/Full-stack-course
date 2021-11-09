import One from './components/One';
import {useState } from 'react';


const App = () => {
const [data,setdata] = useState ([{password: "abcd"}, {password: "123456"}])
  return (
    <div >
       <One data={data}/>
    </div >
  );
}



export default App;