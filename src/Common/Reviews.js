import React, { useEffect, useState } from "react";
import './Reviews.css';
import RJSON from '../JSON/Reviews.json';

// Function to import all images
function importAll(r) {
    let images = {};
    r.keys().forEach((element) => { images[element.replace('./', '')] = r(element); });
    return images;
}

// Import images from the Media folder
const images = importAll(require.context('../Media', false, /\.(png|jpe?g|svg)$/));

const Reviews = () => {
    const [elements, setElements] = useState([]);
    const [sequencedItems, setSequencedItems] = useState([]);

    useEffect(() => {
        console.log("Fetching Data");
        const elementArray = Object.values(RJSON);
        console.log("Array Items:", elementArray);

        const elementsWithImages = elementArray.map(element => ({
            ...element,
            image: images[element.image] || '' // Ensure proper use of template literals
        }));
        console.log("Items with Images:", elementsWithImages);

        setElements(elementsWithImages);
        setSequencedItems(elementsWithImages);
    }, []);

    return (
        <div className="Reviews">
            {elements.length > 0 ? (
                elements.map((sub, index) => (
                    <div className="review-items" >
                        <div className="review-data">
                            <img src={sub.image} alt={sub.name} className="review-img" />
                            <span className="review-name">{sub.name}</span>
                            <span className="review-desc">"{sub.description}"</span>
                        </div>
                    </div>
                ))
            ) : (
                <p>No reviews found.</p>
            )}
        </div>
    )
}

export default Reviews;
