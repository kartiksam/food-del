import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              //setCategory((prev)) not a function its a state and we can use this prev to add or remove or compare prev value of state it s const[category,setCategory]=useState("all") not a fucn but behave and take arg asn a func take pare onclick={()=>func nameor state name} else onClick={setCategory("sdalad")} or onclick={()=>funcname(arg)}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : " "}
                src={item.menu_image}
                alt="menu_photo"
              />
              <p>{item.menu_name} </p>
            </div>
          );
        })}
      </div>
      {/* for a break line and add css we have in it or can use direct divider from font awesome */}
      <hr></hr>
    </div>
  );
};

export default ExploreMenu;
