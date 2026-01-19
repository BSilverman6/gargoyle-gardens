const page_box = document.querySelector(".page_box");
const main_menu = document.querySelectorAll(".menu_button")

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
    phone.textContent = "Phone: (___) ___ - ____";
    email.classList.add("center");
    phone.classList.add("center");
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
    const bennett = new Image();
    bennett.src ="images/bennett.jpg";
    bennett.alt = "picture of Bennett"
    title.textContent = "About";
    text.textContent = 'Located "up the hill" from White Salmon, in Snowden. Gargoyle Gardens is small market garden that employs beyond organic practices with regenerative principles. Find us near you this summer!'
    text2.textContent =  " The Farm was founded in 2026 by Bennett Silverman. Originally from the East coast, Bennett has lived and worked in Outdoor Education and Agriculture throughout the american west for the last decade. When not on the farm, you can find him nerding out over board games, getting lost on a rock or a river, or mischievously hiding behind small objects. "
    container.append(bennett,text2);
    page_box.replaceChildren(title,text,container);

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