import React from "react";
import { useData } from '../database/firebase.js';
import '../Styling/adoptcat.css'

const AdoptCat = () => {
    return (
    	<div class="adopt_cat">
            <img class="adopt_cat_img" src={useData('/cats/0/photo')} alt="adopt a cat!" />
            <hr />
            {/* Check mark */}
            <button className="button">
                <img className="button_img" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Eo_circle_light-green_checkmark.svg" alt="Check mark" />
            </button>
            {/* Question mark */}
            <button className="button">
                <img className="button_img" src="https://as1.ftcdn.net/jpg/01/09/84/42/220_F_109844212_NnLGUrn3RgMHQIuqSiLGlc9d419eK2dX.jpg" alt="Question mark" />
            </button>
            {/* X */}
            <button className="button">
            <img className="button_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/150px-Red_X.svg.png?20070510203255" alt="Big Red X" />
            </button>

        </div>
    )
}

export default AdoptCat; 