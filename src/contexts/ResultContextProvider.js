import React, {createContext, useContext, useState} from 'react';

const ResultCotext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultCotextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("Ronaldinho");

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285'
            }
        });

        const data = await response.json();
        if(type.includes('/news')){
            setResults(data.entries);
        } else if(type.includes('/images')){
            setResults(data.image_results);
        } else{
            setResults(data.results);
        }
        setIsLoading(false);
    }
    return(
        <ResultCotext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultCotext.Provider>
    )
}
export const useResultContext = () => useContext(ResultCotext);
