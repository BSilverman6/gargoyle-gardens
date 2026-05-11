const page_box = document.querySelector(".page_box");
const main_menu = document.querySelectorAll(".menu_button")


const bennett = new Image();
bennett.src ="images/bennett.JPG";
bennett.alt = "pic o' Bennett";

const market = new Image();
market.src ="images/market.jpeg";
market.alt = "pic o' market";


set_text("home_b");


main_menu.forEach((item)=>{
    item.addEventListener("click", (event)=>{
        remove_active_formatting();
        event.target.classList.add("active_option_bar")
        set_text(event.target.id)
    })
})

function remove_active_formatting(){
    let active = document.querySelector(".active_option_bar");
    active.classList.remove("active_option_bar");
}

function set_text(id){
switch (id) {
    case "home_b":
        create_home();
        break;
    
    case "about_b":
        create_about();
        break;

    case "contact_b":
        create_contact();    
        break;

    case "explore_b":
        create_explore()
        break;

    case "markets_b":
        create_markets()
        break;
    
    case "csa_b":
        create_csa()
        break;

    default:
        console.log("Nope")
        break;
}
}

function create_contact(){
    let card = document.createElement("div")
    let email = document.createElement("p")
    let phone = document.createElement("p");
    card.textContent = "Contact"
    email.textContent = "Email: Bennett@Gargoyle.Farm";
    //phone.textContent = "Phone: (___) ___ - ____";
    email.classList.add("center");
    //phone.classList.add("center");
    page_box.replaceChildren(card,email,phone)
}

function create_home(){
    const title = document.createElement("div");
    const text = document.createElement("p");
    const text2 = document.createElement("p");
    title.textContent = "Home";
    text.textContent = "Welcome to the website for Gargoyle Gardens. Coming to the Columbia River Gorge in Spring 2026!"
    text2.textContent = "This website is under construction. Please check back for updates"
    page_box.replaceChildren(title,text,text2);
}

function create_about(){
    const title = document.createElement("div");
    const text = document.createElement("p");
    const text2 = document.createElement("p");
    const container = document.createElement("div");
    container.classList.add("duo");
    
    title.textContent = "About";
    text.textContent = 'Located "up the hill" from White Salmon, in Snowden. Gargoyle Gardens is small market garden that employs beyond organic practices with regenerative principles. Find us near you this summer!'
    text2.textContent =  " The Farm was founded in 2026 by Bennett Silverman. Originally from the East coast, Bennett has lived and worked in Outdoor Education and Agriculture throughout the american west for the last decade. When not on the farm, you can find him nerding out over board games, getting lost on a rock or a river, or mischievously hiding behind small objects. "
    container.append(bennett,text2);
    page_box.replaceChildren(title,text,container);

}

function create_markets(){
    const title = document.createElement("div");
    const text = document.createElement("p");
    const container = document.createElement("div");
    container.classList.add("duo");

    const subcontainer = document.createElement("div")
    subcontainer.classList.add("trio");
    const subcont1 = dalles_dates();
    const subcont2 = ws_dates();
    const subcont3 = vancouver_dates();
    subcontainer.append(subcont1,subcont2,subcont3);
    
    title.textContent = "Markets";
    text.textContent = 'Find us this summer in White Salmon, The Dalles, Vancouver, and Gorge Farmer Collective'
    container.append(subcontainer, market);
    page_box.replaceChildren(title,text,container);

}
function create_csa(){
    const title = document.createElement("div");
    const text = document.createElement("p");
    const text2 = document.createElement("p");
    const text3 = document.createElement("p");
    const container = document.createElement("div");
    container.classList.add("duo");
    
    title.textContent = "CSA";
    text.textContent = 'Short About'
    text2.textContent =  " The Details :) "
    container.append(bennett,text2);
    text3.textContent = "How to Join"
    page_box.replaceChildren(title,text,container,text3);

}

