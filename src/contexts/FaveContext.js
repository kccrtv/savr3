// import { add } from 'lodash';
import React, { useContext, useState } from 'react';

const FaveContext = React.createContext();

export function useFave() {
	return useContext(FaveContext);
}

export function FaveContextProvider({ children }) {
	const [faves, setFaves] = useState([]);

	function addFave(recipe) {
		return setFaves([...faves, recipe]);
	}

	function removeFave(recipe) {
		const newFaves = faves.filter(function (x) {
			if (x.idMeal !== recipe.idMeal) {
				return x.idMeal;
			}
		});
		return setFaves(newFaves);
	}

	const value = {
		faves,
		addToFaves: addFave,
		removeFromFaves: removeFave,
	};

	return <FaveContext.Provider value={value}>{children}</FaveContext.Provider>;
}

export default FaveContext;
