import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import arr from "./components/data.js";
import Card from "./components/card.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
//header
//body
//footer


function App() {
    const [cardData,setData] = useState(arr);
    function sortByPrice(){
    cardData.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[₹,]/g, ""));
      const priceB = parseInt(b.price.replace(/[₹,]/g, ""));
      return priceA - priceB;
    });
    setData([...cardData]);
    };

  return (
    <>
    <div>
      {Header({sortByPrice})}
    </div>
    
    <div className="middle" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {
      cardData.map((value, index) => <Card key={index} cloth={value.cloth} discount={value.discount} img={value.img}  price={value.price}  />)
      }
    </div>

    <div>
      
    </div>
    <div>
      {Footer()}
    </div>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
