import React  from 'react'
import "./style.css";
import Menu from './menuApi';


const Restaurant = () => {
  
  const[menuData,setMenuData] = React.useState(Menu);
   console.log(menuData)

   

   const filterItem=(category )=>{

    if(category==="All"){
      setMenuData(Menu)
      return;
    }
         const updateList =Menu.filter((curElm)=>{
          return curElm.category===category;
         })
         setMenuData(updateList);

   };

          return (
             <>
             <Navbar filterItem={filterItem} setMenuData={setMenuData}/>


             <seciton className="main-card--container">

          {menuData.map((curElm)=>{
        return(
            <>
          <div className='card-container'key={curElm.id}>
          <div className='card'>
              <div className='card-body'>
                  <span className='card-number'>{curElm.id}
                  </span>
                  <span className='card-author'>{curElm.category}</span>
                  <h2 className='card-title'>{curElm.name}</h2>
                  <span className='card-description'>{curElm.description}
                   I love Maggi orem ipsum dolor sit amet consectetur 
                   adipisicing elit. Modi quidem cumque rerum sit, minus labore.
  
                  </span>
                  <div className='class-read' >read</div>
                </div>
               <img src={curElm.image} alt="images" className="card-media" />
              <span className="card-tag">order now</span>
            </div>
  
           </div>
       </>

        )
       })}
                 </seciton>


    </>
  )
  
}

export default Restaurant


const Navbar=({filterItem,setMenuData})=>{
  return(
<>
<nav className="navbar">
<div className="btn-group ">
  <button className="btn-group__item" 
 onClick={() =>filterItem("breakfast")}>
   Breakfast</button>

 <button className="btn-group__item"
 onClick={() =>filterItem("lunch")}>
 Lunch</button>

 <button className="btn-group__item"
 onClick={() =>filterItem("evening")}>
 Evening</button>

 <button className="btn-group__item"
 onClick={() =>filterItem("dinner")}>
 Dinner</button>

  <button className="btn-group__item" 
    onClick={() =>setMenuData(Menu)}>All</button>   


</div>
</nav>
</> 
  )
}



