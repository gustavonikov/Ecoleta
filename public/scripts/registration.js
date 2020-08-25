/* eslint-disable no-undef */
function populateUF() {
    const ufSelect = document.querySelector('select[name=uf]');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((res) => res.json())
        .then((states) => {
            /* for (state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
            } */
            states.forEach((state) => {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
            });
        });
}

populateUF();

function getCities(ev) {
    const citySelect = document.querySelector('[name=city]');
    const stateInput = document.querySelector('[name=state]');

    const ufValue = ev.target.value;
    const indexOfSelectedState = ev.target.selectedIndex;

    stateInput.value = ev.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = '<option value="">Selecione um município</option>';
    citySelect.disabled = true;

    fetch(url)
        .then((res) => res.json())
        .then((cities) => {
            /*  for (city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
            } */
            cities.forEach((city) => {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
            });

            citySelect.disabled = false;
        });
}

document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities);

const itemsToCollect = document.querySelectorAll('.items-grid li');
const collectedItems = document.querySelector('input[name=items]');
let selectedItems = [];

function handleSelectedItem(ev) {
    const itemLi = ev.target;

    itemLi.classList.toggle('selected');

    const itemId = itemLi.dataset.id;

    const alreadySelected = selectedItems.findIndex((item) => item === itemId);

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter((item) => {
            const itemIsDifferent = item !== itemId;
            return itemIsDifferent;
        });

        selectedItems = filteredItems;
    } else {
        if (selectedItems.index === 0) {
            selectedItems.push(itemId);
        }

        selectedItems.push(` ${itemId}`);
    }

    collectedItems.value = selectedItems;
}

itemsToCollect.forEach((item) => item.addEventListener('click', handleSelectedItem));
