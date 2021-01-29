import {accounts} from "./account.js"
import {Post} from "./AddPost.js"


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
 

class Covid19
{
    covidStatistics()
    {
        fetch("https://api.covid19api.com/summary", requestOptions)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".gl-static").textContent+=" "+data.Global.TotalConfirmed;
            document.querySelector(".pl-static").textContent+=" "+data.Countries[134].TotalConfirmed;
            document.querySelector(".polish-new-cases-numbers").textContent=data.Countries[134].NewConfirmed;
            document.querySelector(".world-new-cases-numbers").textContent = data.Global.NewConfirmed;
            document.querySelector(".polish-new-death-numbers").textContent = data.Countries[134].NewDeaths;
            document.querySelector(".world-new-death-numbers").textContent = data.Global.NewDeaths;
            console.log(data);
        })
        .catch(error => console.log('error', error));
    } 

    showStatisticks()
    {
        document.querySelector(".wrapper").classList.toggle("blur");
        document.querySelector(".box").style.display = "inherit";
        document.querySelector(".covid-informations").style.display = "inline-flex";
       
    }
    closeStatisticks()
    {
        document.querySelector(".wrapper").classList.toggle("blur");
        document.querySelector(".box").style.display = "none";
        document.querySelector(".covid-informations").style.display = "none";
       
    }
   
    
}

let covid = new Covid19()
covid.covidStatistics();
let btnCovOpen = document.querySelector(".apps-ex");
let btnCovClose = document.querySelector(".close-covid-infromations");
btnCovOpen.addEventListener("click", covid.showStatisticks);
btnCovClose.addEventListener("click", covid.closeStatisticks);

class Oldbook
{
    constructor()
    {
        
        this.mail = "karol2134@op.pl",
        this.pass = "root"
        this.name = "karol szymański"
        this.logged = false;
        this.id = "";
    }

    validation()
    {  
        for(var i=0; i<accounts.length; i++)
        {
            if(accounts[i].password == this.pass && accounts[i].mail == this.mail)
            {
                this.id=accounts[i].id;
                this.logged = true;
                return true;
        
            }
            
        }    
        
    }
    openPictureChanger()
    {
        document.querySelector(".wrapper").classList.toggle("blur");
        document.querySelector(".box").style.display = "inherit";
        document.querySelector(".my-profile-information").style.display = "inline-flex";
    }
    closePictureChanger()
    {
        document.querySelector(".wrapper").classList.toggle("blur");
        document.querySelector(".box").style.display = "none";
        document.querySelector(".my-profile-information").style.display = "none";
    }
   
}
    
  let user = new Oldbook();

let button = document.getElementById("type-post");
user.validation();
let post = new Post(user.id, user.name, user.pass);
button.addEventListener("click", function(){
    post.creatorPostElements(user.id, user.name, user.pass );
    console.log(post.postsLock);
    console.log(post.likesLock);
    document.querySelector(".inputText").value = "";
}); 
  
document.addEventListener('click', function(e) {
    console.log(e.target.id + " to co kliknales");
    if(e.target.classList == "fas fa-minus-circle")
    {
        console.log( "znajduje sie" );
        post.deletePost(e.target.id,post.postsLock);
        
    }
}, false);



document.querySelector(".c-c-option").addEventListener('click', function(e)
{
    console.log(e.target);
    post.postsLock.forEach(consoleItem);
})

function consoleItem(item)
{
    console.log(item);
}

let openPictureChangerBttn = document.querySelector(".header-menu-option");
let closePictureChangerBttn = document.getElementById("close-profile-editor");


openPictureChangerBttn.addEventListener("click", user.openPictureChanger);
closePictureChangerBttn.addEventListener("click", user.closePictureChanger);




