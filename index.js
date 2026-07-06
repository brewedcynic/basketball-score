let home = document.getElementById("home")
homeCount = 0
let guest = document.getElementById("guest")
guestCount = 0
function add(score,loc)
{
    if(loc=="home"){
        homeCount += score
        home.textContent = homeCount
    }
    else
    {
        guestCount+=score
        guest.textContent = guestCount
    }
    console.log(loc)
    
}