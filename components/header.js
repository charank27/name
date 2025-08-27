function Header({sortByPrice}){
    
  return (
    <div className="header">
      <img className="image" src="https://aartisto.com/wp-content/uploads/2020/11/myntra-1200x900.png" height="80px" width="80px"/>
      <div className="sections">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home</button>
        <button className="but">Beauty</button>
        <button className="but">Genz</button>
        <button className="but" id="sort" onClick={sortByPrice}>Sort by price</button>
      </div>
      <input className="searchbar" type="text" placeholder="Search for products,brands and more"></input>
      <div className="profile">
        <button className="but1">Profile</button>
        <button className="but1">Wishlist</button>
        <button className="but1">Bag</button>
      </div>
    </div>

  );
}
export default Header;