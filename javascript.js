let page_box = document.querySelector(".page_box");
let page_box_title = page_box.querySelector("div");
let page_box_p = page_box.querySelector("p");
let main_menu = document.querySelectorAll(".menu_button")


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
        page_box_title.textContent = "Home Clicked";
        page_box_p.textContent = "Welcome to the website for Gargoyle Gardens. Coming to the Columbia River Gorge in Spring 2026! \n\n This website is under construction. Please check back for updates";
        break;
    
    case "about_b":
        page_box_title.textContent = "About Clicked";
        page_box_p.textContent = 'Located "up the hill" from White Salmon.';
        break;

    case "contact_b":
        page_box_title.textContent = "Contact Clicked";
        page_box_p.textContent = "I'll get a business email and phone soon. Not gonna put my contact info on here yet...";
        break;

    case "explore_b":
        page_box_title.textContent = "Explore Clicked";
        page_box_p.textContent = "Magic Awaits!";
        break;

    default:
        console.log("Nope")
        break;
}
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