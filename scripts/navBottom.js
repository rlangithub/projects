// const navManeger=document.getElementById('navManeger');
const navBottom ={
    navBottomIcon: document.getElementById('navBottomIcon'),
    navBottom: document.getElementById('navBottom'),
};

const getBottomIconHTML = () => {
    return`
    <div id="iconUp" class="margimBottom-9vh marginRight70px flex directionColumn">
        <div class="border-radius width50px text-danger flex align-center justify-content-center alert">
            <a href="#navManeger">
                <i class="fas fa-angle-double-up text-danger font-size"></i>
            </a>
        </div>
        <div class="white" >למעלה</div>
    </div>`
    
};
const getNavBottomIconHTML = () =>{
    navBottom.navBottomIcon.innerHTML += getBottomIconHTML();
};
getNavBottomIconHTML();

const getNavBottomHTML = () => {
    return `<div id="navBottomBig" class="container-fluid">
    <div class="width100">
        <h2 class="width60 text-center">הרשתות השותפות למאבק</h2>
        <div id="containerLi" class="flex space-around">
            <div>
              <div class="width100 flex justifyContentSpaceBetween">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar1">
                     <span class="fas fa-map-marker-alt icon white"></span>     
                    </button>
                <h4>שופרסל</h4>
            </div>
            <div id="collapsibleNavbar1" class="collapse navbar-collapse flex">
                <ul id="shupersal">
                    <li nav-item>אגרון 1, ירושלים</li>
                    <li nav-item>מרכז מסחרי קרית יובל, ירושלים</li>
                    <li nav-item>העליה 1, בית שמש</li>
                    <li nav-item>מעלה אדומים</li>
                    <li nav-item><img src="./pictures/Shupersal.png" class="width150px imgBottom"></li>
                </ul>
            </div>
            </div>
            <div>
            <div class="width100 flex justifyContentSpaceBetween">
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar2">
                  <span class="fas fa-map-marker-alt icon white"></span>
                </button>
                <h4>רמי לוי</h4>
            </div>
            <div id="collapsibleNavbar2" class="collapse navbar-collapse flex">
                <ul id="ramiLevi">
                    <li nav-item>יד חרוצים 18, ירושלים</li>
                    <li nav-item>קניון עטרות עטרות, ירושלים</li>
                    <li nav-item>מבשרת ציון</li>
                    <li nav-item><img src="./pictures/RAMILEVI.png" class="width150px imgBottom"></li>
                </ul>
            </div>
            </div>
            <div>
            <div class="width100 flex justifyContentSpaceBetween">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar3">
                     <span class="fas fa-map-marker-alt icon white"></span>
                </button>
                <h4>אושר עד</h4>
            </div>
            <div id="collapsibleNavbar3" class="collapse navbar-collapse flex">
                <ul id="osherAd">
                    <li nav-item>שמגר 16, קניון רב שפע ירושלים</li>
                    <li nav-item>בית הדפוס 29, ירושלים, גבעת שאול</li>
                    <li nav-item>פייר קניג 26, קניון הדר ירושלים, תלפיות</li>
                    <li nav-item>הגליל 6, בית שמש, מגדלי נעימי</li>
                    <li nav-item><img src="./pictures/OsherAd.png" class="width150px imgBottom"></li>
                </ul>
            </div>
            </div>
            <div>
            <div class="width100 flex justifyContentSpaceBetween">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar4">
                     <span class="fas fa-map-marker-alt icon white"></span>
                </button>
                <h4>שערי רווחה</h4>
            </div>
            <div id="collapsibleNavbar4" class="collapse navbar-collapse flex">
                <ul id="shareyRevacha">
                    <li nav-item>בלואיס ברנדייס 3, ירושלים</li>
                    <li nav-item>ירמיהו 25,ירושלים</li>
                    <li nav-item><img src="./pictures/ShareyRevacha.jpg" class="width150px imgBottom"></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    <ul id="smallContainerBottom" class="flex justify-content justify-content-end directionColumn">
        <li id="about">אודות</li>
        <li class="flex">
            <i class="fas fa-camera-retro icon white flex align-end"></i>
            <div>עקבו אחרינו</div>
        </li>
    </div>
</div>`
};
const drowNavBottom = () => {
    navBottom.navBottom.innerHTML += getNavBottomHTML();
};
drowNavBottom();


const domNavBottom = {
    about: document.getElementById('about'),
    iconUp: document.getElementById('iconUp'),
};

domNavBottom.about.onclick = () => {
    location.href = "./aboutPage.html"
}

iconUp.onclick = () => {
    iconUp.classList.add('up');
    location.href = "#navManeger";
    
}