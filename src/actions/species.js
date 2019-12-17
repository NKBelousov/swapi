export const FETCH_SPECIES = "@@species/FETCH";
export const fetchSpecies = () => ({
  type: FETCH_SPECIES,
});

export const FETCH_SPECIES_FAILURE = "@@species/FETCH_FAILURE";
export const fetchSpeciesFailure = () => ({
  type: FETCH_SPECIES_FAILURE,
});

export const FETCH_SPECIES_SUCCESS = "@@species/FETCH_SUCCESS";
export const fetchSpeciesSuccess = data => ({
  data,
  type: FETCH_SPECIES_SUCCESS,
});
