const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelectorAll(".nav-toggle")

Array.from(navToggle).forEach(btn => btn.addEventListener('click', () => {
    console.log(primaryNav.style.left);

    if (primaryNav.hasAttribute("data-visible")) {
        btn.setAttribute("aria-expanded", false)
    } else {
        btn.setAttribute("aria-expanded", true);
    }
    primaryNav.toggleAttribute("data-visible")
}))


const categoryItems = document.querySelectorAll('.category-item')



const app = document.querySelector(".app")

const loadPage = async (page) => {
    const res = await fetch(page)
    const data = await res.text()
    // console.log(res);

    app.innerHTML = data
    // console.log(data);

    Array.from(document.querySelectorAll(".table-box")).forEach((table) => {
        table.addEventListener("click", () => {
            loadPage("order/order.htm")

        })
    })

    // // document.querySelector(".to-home").addEventListener("click", ()=>{
    // //     console.log(654);

    // // })
}

loadPage("home/home.htm")
// loadPage("order/order.htm")

app.addEventListener("click", (e) => {
    console.log("e.target", e.target.innerHTML);
    if (e.target.innerHTML == "Save") {

        loadPage("home/home.htm")
    }
})