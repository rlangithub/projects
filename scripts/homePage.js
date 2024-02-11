homePage.classList.add('TopBorder');
const dom = {
    head: document.getElementById('head'),
    title: document.getElementById('titleHead'),
    productChepset: document.getElementById('productChepset'),
    storChepset: document.getElementById('storChepset'),
    phon: document.getElementById('phon'),

    containerClock: document.getElementById('clock'),
    digrma: document.getElementById('digrma'),
};


const titleArry = ["נלחמים ביוקר המחיה", "ביחד נעשה את זה", "נאבקים באינפלציה", "Stop לעלית המחירים"];

const animationTaitle = (i) => {
    if (i === titleArry.length) {
        i = 0;
    }
    setTimeout(() => {
        dom.title.innerHTML = titleArry[i];
        animationTaitle(i + 1);
    }, 6000)
};

animationTaitle(0);

let i = 0;
const drowBtnCarousel = () => {

    if (i === 0)
        return `<button type="button" data-bs-target="#productCarusel" data-bs-slide-to="${i++}" class="active "></button>`
    return `<button type="button" data-bs-target="#productCarusel" data-bs-slide-to="${i++}" ></button>`
};

const drowInerCarousel = (p) => {
    return `<div class="carousel-item">
    <img src="${p.product.img}" alt="${p.maxStor}" class="d-block w-100">
    <div class="carousel-caption">
      <h3>${p.maxStor}</h3>
      <p>${p.product.nameProduct}</p>
    </div>
  </div>`
};

const drowIconSide = () => {
    return `<button class="carousel-control-prev" type="button" data-bs-target="#productCarusel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#productCarusel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>`

};

const contaunerCarusel = () => {
    return `<div id="productCarusel" class="carousel carousel-dark slide" data-bs-ride="carousel"></div>`
};

const drowCarouselProduct = () => {
    const arr = JSON.parse(localStorage.getItem('chapsetProductes'));
    productChepset.innerHTML += contaunerCarusel();
    const productCarusel = document.getElementById('productCarusel');
    const whichPictucher = document.createElement('div');
    whichPictucher.className = 'carousel-indicators';
    productCarusel.appendChild(whichPictucher);
    const carouselIner = document.createElement('div');
    carouselIner.className = 'carousel-iner';
    productCarusel.appendChild(carouselIner);
    arr.forEach((p) => {
        whichPictucher.innerHTML += drowBtnCarousel();
        carouselIner.innerHTML += drowInerCarousel(p);
        const inerCarousel = document.querySelector('.carousel-item');
        if (i === 1)
            inerCarousel.classList.add('active');
    });
    productCarusel.innerHTML += drowIconSide();
};

const chapsetProductes = (arrStors) => {
    $.ajax({
        url: "./jsons/products.json",
        success: (result) => {
            const maxArr = [];
            result.forEach(p => {
                let max = 0;
                let maxStor = "";
                arrStors.forEach((stor) => {
                    const storProducts = JSON.parse(localStorage.getItem(stor.name));
                    if (storProducts) {
                        const priceP = p.maxPrice - storProducts.find((sp) => {
                            return p.nameProduct === sp.productName;
                        }).cost;
                        if (max < priceP) {
                            max = priceP;
                            maxStor = stor.name;
                        }
                    }
                });
                addMaxArr(maxArr, p, max, maxStor);
            });
            maxArr.sort((a, b) => a.max - b.max);
            localStorage.setItem('chapsetProductes', JSON.stringify(maxArr.slice(maxArr.length - 8, maxArr.length - 1)));
            drowCarouselProduct();
        },
        error: (err) => {
            console.error(err);
        }
    });
};

const addMaxArr = (maxArr, p, max, maxStor) => {
    const maxPrudact = {
        product: p,
        max: max,
        maxStor: maxStor,
    };
    maxArr.push(maxPrudact);
};

drowCheapestStor = (stor) => {
    const titleCheapestStor = document.createElement('div');
    titleCheapestStor.innerHTML = "";
    titleCheapestStor.className = 'title sideBorder';
    titleCheapestStor.innerHTML = 'הרשת הזולה ביותר';
    const nameStor = document.createElement('div');
    nameStor.innerHTML = "";
    nameStor.className = "font100";
    nameStor.innerHTML = stor;
    dom.storChepset.appendChild(titleCheapestStor);
    dom.storChepset.appendChild(nameStor);
};

const btnConpare = document.createElement('button');
btnConpare.className = "btn blue width150px height30px";
btnConpare.innerHTML = "לטבלת המוצרים";
dom.phon.appendChild(btnConpare);
btnConpare.onclick = () => {
    location.href = "./tablePage.html";
};

const clock = document.createElement('span');
const days = document.createElement('span');
days.className = 'textBlue';
const hours = document.createElement('span');
hours.className = 'textRed';
const munites = document.createElement('span');
const seconds = document.createElement('span');
seconds.className = 'textWeekGrey';
clock.appendChild(days);
clock.appendChild(hours);
clock.appendChild(munites);
clock.appendChild(seconds);
dom.containerClock.appendChild(clock);

const howMuchTime = () => {
    const DatEnd = new Date('2023,' + new Date().getMonth() + ',30');
    days.innerHTML = (DatEnd.getDate() - new Date().getDate()) + ":";
    hours.innerHTML = (24 - new Date().getHours()) + ":";
    munites.innerHTML = (60 - new Date().getMinutes()) + ":";
    seconds.innerHTML = (60 - new Date().getSeconds());
};
setInterval(howMuchTime, 1000);

const drowDiagrma = (stor) => {
    const digrmaProgress = document.createElement('div');
    const digrmaStor = document.createElement('div');
    const storProgress = document.createElement('div');
    storProgress.innerHTML = stor;
    if (localStorage.getItem("cnt" + stor)) {
        storProgress.innerHTML += Math.round(JSON.stringify((JSON.parse(localStorage.getItem("cnt" + stor)) / JSON.parse(localStorage.getItem("cnt"))) * 100))+ "%";
    }
    else {
        storProgress.innerHTML += '0%';
    }
    storProgress.className = "font20px";
    digrmaProgress.className = "progress";
    digrmaStor.className = "progress-bar progress-bar-striped progress-bar-animated";
    digrmaStor.style = "width:" + JSON.stringify((JSON.parse(localStorage.getItem("cnt" + stor)) / JSON.parse(localStorage.getItem("cnt"))) * 100) + "%;";
    dom.digrma.appendChild(digrmaProgress);
    digrmaProgress.appendChild(digrmaStor);
    dom.digrma.appendChild(storProgress);
};

let CheapestPrice = Number.MAX_VALUE;
let CheapestStor = "";
$.ajax({
    url: "./jsons/Manajers.json",
    success: (result) => {
        chapsetProductes(result);
        result.forEach(stor => {
            if (localStorage.getItem(stor.name)) {
                let sum = 0;
                const price = JSON.parse(localStorage.getItem(stor.name));
                price.forEach(p => {
                    sum += JSON.parse(p.cost);
                });
                if (sum < CheapestPrice) {
                    CheapestPrice = sum;
                    CheapestStor = stor.name;
                }
                drowCheapestStor(CheapestStor);
            }
            drowDiagrma(stor.name);
        });
    },
    error: (err) => {
        console.error(err);
    }
}); 