import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SeatchItems from "./SeatchItems";



function App() {
  const [porulgal, setporulgal] = useState([
    {
      id: 1,
      checked: true,
      porul: "thoonganum",
    },
    {
      id: 2,
      checked: false,
      porul: "sapdanum",
    },
    {
      id: 3,
      checked: false,
      porul: "phone nondanum",
    }
  ]);

  const [newPorul , setnewPorul] =useState("")
  const [search, setsearch] = useState('')

  useEffect (()=>{JSON.parse(localStorage.getItem('todo list'))},)

  const puthuPorul =(porul) => {
    const id = porulgal.length ? porulgal[porulgal.length -1].id +1 :1;
    const addNewItem = {id,checked:false,porul}
    const listItems = [...porulgal,addNewItem]
    setporulgal(listItems)
    localStorage.setItem("todo list",JSON.stringify(listItems))
  }

  const maathu = (id) => {
    const summa = porulgal.map((porul) =>
      porul.id === id ? { ...porul, checked: !porul.checked } : porul
    );
    setporulgal(summa);
  };
  const edu = (id) => {
    const edukanum = porulgal.filter((porul) => porul.id !== id);
    setporulgal(edukanum);
  };

  const seeru = (e) => {
    e.preventDefault()
    if (!newPorul) return;
    console.log(newPorul);
    puthuPorul(newPorul);
    setnewPorul('')
  }

  return (
    <div className="App">
      <Header />
      <AddItem 
        newPorul ={newPorul}
        setnewPorul={setnewPorul}
        seeru={seeru}
      />
      <SeatchItems 
        search = {search}
        setsearch ={setsearch}
      />
      <Content porulgal={porulgal.filter(porul => ((porul.porul).toLowerCase()).includes(search.toLowerCase()))} maathu={maathu} edu={edu} />
      <Footer alavu={porulgal.length} />
    </div>
  );
}

export default App;
