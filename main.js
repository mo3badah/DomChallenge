// we will make small project with js only without anything in html or css all will be here in js file
// first to make the header
let header = document.createElement('header');
let content = document.createElement('section');
let footer = document.createElement('footer');
// adding class lists
header.classList.add('website-head');
header.classList.add('content');
header.classList.add('footer');
// initial logo and menu
let  logo = document.createElement(
    'div'
)
let  menu = document.createElement(
    'div'
)
logo.classList.add('logo');
menu.classList.add('menu');
// adding the text content to the elements
let logoText = 'elzero';
let menuText = `<ul style="list-style: none;display: flex;gap: 5px;"><li>Home</li><li>About</li><li>Service</li><li>Contact</li></ul>`;
logo.textContent = logoText;
menu.innerHTML = menuText;
// adding the style sheets
logo.style.cssText='font-weight: 900;color:green;text-transform:capitalize;display:flex;align-items:center;justify-content:center;';
menu.style.cssText='font-weight=bolder;color:gray;text-transform:capitalize;';
// adding to the main body document
header.appendChild(logo);
header.appendChild(menu);
header.style.cssText='display:flex;padding:5px;justify-content:space-between;'
document.body.appendChild(header);
// Adding the content to the shape
for (let i = 1; i<=15 ;i++){
// make the main elements
    let myMainDiv =document.createElement("div");
    let mySpan =document.createElement("span");
// make the main text nodes
    let textDiv = document.createTextNode(`Product`);
    let textSpan = document.createTextNode(`${i}`);
    // set the class attribute and assign its value
    myMainDiv.setAttribute("class","product");
    myMainDiv.style.cssText="padding: 20px;background-color:#eee; color:gray;\n" +
        "\twidth: 150px;\n" +
        "\tdisplay: flex;\n" +
        "\tflex-direction: column;\n" +
        "\talign-items: center;\n" +
        "\ttext-align: center;\n" +
        "\tborder-radius: .5rem;\n" +
        "\tborder-bottom: 2px solid blue;\n" +
        "\tbox-shadow: 0 10px 40px -14px rgba(0,0,0,0.25);";
    mySpan.style.cssText="font-size: 1rem;\n" +
        "\tfont-weight: 600;\n" +
        "\tmargin: 0.7rem 0 0.4rem;color:black";
// adding them to the view menu
    mySpan.appendChild(textSpan);
// adding them to the main div
    myMainDiv.appendChild(mySpan);
    myMainDiv.appendChild(textDiv);
    content.appendChild(myMainDiv);
    // document.body.appendChild(breaking);
    content.style.cssText="display: grid;\n" +
        "\tgrid-template-columns: repeat(auto-fit,minmax(200px, auto));\n" +
        "\tjustify-content: center;\n" +
        "\tgap: 2rem;\n" +
        "\tmargin-top: 2rem;";
}
document.body.appendChild(content);

// adding the footer
let myFooterDiv =document.createElement("div");
let myFooterText = `&copy; Copyright 2021`;
myFooterDiv.innerHTML = myFooterText;
myFooterDiv.style.cssText = `width:100%; height:50px; text-align:center; color:white; background-color:green;display:flex;align-items:center;justify-content:center;margin-top: 50px;`;
footer.appendChild(myFooterDiv);
document.body.appendChild(footer);
document.body.style.cssText = `min-height: 100vh; margin:0px;`;

