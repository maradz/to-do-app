import React from 'react';
import './App.css';
import ItemsList from './ItemsList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash)


class App extends React.Component {


  state = {
    items: [],
    currentItem: {
      text:'',
      key: ''
    }
  }


  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }



  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log("new item;",newItem)
    console.log("new  text;",newItem.text)

    if(newItem.text !== ''){
      console.log(newItem)
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text:'',
          key: ''
        } 
       
        })
      
    }else{ alert('Add some tasks.')}

  }


  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems,
    })

  }


  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item => 
      {
        if(item.key===key){
          item.text=text;
        }
        this.setState({
          items: items
        })
      })

  }




  render() {
    return (
      <div className="form">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter text..." value={this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">ADD</button>
          </form>
        </header>
        <ItemsList items = {this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>

      </div>
    )
  }
}


export default App;
