import {useState} from "react";

const ToDo = ({addItem})=> {
  const [itemName,setItemName] = useState('');
  function handleSubmit(ev) {
    ev.preventDefault();
    addItem(itemName);
    setItemName('');
  }
  return (
    <div
    className="container">
    <form onSubmit={handleSubmit}>      
      <input type="text"
             value={itemName}
             onChange={event => setItemName(event.target.value)}           
            />
             <button>add</button>
    </form>
    </div>
  );
}
export default ToDo

//   const handleSubmit = (e) =>{
//     e.preventDefault(); 
//     if(!newItemName)
//     return(
//       // showAlert(true, 'danger', 'please enter value')
//       alert('Fill the Form please')
//     )
//     else 
//     addItem(newItemName);
//     setNewItemName('');
//     alert('Succes you just added')
    
//   return (
//     console.log(newItemName)
//   )}
//   return (
//     <div className='container'> 
//     <form onSubmit={handleSubmit} >
//       <input
//       type='text'
//       style={{marginRight:'1rem'}}
//       onChange={(event) => setNewItemName(event.target.value)}
//       value={newItemName}
//       />
//        <button  className='button' onClick={handleSubmit} >                
//               add </button>
//     </form>   
//     </div>
//   )
// }
// export default ToDo