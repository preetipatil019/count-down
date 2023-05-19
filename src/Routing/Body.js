import { useEffect, useState } from "react";

const Body = () => {
    const [restMenu, setRestMenu] = useState({});
    useEffect(() => {
        getRestaurant();  
    }, [])
    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=44238&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data)
        setRestMenu(json.data.cards[0].card.card.info)
    }
    return (
        <div>
      <h2>{restMenu.name}</h2>
        </div>
    )
}

export default Body;