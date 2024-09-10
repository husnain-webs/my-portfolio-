exp = document.getElementById("exp");
para = document.getElementById("para");
about  = document.getElementById("about");
intro = document.getElementById ("intro");
skills = document.getElementById ("skills");
award = document.getElementById ("aw");
ame = document.getElementById("ame");   

exp.addEventListener('click', function () {
    
})
exp.addEventListener('click',function () {
    ame.textContent = "Experience:-"
    para.textContent = "With a blend of creativity and technical prowess, I navigate the complexities of both front-end and back-end development with finesse. Whether I'm refining user interfaces for projects like 'EcoEats', an eco-conscious meal delivery platform, or optimizing database performance for 'TravelMate', a travel planning application, I'm driven by a relentless pursuit of excellence. When I'm not immersed in lines of code, you can find me exploring new technologies, honing my skills, or simply enjoying the great outdoors.  "
})
exp.addEventListener("click", function () {
    intro.style.display = "none"
} )

about.addEventListener('click',function () {
    ame.textContent = "About Me:-"
    para.textContent = "Salam! I'm Husnain, a passionate web designer hailing from the vibrant streets of Pakistan. With a love for creativity. I've immersed myself in the world of web design, weaving together the rich tapestry of my cultural heritage with cutting-edge digital craftsmanship."
    intro.style.display = "block"
})
skills.addEventListener('click', function () {
    ame.textContent = "My Skills:-"
    para.textContent = "Equipped with a diverse skill set, I excel in both front-end and back-end development. Proficient in languages like JavaScript, HTML, CSS. I craft seamless user interfaces and robust server-side solutions. My expertise extends to frameworks such as React, and PHP enabling me to build dynamic and scalable applications. With a keen eye for detail and a passion for problem-solving, I'm committed to delivering high-quality solutions that exceed expectations."
})
function sendEmail() {
    window.location.href = "mailto: haiderhusnainllc@gmail.com";
}
const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('ul');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
}); 
