//++++++++++++ Hooks (useState)++++++++++++++++++

// import {useState} from 'react';


// const Content = ()=>{
    
// const [name, setName] = useState('Aakash');
// const [count, setCount] = useState(0);


// const handleNameChange = ()=>{
//     const names = ["bob","kevin","aakash"];
//     const int = Math.floor(Math.random()*3)
//     setName(names[int]);
//   }

//   const handleCount = ()=>{
//     setCount(count+1);
//     console.log(count);
    
//   }

//   const handleClick = ()=>{
//     setCount(count+1);
//     console.log(count);
    
//   }

//   const handleClick2 = (name)=>{
//     console.log(`${name} clicked`);
    
//   }

//   const handleClick3 = (e)=>{
//     console.log(e.target.innerText);
    
//   }


//     return (
//         <main>
//             <p onDoubleClick={handleClick}>
//                 Hello {name} !
//             </p>
//             <button onClick ={handleNameChange}>Change Name</button>
//             <button onClick ={()=>handleClick2('Aakash')}>Click It</button>
//             <button onClick ={(e)=>handleClick3(e)}>Click It</button>
//             <button onClick={handleCount}>Count</button>
//         </main>
//     )
// }

// export default Content;




//+++++++++++ Lists & Keys +++++++++++++++++++++

import {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = ()=>{
  const [items, setItems] = useState([
    {
      id:1,
      checked: true,
      name: "Item1"
    },
    {
      id:2,
      checked: false,
      name: "Item1"
    },
    {
      id:3,
      checked: false,
      name: "Item1"
    }
   
  ]);

  const handleCheck = (id)=>{
        const listItems = items.map((item)=>
          item.id===id? {...item,checked: !item.checked} : item);
        setItems(listItems);
        localStorage.setItem('shoppingList',JSON.stringify(listItems))
         
  }




  return(
    <main>
      <ul>
        {items.map((item)=>(
          <li className="item" key={item.id}>
             <input
               type = "checkbox"
               onChange={()=>handleCheck(item.id)}
               checked = {item.checked}
             />
             <label>{item.name}</label>
             <FaTrashAlt 
             role="button"
              tabIndex="0" 
              />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content