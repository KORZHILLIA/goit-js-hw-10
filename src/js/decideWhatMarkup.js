const countryListContainer = document.querySelector('.country-list');
const countryInfoContainer = document.querySelector('.country-info');

const countryListRender = arr => {
  countryListContainer.innerHTML = '';
  countryInfoContainer.innerHTML = '';
  const markup = arr
    .map(
      ({ flags: { svg }, name: { official: officialName } }) =>
        `<li class="country-list__item">
      <img class="country__flag" src=${svg} alt=${officialName} width="40" height="30">
      <span class="country__name">${officialName}</span>
          </li>`
    )
    .join('');
  countryListContainer.insertAdjacentHTML('beforeend', markup);
};

countryInfoRender = ({
  name: { common },
  capital,
  flags: { svg },
  population,
  languages,
}) => {
  countryInfoContainer.innerHTML = '';
  countryListContainer.innerHTML = '';
  const languagesResult = Object.values(languages).join(', ');
  const markup = `
  <div class="country-info__top">
    <img class="country-info__img" src="${svg}" width="60" height="40">
    <span class="country-info__name">${common}</span>
    </div>
    <ul class="country-info__list">
    <li class="list__item"><b>Capital</b>: ${capital}</li>
    <li class="list__item"><b>Population:</b> ${population}</li>
    <li class="list__item"><b>Languages:</b> ${languagesResult}</li>
    </ul>
    `;
  countryInfoContainer.insertAdjacentHTML('beforeend', markup);
};
const decideWhatMarkup = arr => {
  if (arr.length !== 1) {
    console.log(arr);
    return countryListRender(arr);
  }
  return countryInfoRender(...arr);
};

export { decideWhatMarkup, countryListContainer, countryInfoContainer };
