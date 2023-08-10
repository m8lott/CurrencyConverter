import { useEffect, useState } from "react";
import Input from "./Components/Input";
import Output from "./Components/Output";
import tryConvert from "./JS/convertFunc";

function App () {
  const [value,setValue] = useState('');
  const [select,setSelect] = useState([]);
  const [selectName,setSelectName] = useState({base:'',target:''});
  const[selectValue,setSelectValue] = useState({base:'63.4734',target:'63.4734'});

  useEffect (() => {
  const fetchFunc = async () => {
    try {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const json = await response.json();
    const array = [];
    for (let item in json.Valute) {
      array.push([item,json.Valute[item].Value]);
    }
setSelect(array);
    } catch (err) {
      console.log(err)
    }
    }
    fetchFunc()
},[selectName])
   
const handleChange = (e) => {
  if (Number(e.target.value) || e.target.value.length == 0) {
setValue(e.target.value);
  }

}
const handleSelectBaseChange = (e) => {
setSelectName({base:e.target.value});
selectValue.base = e.target.options[e.target.selectedIndex].value;
}
const handleSelectTargetChange = (e) => {
  setSelectName({target:e.target.value});
  selectValue.target = e.target.options[e.target.selectedIndex].value;
  }
const result = tryConvert(value,selectValue.base,selectValue.target);
return (
  <div className="flex flex-col items-center pt-40">
    <Input value = {value} onChange = {handleChange}/>
    <div className="flex gap-8 mb-5">
    <legend className="text-lg">Base curr.</legend>
    <select className="outline-1 outline-gray-300 border-2 rounded-xl pl-2" name="base" onChange={handleSelectBaseChange}>
    {
      select.map((item) => {
      return <option className="text-xs" key={item[1]} value={item[1]}>{item[0]}</option>;
    })
    }
    </select>
    <legend className="text-lg">Target curr.</legend>
    <select className="outline-1 outline-gray-300 border-2 rounded-xl pl-2" name="target" onChange={handleSelectTargetChange}>
    {
      select.map((item) => {
      return <option className="text-xs" key={item[1]} value={item[1]}>{item[0]}</option>;
    })
    }
    </select>
    </div>
    <Output result = {result} />
  </div>
)
}

export default App
