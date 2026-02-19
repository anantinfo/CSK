window.onscroll = function()
{
scrollFunction();
};

function scrollFunction()
{
var btn = document.getElementById("scrollTopBtn");

if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
btn.style.display = "block";
else
btn.style.display = "none";
}

function scrollTopFunction()
{
window.scrollTo({
top:0,
behavior:"smooth"
});
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});
