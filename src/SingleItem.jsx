import Checkbox from "./Checkbox";
import {useState} from "react";

const SingleItem=({name,done,onToggle,removeItem,Rename}) =>{
  const [editMode,setEditMode] = useState(false);
  return (
    <div 
    // className={'task ' + (done?'done':'')} 
    style={ {display:'flex', justifyContent:'space-between'}}
    >   
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode ? (
        <div className="" onClick={() => setEditMode(prev => !prev)}>
          <span>{name}</span>
        </div>
      ):
       (
        <form onSubmit={ev => {ev.preventDefault();setEditMode(false);}}>
          <input type="text" value={name}
                 onChange={ev => Rename(ev.target.value)} />
        </form>
      )}
      <button  onClick={removeItem}>
      X
      </button>
    </div>
  );
}
export default SingleItem
