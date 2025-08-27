function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid green", padding: "2px" ,marginLeft:"5px"}}>
      <img className="cloth"
        //src="https://www.pngkey.com/png/full/72-723644_blank-black-t-shirt-png.png"
        src={props.img}
        height="200px"
        width="calc(20% - 20px)"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.discount}</h1>
        <h2 style={{marginBottom:"5px"}}>{props.price}</h2>
        <h2>SHOP NOW</h2>
      </div>
    </div>
  );
}
export default Card;