function create_explore(){
    const title = document.createElement("div");
    title.textContent = "Magic Awaits!";
    page_box.replaceChildren(title);

}
/* 
about_b.addEventListener("click", ()=> {
    let active = document.querySelector(".active_option_bar");
    active.classList.remove("active_option_bar");
    page_box.textContent = "About";
    about_b.classList.add("active_option_bar");

    let about_text=document.createElement("p")
    about_text.textContent = "Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 Gargoyle Gardens. Gorge Grown Vegetables coming in 2026 "
    page_box.appendChild(about_text)
}); */

function dalles_dates(){
    const myDiv = document.createElement("div");
    const title = document.createElement("div"); title.textContent= "The Dalles, Saturdays"
    const d1 = document.createElement("p"); d1.textContent= "June 13";
    const d2 = document.createElement("p"); d2.textContent= "June 27";
    const d3 = document.createElement("p"); d3.textContent= "July 11";
    const d4 = document.createElement("p"); d4.textContent= "July 25";
    const d5 = document.createElement("p"); d5.textContent= "August 8";
    const d6 = document.createElement("p"); d6.textContent= "August 29";
    const d7 = document.createElement("p"); d7.textContent= "September 12"
    const d8 = document.createElement("p"); d8.textContent= "September 26";
    const d9 = document.createElement("p"); d9.textContent= "October 10";
    const d10 = document.createElement("p");d10.textContent= "October 24";

    myDiv.classList.add("list")
    myDiv.append(title,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10);
    return myDiv;
}

function ws_dates(){
    const myDiv = document.createElement("div");
    const title = document.createElement("div"); title.textContent= "White Salmon, Every Tuesday"
    const d1 = document.createElement("p"); d1.textContent= "June 2";
    const d2 = document.createElement("p"); d2.textContent= "June 9";
    const d3 = document.createElement("p"); d3.textContent= "June 16";
    const d4 = document.createElement("p"); d4.textContent= "June 23";
    const d5 = document.createElement("p"); d5.textContent= "June 30";
    const d6 = document.createElement("p"); d6.textContent= "July 7";
    const d7 = document.createElement("p"); d7.textContent= "July 14"
    const d8 = document.createElement("p"); d8.textContent= "July 21";
    const d9 = document.createElement("p"); d9.textContent= "July 28";
    const d10 = document.createElement("p");d10.textContent= "August 4";
    const d11 = document.createElement("p");d11.textContent= "August 11";
    const d12 = document.createElement("p");d12.textContent= "August 18";
    const d13 = document.createElement("p");d13.textContent= "August 25";
    const d14 = document.createElement("p");d14.textContent= "September 1";
    const d15 = document.createElement("p");d15.textContent= "August 8";
    const d16 = document.createElement("p");d16.textContent= "August 15";
    const d17 = document.createElement("p");d17.textContent= "August 22";
    const d18 = document.createElement("p");d18.textContent= "August 29";



    myDiv.classList.add("list")
    myDiv.append(title,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18);
    return myDiv;
}

function vancouver_dates(){
    const myDiv = document.createElement("div");
    const title = document.createElement("div"); title.textContent= "Downtown Vancouver, Sundays"
    const d1 = document.createElement("p"); d1.textContent= "June 7";
    const d2 = document.createElement("p"); d2.textContent= "June 21";
    const d3 = document.createElement("p"); d3.textContent= "July 5";
    const d4 = document.createElement("p"); d4.textContent= "July 19";
    const d5 = document.createElement("p"); d5.textContent= "August 2";
    const d6 = document.createElement("p"); d6.textContent= "August 23";
    const d7 = document.createElement("p"); d7.textContent= "September 6"
    const d8 = document.createElement("p"); d8.textContent= "September 20";
    const d9 = document.createElement("p"); d9.textContent= "October 4";
    const d10 = document.createElement("p");d10.textContent= "October 18";

    myDiv.append(title,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10);
    myDiv.classList.add("list")

    return myDiv;
}