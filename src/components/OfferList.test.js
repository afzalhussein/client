import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import OfferList from "./OfferList";
import * as api from "../services/api";

// Mock OfferCard to avoid rendering its internals
jest.mock("./OfferCard", () => ({ offer }) => (
  <div data-testid="offer-card">{offer.name}</div>
));

// Mock fetchOffers
const mockOffers = [
  { offer_id: "1", name: "Apple", cash_back: 2.0 },
  { offer_id: "2", name: "Banana", cash_back: 1.0 },
];

describe( "OfferList", () => {
    beforeEach( () => {
        jest.spyOn( api, "fetchOffers" ).mockResolvedValue( mockOffers );
    } );

    afterEach( () => {
        jest.clearAllMocks();
    } );

    it( "renders offers on load", async () => {
        render( <OfferList /> );
        expect( screen.getByText( /Sort by Name/i ) ).toBeInTheDocument();
        await waitFor( () => {
            expect( screen.getAllByTestId( "offer-card" ).length ).toBe( 2 );
        } );
    } );

    it( "calls fetchOffers with correct sort param when sorting by name", async () => {
        render( <OfferList /> );
        fireEvent.click( screen.getByText( /Sort by Name/i ) );
        await waitFor( () => {
            expect( api.fetchOffers ).toHaveBeenLastCalledWith( "name" );
        } );
    } );

    it( "calls fetchOffers with correct sort param when sorting by cashback", async () => {
        render( <OfferList /> );
        fireEvent.click( screen.getByText( /Sort by Cashback/i ) );
        await waitFor( () => {
            expect( api.fetchOffers ).toHaveBeenLastCalledWith( "cashback" );
        } );
    } );

    it( "shows error in console if fetch fails", async () => {
        jest.spyOn( console, "error" ).mockImplementation( () => { } );
        api.fetchOffers.mockRejectedValueOnce( new Error( "Network error" ) );
        render( <OfferList /> );
        await waitFor( () => {
            expect( console.error ).toHaveBeenCalledWith(
                "Error fetching offers:",
                expect.any( Error )
            );
        } );
        console.error.mockRestore();
    } );
} );