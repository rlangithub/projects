comperesionPage.classList.add('TopBorder');
const domComparisons = {
    phon: document.getElementById('phon'),
};

const ulProduct = document.createElement('ul');
ulProduct.className = 'list-group list-group-flush scroll height50';
domComparisons.phon.appendChild(ulProduct);

const drowLiProduct = (productName) => {
    const liProduct = document.createElement('li');
    liProduct.innerHTML = productName;
    liProduct.className = 'list-group-item';
    ulProduct.appendChild(liProduct);
};

const ulArrProduct = JSON.parse(localStorage.getItem('list'));
ulArrProduct.forEach(productName => {
    drowLiProduct(productName);
});

const drowSelectStorComper = (select) => {
    const allStors = document.createElement('option');
    allStors.innerHTML = "בחירת רשת";
    allStors.value = allStors.innerHTML;
    const osherAd = document.createElement('option');
    osherAd.innerHTML = "אושר עד";
    osherAd.value = osherAd.innerHTML;
    const ramiLevi = document.createElement('option');
    ramiLevi.innerHTML = "רמי לוי";
    ramiLevi.value = ramiLevi.innerHTML;
    const shupersal = document.createElement('option');
    shupersal.innerHTML = "שופרסל";
    shupersal.value = shupersal.innerHTML;
    const shareyRevacha = document.createElement('option');
    shareyRevacha.innerHTML = "שערי רווחה";
    shareyRevacha.value = shareyRevacha.innerHTML;

    select.appendChild(allStors);
    select.appendChild(osherAd);
    select.appendChild(ramiLevi);
    select.appendChild(shupersal);
    select.appendChild(shareyRevacha);

};

const divCompare = document.createElement('div');
divCompare.className = 'flex space-around alignBaseline';
const firstStor = document.createElement('select');
drowSelectStorComper(firstStor);
const secondStor = document.createElement('select');
drowSelectStorComper(secondStor);
const btnComparetion = document.createElement('button');
btnComparetion.className = 'btn blue width150px height30px marginTop30px';
btnComparetion.innerHTML = "השוואה";

divCompare.appendChild(firstStor);
divCompare.appendChild(secondStor);
divCompare.appendChild(btnComparetion);
domComparisons.phon.appendChild(divCompare);

const continerCheapestStor = document.createElement('div');
continerCheapestStor.className = "flex space-around font65px";
const CheapestStor = document.createElement('div');
const howMeniCheapeStor = document.createElement('div');
const accept = document.createElement('div');
domComparisons.phon.appendChild(continerCheapestStor);

continerCheapestStor.appendChild(CheapestStor);
continerCheapestStor.appendChild(howMeniCheapeStor);
domComparisons.phon.appendChild(accept);

btnComparetion.onclick = () => {
    CheapestStor.innerHTML = "";
    howMeniCheapeStor.innerHTML = "";
    let sumFirstStor = 0;
    let sumSecondStor = 0;
    if (localStorage.getItem(firstStor.value) || localStorage.getItem(secondStor.value)) {
        if (!(localStorage.getItem(firstStor.value))) {
            alert(' רשת '+ firstStor.value +' עיין לא עידכנה את המחירים');
        }
        else {
            const storPrice1 = JSON.parse(localStorage.getItem(firstStor.value));
            ulArrProduct.forEach((np) => {
                sumFirstStor += JSON.parse(storPrice1.find((p) => {
                    return p.productName === np;
                }).cost);
            });
        }
        if (!(localStorage.getItem(secondStor.value))) {
            alert(' רשת ' + secondStor.value + ' לא עידכנה את המחירים');
        }
        else {
            const storPrice2 = JSON.parse(localStorage.getItem(secondStor.value));
            ulArrProduct.forEach((np) => {
                sumSecondStor += JSON.parse(storPrice2.find((p) => {
                    return p.productName === np
                }).cost);
            });
        }
        if ((sumFirstStor < sumSecondStor || sumSecondStor == 0) && sumFirstStor != 0) {
            CheapestStor.innerHTML = firstStor.value;
            howMeniCheapeStor.innerHTML = sumFirstStor;
        }
        else {
            CheapestStor.innerHTML = secondStor.value;
            howMeniCheapeStor.innerHTML = sumSecondStor;
        }
        howMeniCheapeStor.innerHTML += "שח";
        accept.innerHTML = "";
        const isAccept = document.createElement('input');
        const lbIsAccept = document.createElement('label');
        lbIsAccept.innerHTML = "האם קיבלת את הצעתנו?"
        isAccept.type = "checkbox";
        accept.appendChild(isAccept);
        accept.appendChild(lbIsAccept);

        if (!(localStorage.getItem("cnt"))) {
            localStorage.setItem("cnt", 0);
        }
        isAccept.onclick = () => {
            const cnt = JSON.parse(localStorage.getItem("cnt"));
            localStorage.setItem("cnt", JSON.stringify(cnt + 1));
            if (!(localStorage.getItem("cnt" + CheapestStor.innerHTML))) {
                localStorage.setItem("cnt" + CheapestStor.innerHTML, "1");
            }
            else {
                localStorage.setItem("cnt" + CheapestStor.innerHTML, JSON.stringify(JSON.parse(localStorage.getItem("cnt" + CheapestStor.innerHTML)) + 1));
            }
        };
    }
    else {
        alert("הרשתות לא עידכנו את המחירים");
    }
};


