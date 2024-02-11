const domTable = {
  tableSearch: document.getElementById('tableSearch'),
  tableButton: document.getElementById('tableButton'),
  products: document.getElementById('products'),
}
if (navTop)
  tablePage.classList.add('TopBorder');

function getTable() {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: "./jsons/products.json",
      success: function (response) {
        response.forEach((p) => {
          drawProduct(p);
        });
        resolve(response);
        drowSearch(response);
      },
      error: function (error) {
        reject(error);
      }
    });
  });
};

const drawProduct = (product) => {

  const tr2 = document.createElement('tr');
  const t1 = document.createElement('td');
  const t2 = document.createElement('td');
  const t3 = document.createElement('td');
  const t4 = document.createElement('td');
  t1.classList.add('width50px');
  if (navTop) {
    const checkInput = document.createElement('input');
    checkInput.type = "checkbox";
    checkInput.id = product.nameProduct;
    checkInput.className = 'inputValu';
    t1.appendChild(checkInput);
  }
  else {
    const inputPrice = document.createElement('input');
    inputPrice.id = product.nameProduct;
    inputPrice.type = "number";
    inputPrice.className = 'price';
    t1.appendChild(inputPrice);
  }

  t2.innerHTML = product.nameProduct;
  t2.classList.add('width150px');
  t3.innerHTML = product.code;
  t3.classList.add('width150px');
  t4.innerHTML = product.maxPrice;
  t4.classList.add('width150px');
  tr2.classList.add('beckgruondWeakRed');
  tr2.appendChild(t1);
  tr2.appendChild(t2);
  tr2.appendChild(t3);
  tr2.appendChild(t4);
  tr2.id = product.nameProduct;
  domTable.products.appendChild(tr2);
};

const drowSearch = (arrProductTable) =>{
  const divSearch = document.createElement('div');
  const search = document.createElement('input');
  search.type = 'text';
  search.className = 'width80 height30px marginLeft8';
  const spanIcon = document.createElement('span');
  const searchIcon = document.createElement('i');
  searchIcon.className = "fas fa-search icon";
  spanIcon.appendChild(searchIcon);
  divSearch.appendChild(search);
  divSearch.appendChild(spanIcon);
  domTable.tableSearch.appendChild(divSearch);
  const divContainerBtnReturn = document.createElement('div');
  domTable.tableButton.appendChild(divContainerBtnReturn);
  spanIcon.onclick = () =>{
        searchProduct(search.value, arrProductTable, divContainerBtnReturn);
    };
};

let flag = false;
const searchProduct = (value,arrProductTable, divContainerBtnReturn) =>{
  arrProductTable.forEach(p =>{
    if(p.nameProduct.includes(value))
      flag = true;
  });
  if(flag){
    arrProductTable.forEach(p =>{
    const lineTable = document.getElementById(p.nameProduct);
    if(!(lineTable.id.includes(value))){
      lineTable.classList.add('displayNone');
    }
   });
   
   divContainerBtnReturn.innerHTML = '';
   const btnReturn = document.createElement('button');
   btnReturn.innerHTML = 'חזרה';
   btnReturn.className = 'btn blue width300px height30px';
   divContainerBtnReturn.appendChild(btnReturn);
   btnReturn.onclick = () => {
    arrProductTable.forEach(p =>{
      if(!(p.nameProduct.includes(value))){
        divContainerBtnReturn.innerHTML = '';
        const lineTable = document.getElementById(p.nameProduct);
        lineTable.classList.remove('displayNone');
      }
     });  
   };
  }
   else
    alert('לא נמצאו תוצאות חיפוש עבור'+ value);
};

if(navTop)
{
  const forComparisons = document.createElement('button');
  forComparisons.className = 'btn blue width300px height30px';
  forComparisons.innerHTML = "להשוואות";
  domTable.tableButton.appendChild(forComparisons);

  getTable().then(function (response) {
    const arrCheckbox = Array.from(document.querySelectorAll('.inputValu'));
    const checkboxArr = [];
    forComparisons.onclick = () => {
      arrCheckbox.forEach((inp) => {
        if(inp.checked)
          checkboxArr.push(inp.id);
      });
      localStorage.setItem('list', JSON.stringify(checkboxArr));
      location.href = "./comparisonsPage.html";
    };
  
  }).catch(function (err) {
    console.error(err);
  });
};











