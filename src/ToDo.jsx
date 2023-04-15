import {useState} from "react";
import Alert from "./Alert";

const ToDo = ({addItem,tasks})=> {
  const [itemName,setItemName] = useState('');
  const [alert, setAlert] = useState({ show: false,
     msg: '', type: '' 
    });
  const showAlert = (show = false,
     type = '', msg = ''
     ) => {
        setAlert({ show, 
          type, msg 
        });
      };
  const handleSubmit=(ev) =>{
    ev.preventDefault();
    if(!itemName)
        return(
          showAlert(true, 'danger', 'please enter value')
          // alert('Fill the Form please')
         
        )
        else 
        showAlert(true, 'success', 'one task added ');
        addItem(itemName);
        setItemName('');
        // alert('Succes you just added')    
           }
  return ( 
    <>
     {alert.show && <Alert {...alert} 
        removeAlert={showAlert}
         tasks={tasks}
         />}
    <div className="container">
       
    <form onSubmit={handleSubmit}>      
      <input type="text"
             value={itemName}
             onChange={event => setItemName(event.target.value)}           
            />
             <button>add</button>
    </form>
    </div>
    </>
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