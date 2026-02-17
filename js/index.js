// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.text))
let headerlist = document.querySelector(".header")
let heroHeader = document.querySelector(".hero");
let serviceList = document.querySelector(".services");
let facilitiesList = document.querySelector(".facilities");
let siteslist = document.querySelector(".sites");
let advantageslist = document.querySelector(".advantages");
let footerlist = document.querySelector(".footer");




// const headerSection =
//     /*html*/`
//     <section class="header-s">
//         <img class="header-cube" src="${header.cube}">
//         <div class="header-person">
//             <img src="${header.arrow}">
//             <img src="${header.person}">
//         </div>
//     </section> `
// headerlist.insertAdjacentHTML("beforeend", headerSection)

const headerSection =
    /*html*/`
    <section class="header-s">
        ${header.cube}
        <div class="header-ap-div">
            ${header.arrow}
            ${header.person}
        </div>
    </section> `
headerlist.insertAdjacentHTML("beforeend", headerSection)

//-----------------------------------------------------------------------------------------

let heroText = hero.headline
let heroArray = heroText.split(" ")
let part1 = heroArray.slice(0, 5)
let part2 = heroArray.slice(5, 8)
let part3 = heroArray.slice(8, heroArray.length)

let part1Text = part1.map((e) => e).join(" ")
let part2Text = part2.map((e) => e).join(" ")
let part3Text = part3.map((e) => e).join(" ")

const heroSection =
    /* html*/`
    <section class="hero-div">
        <img class="hero-img" src=${hero.image}>
        <article class="hero-article">
        <h1 class="hero-h1">
            <span>${part1Text}</span>
            <span class="hero-span">${part2Text}</span>
            <span>${part3Text}</span>        
        </h1>
        <p class="hero-text">${hero.copy}</p>
        <button class="hero-button">
            <img class="hero-icon" src="${hero.icon}">
            <p class="hero-btext">${hero.buttonText}</p>
        </button>
        </article>        
    </section> `
heroHeader.insertAdjacentHTML("beforeend", heroSection);

//-------------------------------------------------------------

services.forEach(service => {
    const serviceSection =
    /* html*/`
    <section class="services-section">
        <figure class="servicse-figure">
        <img class="service-img" src=${service.illustration}>
        </figure>               
        <h2 class="service-h2">${service.headline}</h2>
        <p class="services-text">${service.text}</p>
        <a class="sevice-link-text" href="#">${service.linktext}</a>
    </section> `
    serviceList.insertAdjacentHTML("beforeend", serviceSection)
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
facilitiesList.insertAdjacentHTML("beforeend", facilitieSection);

facilities.options.forEach(facility => {
    const facilitiesArticle =
    /* html*/`
    <article class="facilities-article">
        <img class="facilities-icon" src=${facility.icon}>
        <h3 class="facilities-h3">${facility.headline}</h3>
        <p class="facilities-text">${facility.text}</p>
        <a class="facilities-linktext" href="#">${facility.linktext}</a>
    </article> `
    facilitiesList.insertAdjacentHTML("beforeend", facilitiesArticle)
})

//---------------------------------------------------

const sitesSection =
    /* html*/`
    <section>
        <h2 class="sites-h2">${sites.headline}</h2>
        <p class="sites-text">${sites.text}</p>
        <button class="sites-buttom">
        <img class="sites-starts" src="${sites.btnicon}">
        <p class="sites-buttomtext">${sites.buttomText}</p>
        </button>
    </section>`
siteslist.insertAdjacentHTML("beforeend", sitesSection)


sites.places.forEach(site => {
    const sitesArticle =
        /* html*/`
        <article class="sites-article">
            <figure class="sites-figure">
            <img class="sites-img" src=${site.img}>
            </figure>            
            <h3 class="sites-h3">${site.name}</h3>
            <p class="sites-city">${site.city}</p>
            <a class="sites-view" href="#">${site.view}</a>
        </article>`
    siteslist.insertAdjacentHTML("beforeend", sitesArticle)
})

//---------------------------------------------------

const advantageHeadline =
    /*html*/`
    <section class="advantages-s-h">
        <h2 class="advantages-headline">${advantages.headline}</h2>
    </section> `
advantageslist.insertAdjacentHTML("beforeend", advantageHeadline),


    advantages.ourAdvantages.forEach(advantag => {
        const advantage =
    /* html*/`
    <section class="advantages-article">
        <img class="advantages-img" src=${advantag.icon}>
        <h3 class="advantages-h3">${advantag.headline}</h3>
        <p class="advantages-text">${advantag.text}</p>
    </section> `
        advantageslist.insertAdjacentHTML("beforeend", advantage)
    })

//---------------------------------------------------


const footersection =
    /* html*/`
    <section class="">
        <h2 class="footer-h2">${footer.text}</h2>
        <p class="footer-headline-t">${footer.headline}</p>
    </section>`
footerlist.insertAdjacentHTML("beforeend", footersection)


footer.allUl.forEach(foot => {


    const footerHeadline =
    /* html*/`
    
    <section class="footer-ec-section">
        <h3>${foot.header}</h3>
        <ul class="footer-ul-es">
            ${foot.headerList.map(li => `<li class="footer-li-es"><a href="#">${li.text}</a></li>`).join("")}

        </ul>
    </section>`
    footerlist.insertAdjacentHTML("beforeend", footerHeadline)
})
const newli = document.createElement("section")

const footerBottemText =
    /* html*/`
    <section class="footer-reserved-s">
        <h3 class="footer-reserved-h3">${footer.eazyCamper}</h3>
        <ul class="footer-bottem-ul">
            ${footer.bottemUls.map(bottemLi => `<li><a href="#">${bottemLi.text}</a></li>`).join("")}
        </ul>
    </section>`


footerlist.insertAdjacentHTML("beforeend", footerBottemText)



