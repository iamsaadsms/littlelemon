import React, { useState, useEffect } from "react";
import './Card.css';
import CJSON from '../JSON/Card.json'

// Function to import all images
function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

// Import images from the Media folder
const images = importAll(require.context('../Media', false, /\.(png|jpe?g|svg)$/));

const Card = () => {
    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
        console.log("Fetching data...");
        const itemsArray = Object.values(CJSON);
        console.log("Items Array:", itemsArray);

        const itemsWithImages = itemsArray.map(item => ({
            ...item,
            img: images[`${item.img}`] || '' // Adding a default empty string if image not found
        }));
        console.log("Items with Images:", itemsWithImages);

        setItems(itemsWithImages);
        setSortedItems(itemsWithImages);
    }, []);

    return (
        <div className="Card">
            {items.length > 0 ? (
                items.map((sub, index) => (
                    <div className="card-items" key={index}>
                        <div className="card-prod">
                            <img src={sub.img} alt={sub.name} className="card-img" />
                            <div className="card-details">
                                <div className="card-info">
                                    <span className="card-name">{sub.name}</span>
                                    <span className="card-price">{sub.price}</span>
                                </div>
                                <p className="card-desc">{sub.desc}</p>
                                <div className="link-div">
                                    <a className="card-link" href="#">Order a Delivery</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No items found.</p>
            )}
        </div>
    );
}

export default Card;
