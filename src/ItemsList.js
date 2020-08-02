import React from 'react';
import './ItemsList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ItemsList(props) {

    const items = props.items;
    const itemsArray = items.map(item => 
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text}
                    onChange= {
                        (e) => {
                            props.setUpdate(e.target.value)
                        }
                }
                    ></input>
                <span>
                <FontAwesomeIcon className="faicons" icon='trash' onClick={ () => props.deleteItem(item.key)}/>
            </span>
                
                </p>
            
            </div>
        })
    return(
        <div>{itemsArray}</div>
    )
}


export default ItemsList;