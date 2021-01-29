let covid = new Covid19()
covid.covidStatistics();
let btnCovOpen = document.querySelector(".apps-ex");
let btnCovClose = document.querySelector(".close-covid-infromations");
btnCovOpen.addEventListener("click", covid.showStatisticks);
btnCovClose.addEventListener("click", covid.closeStatisticks);






deletePost(value, postTable)
{
  postTable.forEach(checkDelete(value))
      
  
}

    



function checkDelete(item, value)
{

    
if(item[2].includes(value))
{
 document.getElementById(value).remove();
}
}