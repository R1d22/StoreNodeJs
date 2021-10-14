const itemNameList = document.querySelector('#itemNameList');
const itemColorList = document.querySelector('#itemColorList');
const itemSizeList = document.querySelector('#itemSizeList');
const itemMaterialList = document.querySelector('#itemMaterialList');
const itemCategoryNameList = document.querySelector('#itemCategoryNameList');
const itemNameInp = document.querySelector('.itemName');
const itemColorInp = document.querySelector('.itemColor');
const itemSizeInp = document.querySelector('.itemSize');
const itemMaterialInp = document.querySelector('.itemMaterial');
const itemCategoryNameInp = document.querySelector('#itemCategoryNameId');


async function getItems(items) {

    
    console.log(items);

    items.forEach((item) => {
        const { name, price, caracteristic, category, group } = item;
        const { material } = caracteristic;
        const { name: categoryName } = category;
        const { color, size } = group;

        

        itemCategoryNameList.innerHTML += `<option value=${categoryName}></option>`
        itemNameList.innerHTML += `<option value=${name}></option>`
        itemColorList.innerHTML += `<option value=${color}></option>`
        itemSizeList.innerHTML += `<option value=${size}></option>`
        itemMaterialList.innerHTML += `<option value=${material}></option>`
        
    });
}
async function newPage() {
    const { data } = await axios.get('/items');
    await getItems(data);
};
newPage();




itemCategoryNameInp.addEventListener('change', async (ev) => {
    const value = itemCategoryNameInp.value
    const { data } = await axios.get('/items/filter', {params: {obj: value}});
    console.log(data)
        itemCategoryNameList.innerHTML = ''
        itemNameList.innerHTML = ''
        itemColorList.innerHTML = ''
        itemSizeList.innerHTML = ''
        itemMaterialList.innerHTML = ''
    getItems(data);

})