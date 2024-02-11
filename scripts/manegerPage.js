const domManeger = {
    tableButton: document.getElementById('tableButton'),
};

navManeger.innerHTML = "";
const logoManeger = document.createElement('img')
const hello = document.createElement('span');
hello.innerHTML = 'שלום למנ"כל ';
hello.className = "font22px maginLeft1";
navManeger.appendChild(hello);
const JSONThisManeger = localStorage.getItem("thiseManeger");
logoManeger.src = JSON.parse(JSONThisManeger).logo;
logoManeger.classList.add('width150px');
logoManeger.classList.add('height30px');
navManeger.appendChild(logoManeger);
logoManeger.onclick = () => {
    location.href = location.href = "./homePage.html";
};

const less17 = () => {
    const arr = JSON.parse(localStorage.getItem('chapsetProductes'));
    arr.forEach(p => {
        if (localStorage.getItem(p.maxStor)) {
            const arrP = JSON.parse(localStorage.getItem(p.maxStor));
            const sameProduct = arrP.find((pm) => {
                return p.product.nameProduct === pm.productName;
            });
            const i = arrP.indexOf(sameProduct);
            arrP[i].cost = Math.round(arrP[i].cost * 0.83); 
            localStorage.setItem(p.maxStor, JSON.stringify(arrP))
        }
    });
}

updateButton = document.createElement('button');
updateButton.className = 'btn blue width300px height30px';
updateButton.innerHTML = "לעידכון";
domManeger.tableButton.appendChild(updateButton);
const d = new Date();
if (!(d.getDate() ===30)) {
    updateButton.disabled = true;
    less17();
}
else {
    updateButton.disabled = false;
};

getTable().then(function (response) {
    const arrInputPrice = Array.from(document.querySelectorAll('.price'));
    const priceArr = [];
    if (localStorage.getItem(JSON.parse(JSONThisManeger).name)) {
        const priceValue = JSON.parse(localStorage.getItem(JSON.parse(JSONThisManeger).name));
        priceValue.forEach((p) => {
            const inpValue = arrInputPrice.find(inp => p.productName === inp.id);
            inpValue.value = p.cost;
        });
    }

    let flag = 0;
    updateButton.onclick = () => {
        flag = 0;
        $.ajax({
            url: "./jsons/products.json",
            success: (result) => {
                result.forEach((p) => {
                    const inputPrice = arrInputPrice.find(inp => p.nameProduct === inp.id);
                    if (inputPrice.value > p.maxPrice || inputPrice.value <= 0) {
                        inputPrice.classList.add('Border');
                        inputPrice.value = "";
                        flag = 1;
                    }
                    else {
                        inputPrice.classList.remove('Border');
                    }
                });

                if (flag === 0) {
                    priceArr.splice(0, priceArr.length);
                    arrInputPrice.forEach(p => {
                        addInpNamePrice(priceArr, p)
                    });
                    localStorage.setItem(JSON.parse(JSONThisManeger).name, JSON.stringify(priceArr));
                    alert('העידכון עבר בהצלחה');
                }
                else{
                    alert('אחד מהשדות אינו תקין');
                }
            },
            error: (err) => {
                console.error(err);
            }
        });
    }

}).catch(function (err) {
    console.error(err);
});

const addInpNamePrice = (priceArr, Inp) => {
    const productLi = {
        cost: Inp.value,
        productName: Inp.id,
    };
    priceArr.push(productLi);
};


