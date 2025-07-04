import React, { useState, useEffect } from "react";
import OfferCard from "./OfferCard";
import { fetchOffers } from "../services/api";

export default function OfferList () {
    const [offers, setOffers] = useState([]);
    const [ sort, setSort ] = useState( "" );
    
    useEffect( () => {
        const loadOffers = async () => {
            try {
                const data = await fetchOffers( sort );
                setOffers( data );
                console.log( "Offers fetched:", data );
            } catch ( error ) {
                console.error( "Error fetching offers:", error );
            }
        };
        loadOffers();
    }, [ sort ] );
    
    return (
        <div>
            <div><button onClick={ () => setSort( "name" ) }>Sort by Name</button><button onClick={ () => setSort( "cashback" ) }>Sort by Cashback</button></div>
            <div className="offer-list">
                {offers.map( ( offer ) => (
                    <OfferCard key={ offer.offer_id } offer={ offer } />
                ) )}
            </div>
        </div>
    )
}