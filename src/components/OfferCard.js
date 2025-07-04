import React from "react";
export default function OfferCard( { offer } ){
    return (
        <div className="offer-card">
            <img src={ offer?.image_url } alt={ offer.name } width="100" className="image-placeholder" title={ offer.name } />
            <h3 className="offer-card-title">{ offer.name }</h3>
            <p>Cashback: ${ offer.cash_back?.toFixed( 2 ) }</p>
        </div>
    )
}