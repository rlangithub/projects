const navTop=document.getElementById('navTop');
const navManeger=document.getElementById('navManeger');

const getNavManegerHTML=()=>{
    return` 
    <form id="fromManeger" name="formManeger" class="flex space-around width500px">
    <div class="flex align-center width300px space-around">
       <i class="fas fa-user icon white"></i>
       <input id="nameManeger" class="form-control width150px" type="text" placeholder="שם משתמש">
    </div>
    <div class="flex align-center width300px space-around">
       <i class="fas fa-lock icon white"></i>
       <input id="passwordManeger" class="form-control width150px" type="password" placeholder="סיסמא">
    </div>
    <button class="btn width200px blue" type="button" id="enterManeger">
    <i class="fas fa-angle-right icon white"></i>
    התחבר כמנהל 
    </button>
    </form>
    <button id="enterManegerRespon" type="button" class="btn blue 200px displayNone" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="fas fa-angle-right icon white"></i>
    התחבר כמנהל 
    </button>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body flex space-around">
          <input id="nameManegerR" class="form-control width150px" type="text" placeholder="שם משתמש">
          <input id="passwordManegerR" class="form-control width150px" type="password" placeholder="סיסמא">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button id="enterManegeR" class="btn width200px blue" type="button" onClick="loginRspon()"> <i class="fas fa-angle-right icon white"></i>התחבר כמנהל  </button>
          </div>
        </div>
      </div>
    </div>
`
};

const drowNavManeger=()=>{
    navManeger.innerHTML += getNavManegerHTML();
};
drowNavManeger();
const login=(nameManeger,passwordManeger)=>{
      $.ajax({
        url: "./jsons/Manajers.json",
        success: ( result ) => {
            loginManager(result,nameManeger,passwordManeger);
        },
        error: (err) => {
            console.error(err);
        }
    });
}
const enterManeger = document.getElementById('enterManeger');

enterManeger.onclick =() =>{
  const nameManeger = document.getElementById('nameManeger');
  const passwordManeger = document.getElementById('passwordManeger');
 login(nameManeger,passwordManeger);
};
const loginRspon=()=>{
  const nameManegerR = document.getElementById('nameManegerR');
  const passwordManegerR = document.getElementById('passwordManegerR');
  login(nameManegerR,passwordManegerR)
}

const loginManager =(result,nameManeger,passwordManeger) =>{
    const thiseManeger = result.find(m => (m.id === nameManeger.value && m.password === passwordManeger.value ));
    console.log(thiseManeger);
    if(!(thiseManeger))
    {
        nameManeger.classList.add('Border');
        passwordManeger.classList.add('Border');
        const formManeger = document.formManeger;
        formManeger.reset();
    }
    else
    {
        nameManeger.classList.remove('Border');
        passwordManeger.classList.remove('Border');
         localStorage.setItem("thiseManeger",  JSON.stringify(thiseManeger));
        location.href="./manegerPage.html" 
    }   
};

const getNavTopHTML=()=>{
    return` <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul id="ulNavTop" class="navbar-nav flex space-around width500px alignBaseline">
        <li id="homePage" class="nav-item">עמוד הבית</li>
        <li id="tablePage" class="nav-item">טבלת מוצרים</li>
        <li id="comperesionPage"  class="nav-item">הזול ביותר</li> 
        <li id="aboutPage"  class="nav-item">אודות </li>     
      </ul>
    </div>
  </div>`
};
const drowNavTop=()=>{
   navTop.innerHTML += getNavTopHTML();
};
if(navTop)
{
    drowNavTop();
    const homePage=document.getElementById('homePage');
    const tablePage=document.getElementById('tablePage');
    const comperesionPage=document.getElementById('comperesionPage');
    const aboutPage=document.getElementById('aboutPage');
    homePage.onclick=()=>{
        location.href="./homePage.html"
    };
    tablePage.onclick=()=>{
        location.href="./tablePage.html"
    };
    comperesionPage.onclick=()=>{
        location.href="./comparisonsPage.html"
    };
    aboutPage.onclick=()=>{
        location.href="./aboutPage.html"
    };  
};