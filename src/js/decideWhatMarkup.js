import getCountryList from '../templates/countryList.hbs';
import getCountryInfo from '../templates/countryInfo.hbs';
const Handlebars = require('handlebars');

Handlebars.registerHelper('unpackObject', function (obj) {
  const array = Object.values(obj);
  return array.join(', ');
});

const countryListContainer = document.querySelector('.country-list');
const countryInfoContainer = document.querySelector('.country-info');

const countryListRender = arr => {
  countryListContainer.innerHTML = '';
  countryInfoContainer.innerHTML = '';
  countryListContainer.insertAdjacentHTML('beforeend', getCountryList(arr));
};

countryInfoRender = arr => {
  countryInfoContainer.innerHTML = '';
  countryListContainer.innerHTML = '';
  countryInfoContainer.insertAdjacentHTML('beforeend', getCountryInfo(arr));
};

const decideWhatMarkup = arr => {
  if (arr.length !== 1) {
    return countryListRender(arr);
  }
  return countryInfoRender(...arr);
};

export { decideWhatMarkup, countryListContainer, countryInfoContainer };
