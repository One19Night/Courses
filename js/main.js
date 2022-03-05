// Trunder Text
window.addEventListener("load",function(){
    truncateCard()
})
function truncateCard(){
    var cardList = document.getElementsByClassName("card-title")
    for(var i = 0; i < cardList.length ; i++){
        var text = cardList[i].innerHTML
        var newText = truncateString(text, 35)
        cardList[i].innerHTML = newText
    }
}
function truncateString(str,num){
    if(str.length > num){
        return str.slice(0, num) + "..."
    }
    else{
        return str
    }
}
// SIDEBAR
var toggleBtn = document.querySelector('.sidebar_button')
var sidebarMini = document.querySelector('.sidebar')
var switchBtn = document.querySelector('#checkbox')

switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkmode')
})

toggleBtn.addEventListener('click',function(){
    sidebarMini.classList.toggle('opened')
})