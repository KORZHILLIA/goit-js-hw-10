const END_POINT = 'https://restcountries.com/v3.1/name/';
const SEARCH_PARAMS = '?fields=name,capital,population,flags,languages';

const fetchCountries = name => {
  return fetch(END_POINT + name.trim() + SEARCH_PARAMS).then(response => {
    if (!response.ok) {
      throw new Error('Oops, there is no country with that name');
    }
    return response.json();
  });
};

export { fetchCountries };
