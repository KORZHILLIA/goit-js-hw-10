import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../css/styles.css';
import { fetchCountries } from './fetchCountries';
import {
  decideWhatMarkup,
  countryListContainer,
  countryInfoContainer,
} from './decideWhatMarkup';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');

const searchHandler = event => {
  const query = event.target.value.trim();
  if (query === '') {
    countryListContainer.innerHTML = '';
    countryInfoContainer.innerHTML = '';
    return;
  }
  return fetchCountries(query)
    .then(res => {
      if (res.length > 10) {
        countryListContainer.innerHTML = '';
        countryInfoContainer.innerHTML = '';
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      decideWhatMarkup(res);
    })
    .catch(error => {
      countryInfoContainer.innerHTML = '';
      countryListContainer.innerHTML = '';
      Notify.failure(error.message);
    });
};

input.addEventListener('input', debounce(searchHandler, DEBOUNCE_DELAY));
