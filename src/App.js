import './App.css';
import Header from './accordion/Header';
import React, {useState} from 'react';


function App() {
const [active, setActive] = useState("")
const [answers, setAnswer] = useState([
  {
    id: 1,
    answer:'Аномалии? Неизвестные порождения Зоны, таящие в себе смертельную опасность для невнимательных сталкеров',
  },
  {
    id: 2,
    answer:'Мутанты  Когда-то - обычные безобидные существа, сейчас - ужасные монстры, способные порвать любого на куски.'
  }
])
  return (
    <div className='App'>
 
    <Header title="Аномалии?" answer='Неизвестные порождения Зоны, таящие в себе смертельную опасность для невнимательных сталкеров.' active={active} setActive={setActive}/>
    <Header title="Мутанты" answer='Когда-то - обычные безобидные существа, сейчас - ужасные монстры, способные порвать любого на куски.' active={active} setActive={setActive} />
    <Header title="Выбросы" answer='"Взрывы" аномальной энергии, регулярно накрывающие всю Зону. Выбросы уничтожают все живое на своем пути.' active={active} setActive={setActive}/>
    <Header title="PVP / PVE" answer='Кому ты можешь доверять, а кому нет? Кто опаснее - зверь в шкуре человека или человек в шкуре зверя?' active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
