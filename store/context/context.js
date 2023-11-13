import { createContext, useState } from "react";

// here i should create a uppercase letter of function to use it after that as a component
export const FavoriteContext=createContext({
    ids:[],
    addFavoriteIds:(id)=>{},
    removeFavoriteIds:(id)=>{},
});


function FavoriteContextProvider({children}){
    const [favoriteIds,setFavoriteIds]=useState();

    function addFavorite(id){
        setFavoriteIds((currentId)=> [...currentId,id])
    }
    function removeFavorite(id){
        setFavoriteIds((currentId)=> currentId.filter((favId)=> favId !== id) )
    }

    const value={
        ids:favoriteIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }
    
    return <FavoriteContext value={value}>
        {children}
    </FavoriteContext>
}

export default FavoriteContextProvider;

