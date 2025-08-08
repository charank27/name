import React from "react";
import ReactDOM from "react-dom/client";
//header
//body
//footer
function Card(props) {
  return (
    <div style={{ border: "2px solid green", padding: "2px" }}>
      <img
        //src="https://www.pngkey.com/png/full/72-723644_blank-black-t-shirt-png.png"
        src={props.img}
        height="200px"
        width="calc(20% - 20px)"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.discount}</h1>
        <h2>SHOP NOW</h2>
      </div>
    </div>
  );
}
const cardData = [
  {
    cloth: "Shirt",
    discount: "60% OFF",
    img: "http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8081.png",
  },
  {
    cloth: "T-Shirt",
    discount: "30% OFF",
    img: "https://www.pngkey.com/png/full/72-723644_blank-black-t-shirt-png.png",
  },
  {
    cloth: "Jeans",
    discount: "50% OFF",
    img: "https://cdn-images.farfetch-contents.com/18/95/43/42/18954342_42177909_1000.jpg",
  },
  {
    cloth: "Jacket",
    discount: "25% OFF",
    img: "https://m.media-amazon.com/images/I/71Wbn0u1sQL._AC_SL1500_.jpg",
  },
  {
    cloth: "Sweater",
    discount: "60% OFF",
    img: "https://www.bfgcdn.com/1500_1500_90/005-4271-0211/patagonia-recycled-wool-cable-knit-crewneck-sweater-jumper.jpg",
  },
  {
    cloth: "Kurta",
    discount: "35% OFF",
    img: "https://i.pinimg.com/originals/7c/53/f2/7c53f2d86f3a0bdc24a56c46a13725e6.png",
  },
  {
    cloth: "Hoodie",
    discount: "45% OFF",
    img: "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4026ef0cc7c4844b9d335306aa30fe5c/7652964c-7af0-4490-a581-6c1ac72f9b77.jpg",
  },
  {
    cloth: "Shorts",
    discount: "20% OFF",
    img: "https://cdna.lystit.com/photos/farfetch/11567600-BLUE-f8f4b122-.jpeg",
  },
  {
    cloth: "Track Pants",
    discount: "55% OFF",
    img: "https://www.flatspot.com/cdn/shop/products/nike-sb-rugged-track-pants-black-1_1300x1500_crop_center.progressive.jpg?v=1674750948",
  },
  {
    cloth: "Blazer",
    discount: "40% OFF",
    img: "https://photos.edwardsgarment.com/HighRes/3500_010.jpg",
  },
];

function App() {
  return (
    //header
    //body
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {
      cardData.map((value, index) => <Card key={index} cloth={value.cloth} discount={value.discount} img={value.img} />)
      }
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
