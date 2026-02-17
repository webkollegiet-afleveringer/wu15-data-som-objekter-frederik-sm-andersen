let header = {
    cube: '<svg width="32" class="header-cube" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0654 16.9245V31.9999L30.1229 24.4615V9.3855L17.0654 16.9245Z" fill="white"/><path d="M30.1229 9.3855L17.0654 16.9245V31.9999" fill="white"/><path d="M29.0586 7.53848L16.0001 0L2.94263 7.53848V7.54102L16.0001 15.08L29.0586 7.54102V7.53848Z" fill="white"/><path d="M2.94263 7.53845V7.54099L16.0001 15.08L29.0586 7.54099V7.53845" fill="white"/><path d="M14.9357 16.9245L1.8772 9.3855V24.4615L14.9357 31.9999V16.9245Z" fill="white"/><path d="M14.9357 31.9999V16.9245L1.8772 9.3855" fill="white"/></svg>',
    arrow: '<svg width="12" class="header-arrow" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29255 6.29246L10.8825 1.70246C11.2725 1.31246 11.2725 0.682461 10.8825 0.292461C10.4925 -0.0975389 9.86255 -0.0975389 9.47255 0.292461L5.58255 4.17246L1.70255 0.292461C1.31255 -0.0975389 0.682549 -0.0975389 0.292549 0.292461C-0.0974512 0.682461 -0.0974512 1.31246 0.292549 1.70246L4.88255 6.29246C5.26255 6.68246 5.90255 6.68246 6.29255 6.29246Z" fill="#444B53"/></svg>',
    person: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0C7.164 0 0 7.163 0 16C0 24.837 7.164 32 16 32C24.836 32 32 24.837 32 16C32 7.163 24.836 0 16 0ZM16 28C12.249 28 8.902 26.277 6.702 23.581C7.705 20.547 9.711 18.122 12.228 16.89C10.288 15.646 9 13.475 9 11C9 7.376 11.754 4.395 15.284 4.036C15.522 4.022 15.758 4 16 4C16.242 4 16.478 4.022 16.716 4.036C20.246 4.395 23 7.376 23 11C23 13.475 21.712 15.646 19.772 16.89C22.29 18.123 24.295 20.548 25.298 23.581C23.098 26.277 19.751 28 16 28Z" fill="#F78065"/></svg>',
}

let hero = {
    image: "https://dazzling-squirrel-77a63d.netlify.app/imgs/hero.png",
    headline: "Find out how we can save your time in Backpacking in Europe",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.",
    icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Globe.png",
    buttonText: "Explore",
}


let services = [
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/exploring.png",
        headline: "Promoting your territory towards foreign tourists",
        text: "EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.",
        linktext: "Discover the places linked to your area that you can link to your structure"
    },
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/tourist_map.png",
        headline: "Additional services designed for the needs of campers",
        text: "Travelling often means that you dont have time to organise excursions along your route. EasyCamper takes care of that!",
        linktext: "Discover the Guided Tours and additional services that you can link to your structure"
    },
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/destination.png",
        headline: "Free online showcase with promotion in Italy and abroad",
        text: "Forget about the time and money spent on creating your own website or e-commerce system for bookings.",
        linktext: "Easycamper creates your showcase. Discover the terms and conditions for joining the Network"
    },
]

let facilities = {
    headline: "Making your facility known is our priority",
    options: [
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/list-check.png",
            headline: "Choose the type of stop",
            text: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping",
            linktext: "show me more"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/spellcheck.png",
            headline: "Describe your structure",
            text: "Describe thee property, location and nearby attractions",
            linktext: "show me more"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Text-Frame-Add.png",
            headline: "Build your showcase",
            text: "Add photos, videos and descriptions Define the price of each type of that make your propety truly",
            linktext: "show me more"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Calendar-Today.png",
            headline: "Prices and Availability",
            text: "pitch and configure the availablity calendar.",
            linktext: "show me more"
        },
    ]
}

let sites = {
    headline: "Join the community campervan sites managers.",
    text: "Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.",
    btnicon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/arrow-icon.png",
    buttomText: "Start",
    places: [
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/lucciano.png",
            name: "Lucciano",
            city: "Rome",
            view: "view the site",
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/cremonesi.png",
            name: "Cremonesi",
            city: "Florence",
            view: "view the site",
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/beneventi.png",
            name: "Beneventi",
            city: "Venice",
            view: "view the site",
        },
    ]
}

let advantages = {

    headline: "Our Advantages",

    ourAdvantages: [
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/compare.png",
            headline: "Convenience and Transparency",
            text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/library_books.png",
            headline: "Digital marketing and editorial support",
            text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Compare-HSV.png",
            headline: "Community of services dedicated to campers",
            text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
        },
    ]
}

// Opret dit dataobjekt til footerens indhold herunder


let footer = {
    text: "Easy Camper",
    headline: "When Passion Meets Comfort.",

    allUl: [
        {
            header: "Discover the Network",
            headerList: [
                { link: "#", text: "Where to shop" },
                { link: "#", text: "Tour Guided" },
                { link: "#", text: "Our Tours" },
                { link: "#", text: "About Us" }
            ]
        },
        {
            header: "Become a Manager",
            headerList: [
                { link: "#", text: "Join your Pairing" },
                { link: "#", text: "Offer your Service" },
                { link: "#", text: "Are you a guide?" },
            ]
        },
        {
            header: "Assistance",
            headerList: [
                { link: "#", text: "Support Center" },
                { link: "#", text: "Faqs" },
                { link: "#", text: "Cancallation Options" },
                { link: "#", text: "Reliablity and Sequrity" },
            ]
        }
    ],

    eazyCamper: "EazyCamper. All rights reserved.",
    bottemUls: [
        { link: "#", text: "aboute" },
        { link: "#", text: "Site Map" },
        { link: "#", text: "Terms" },
        { link: "#", text: "Privacy Policy" },
        { link: "#", text: "Teams" },

    ],
}



