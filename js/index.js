// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.text))
let heroHeader = document.querySelector(".hero");
let serviceList = document.querySelector(".services");
let facilitiesList = document.querySelector(".facilities");
let siteslist = document.querySelector(".sites")
let advantageslist = document.querySelector(".advantages");


    const heroSection = 
    /* html*/`
    <section class="hero-div">
        <img class="hero-img" src=${hero.image}>
        <h1 class="hero-h1" >${hero.headline}</h1>
        <p>${hero.copy}</p>
    </section> `
    heroHeader.insertAdjacentHTML("beforeend",heroSection);

//-------------------------------------------------------------

services.forEach(service => {
    const serviceSection =
    /* html*/`
    <section class="services-section">
        <img class="service-img" src=${service.illustration}>
        <h2 class="service-h2">${service.headline}</h2>
        <a class="sevice-link-text" href="#">${service.linktext}</a>
    </section> `
    serviceList.insertAdjacentHTML("beforeend",serviceSection)
})


    // let serviceImg = document.createElement("img");
    // serviceImg.classList.add("service-img")
    // serviceImg.src = services.illustration
    
    // let serviceheadline = document.createElement("h2");
    // serviceheadline.classList.add("service-h2")

    // let servicesLinkText = document.createElement("a")
    // servicesLinkText.classList.add("sevice-link-text")


    //--------------------------------------------------

const facilitieSection = 
    /* html*/`
    <section class="facilitie-section">
        <h2 class="facilities-h2" >${facilities.headline}</h2>
    </section> `
    facilitiesList.insertAdjacentHTML("beforeend",facilitieSection);

    facilities.options.forEach(facility => {
        const facilitiesArticle =
    /* html*/`
    <article>
        
        <img class="facilities-icon" src=${facility.icon}>
        <h3 class="facilities-h3">${facility.headline}</h3>
        <p class="facilities-text">${facility.text}</p>
    </article> `
    facilitiesList.insertAdjacentHTML("beforeend",facilitiesArticle)
    })

    //---------------------------------------------------

const sitesSection =
    /* html*/`
    <section>
        <h2></h2>
    </section>`

    //---------------------------------------------------

advantages.forEach(advantages =>{
    const advantage =
    /* html*/`
    <section class="advantages-Article">
        <img class="advantages-img" src=${advantages.icon}>
        <h3 class="advantages-h3">${advantages.headline}</h3>
        <p class="advantages-text">${advantages.text}</p>
    </section> `
    advantageslist.insertAdjacentHTML("beforeend",advantage)
})