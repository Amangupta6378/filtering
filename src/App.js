import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recomendation from "./Recomendation/Recomendation";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import products from './Db/Data'
import Cards from "./Components/Cards";

function App() {

  const [selectedCategory, setSelectedCategory ] = useState(null)
  const [query, setQuery] = useState("")

  
  //----------input Filter----------
  const handleInputChange =(event)=>{
      setQuery(event.target.value)
  }

  const filteredItems =products.filter((product)=>{
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  })

  //----------Radio Filter----------
  const handleChange = (event)=>{
    setSelectedCategory(event.target.value)
  }

  //----------Button Filter----------
  const handleClick =(event)=>{
    setSelectedCategory(event.target.value)
  }

  function filteredData(products,selected,query){
    let filteredProducts = products
  

  //Filtering Input Items
  if(query){
    filteredProducts = filteredItems
  }
  

  //Selected Filter 
  if(selected){
    filteredProducts= filteredProducts.filter(({category,color,company, newPrice,title})=>category === selected || color === selected || company === selected || newPrice=== selected || title === selected )
  }

  return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>( <Cards
     key ={Math.random()}
     img ={img}
     title={title}
     star ={star}
     reviews ={reviews}
     newPrice ={newPrice}
     prevPrice ={prevPrice}
  
  />))
  }

  const result = filteredData(products, selectedCategory,query)

  return (
    <div className="App">
      <Sidebar handleChange={handleChange}></Sidebar>
      <Navigation></Navigation>
      <Recomendation></Recomendation>
      <Products />
    </div>
  );
}

export default App;
