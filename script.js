const btns = document.querySelectorAll(".btn");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const title = document.querySelector(".title");
const description = document.querySelector(".desc");
const price = document.querySelector(".price");
const duration = document.querySelector(".duration");

let num = -1;

let servicesInfo = [
    {
        name: "Signature Brow Wax",
        details: "Consuelo’s favorite service! Free consultation included as well as brow mapping and styling. Customized for every client.",
        price: "25.00",
        duration: "20 minutes"
    },
    {
        name: "Brow Tweeze",
        details: "Detailed brow tweeze, perfect for those with a preference for tweezing or anyone who cannot do a brow wax. Includes a brow trim.",
        price: "27.00",
        duration: "30 minutes"
    },
    {
        name: "Brow Lamination",
        details: "Think perm…but for your brows! Creates a fuller/uniform look on the brows & allows you to comb hair in any direction. Lasts 4-6 weeks.",
        price: "80.00",
        duration: "30 minutes"
    },
    {
        name: "Nose Wax",
        details: "Self explanatory",
        price: "10.00",
        duration: "10 minutes"
    },
    {
        name: "Signature Brow Wax + Tint",
        details: "*NEW SERVICE* This service includes a signature brow wax, trimming, shaping and a semi-permanent brow tint. (Customized for every client on day of appointment)",
        price: "44.00",
        duration: "30 minutes"
    },

    {
        name: "Wax + Lamination + Tint",
        details: "*NEW SERVICE* Major brow transformation!! This kit includes a brow lamination, detailed brow shaping, trimming, and a semi-permanent brow tint.",
        price: "120.00",
        duration: "60 minutes"
    }
]


btns.forEach(btn => {
    btn.addEventListener("click", () => {
    overlay.classList.add("open-modal")
    let classes = btn.parentElement.classList;
    let index = selectService(classes)
    setDisplayText(servicesInfo[index]);
    })
})

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("open-modal");
})


function selectService(arr){
      for(let i = 0; i < arr.length; i++){
        if(!isNaN(arr[i])){
            num = parseInt(arr[i]);
        }
    }
    return num;
}

function setDisplayText(text){
    title.innerHTML = text["name"];
    description.innerHTML = text["details"];
    price.innerHTML = text["price"];
    duration.innerHTML = text["duration"];
}
