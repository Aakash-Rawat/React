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


import ItemList from './ItemList'

const Content = ({ items, handleCheck,handleDelete})=>{
  
  return(
    <main>
      {items.length ? (
              <ItemList
                    items = {items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete} 
                    />
            ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </main>
  ) 
}

export default Content