let headerHero = document.querySelector(".headerHero");











//This is our clean maain function because we are kepp clean this...
const BuildFunc =()=>{
    generateElement();
    generateContactElement();
    generateHidenNav();
    closeBtnAction();
}


const generateElement = ()=>{
    let pictureLine = document.createElement("div");
    pictureLine.classList.add("pictureLine");
    headerHero.appendChild(pictureLine);  
    
    //Generate navbar and add into headerhero.....
    let navbar = document.createElement("div");
    navbar.classList.add("navbar");
    headerHero.appendChild(navbar);
    innerNav(navbar);


    //lets create something for hidend navbar ....
    let  hidenNavIcon = document.createElement("div");
    hidenNavIcon.classList.add("hidenNavIcon");
    headerHero.appendChild(hidenNavIcon);
    //add listener for clicking...
    hidenNavIcon.addEventListener("click",(element)=>{
        const getHidePannel = document.querySelector(".sideNav");
        getHidePannel.style.width = "64%";
    })


    let hidenNavIconTag = document.createElement("i");
    hidenNavIconTag.classList.add("fa-solid");
    hidenNavIconTag.classList.add("fa-bars-staggered");
    hidenNavIcon.appendChild(hidenNavIconTag);
    

    //generate moode btn for changing color....\
    let moodBtn = document.createElement("button");
    moodBtn.innerText = "LIGHT";
    navbar.appendChild(moodBtn);
    //add clickevent of this button///
    moodBtn.onclick=()=>{
            document.querySelector("body").classList.toggle("toggleBodyColor");
            pictureLine.classList.toggle("toggleBodyColor");
            moodBtn.classList.toggle("moodBtnToggle");

            //conditon for changin btn text..
            moodBtn.innerText == "LIGHT"?moodBtn.innerText = "DARK":moodBtn.innerText = "LIGHT";
    }
    
    //New elements..
    let pictureBox = document.createElement("div");
    pictureBox.classList.add("pictureBox");
    pictureLine.appendChild(pictureBox);
    
    let OppositDiv = document.createElement("div");
    OppositDiv.classList.add("OppositDiv");
    pictureLine.appendChild(OppositDiv);

    let text1 = document.createElement("h2");
    text1.classList.add("text1");
    text1.innerText = "Hey there! This is Rabbi Hossain...";
    OppositDiv.appendChild(text1);

    let text2 = document.createElement("h2");
    text2.classList.add("text2");
    text2.innerText = "Learning.. | Front-end dev";
    OppositDiv.appendChild(text2);


    let ruler = document.createElement("hr");
    ruler.classList.add("rulerLine");
    text1.appendChild(ruler);

    let picture = document.createElement("img");
    picture.classList.add("main_img");
    picture.src = "./images/Untitled design (4).jpg"
    pictureBox.appendChild(picture);

}



//function for generate and add the inner elements of navbar...
const innerNav = (parentDiv)=>{
    let UnorderList = document.createElement("ul");
    UnorderList.classList.add("UL");
    parentDiv.appendChild(UnorderList);
    
    //generate and send into navbar using for loop
    let listItem = ["Home","About","Work","Contact"];
    for(let i = 0; i< listItem.length; i++){
        const createList = document.createElement("li");
        createList.classList.add("childList");
        createList.innerText = listItem[i];
        UnorderList.appendChild(createList);
    }
}



//This is our contact icon function declear for generating this new divs also.....
const generateContactElement =()=>{
    let contactIcons = document.createElement("div");
    contactIcons.classList.add("contactIcons");
    document.body.appendChild(contactIcons);

    //now try to create some < i > tag into this div/
    const iTagName = ["fa-github","fa-square-instagram","fa-telegram","fa-x-twitter","fa-facebook"];
    const iTagattributes = ["Github","Instagram","Telegram","Twitter","Facebook"];
    const socialLink = ["https://www.github.com/rabbihossainlhp",
                        "https://www.instagram.com/rabbihossainlhp",
                        "https://web.telegram.org/a/#6137244511",
                        "https://www.x.com/rabbihossain06",
                        "https://www.facebook.com/rabbihossainlhp"
    ]

    for(let i = 0; i<iTagName.length; i++){
        const nextDiv = document.createElement("div");
        nextDiv.classList.add("nextDiv");

        const iTag = document.createElement("i");
        iTag.classList.add("fa-brands");
        iTag.classList.add(iTagName[i]);

        const attachedLink = document.createElement("a");
        attachedLink.classList.add("attachedLink");
        attachedLink.href = socialLink[i];
        attachedLink.target = "_blank";


        const nextDivText = document.createElement("h3");
        nextDivText.classList.add("nextDivText");
        nextDivText.innerText = iTagattributes[i];

        
        nextDiv.appendChild(iTag)
        attachedLink.appendChild(nextDivText);
        nextDiv.appendChild(attachedLink);

        contactIcons.appendChild(nextDiv);

    }
    

}



//generate Hidden nav fucntion "generatehidenNav"...
const generateHidenNav =()=>{
    //main Div
    let sideNav = document.createElement("div");
    sideNav.classList.add("sideNav");
    document.body.appendChild(sideNav);
    
    //Icon {cross/close}..
    let innerIcon = document.createElement("i");
    innerIcon.classList.add("fa-solid");
    innerIcon.classList.add("fa-xmark");
    sideNav.appendChild(innerIcon);

    //unorderlist nav....
    let innerList = document.createElement("ul");
    sideNav.appendChild(innerList);

    //list items..
    let listItem = ["Home","About","Work","Contact"];
    for(let i = 0; i<listItem.length; i++){
        let listItems = document.createElement("li");
        listItems.innerText = listItem[i];
        innerList.appendChild(listItems);
    }

}


// //add closing action hare becaus better understanding..
const closeBtnAction = ()=>{
document.querySelector(".sideNav i").addEventListener("click",()=>{
    document.querySelector(".sideNav").style.width = "0%";
})    
}



BuildFunc();

