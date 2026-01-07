console.log("ran");

transition = document.getElementById("transitionTab");
setTimeout(() =>
{
    transition.style.height = "0%"
}, 200);

function Transition(targetPage)
{
    transition = document.getElementById("transitionTab");
    transition.style.height = "100%";

    setTimeout(() =>
    {
        document.location.href = targetPage;
        
    }, 2100);

    document.body.classList.togge
}
