let headerHero = document.querySelector(".headerHero");











//This is our clean maain function because we are kepp clean this...
const BuildFunc =()=>{
    generateElement();
    generateContactElement();
    generateHidenNav();
    closeBtnAction();
    generateAboutMe();
    generateProjectSection();
    ContactSection();
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
            if(document.body.style.color !="rgb(251, 255, 255)"){
                moodBtn.style.backgroundColor == "white";
            }else{
                moodBtn.style.backgroundColor == "rgb(251, 255, 255)";
            }
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
    picture.src = "./images/d.jpg"
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

        let link = document.createElement("a");
        link.href = "#ProjectContainer";
        link.innerText = listItem[i];
        createList.appendChild(link);
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

    //inner color mood button....
    let innerButtonHolder = document.createElement("div");
    innerButtonHolder.classList.add("innerButtonHolder");

    let innerMoodButton = document.createElement("i");
    innerMoodButton.classList.add("fa-regular");
    innerMoodButton.classList.add("fa-moon");
    
    innerButtonHolder.appendChild(innerMoodButton);
    sideNav.appendChild(innerButtonHolder);
    //add clickaction..... 
    innerButtonHolder.onclick=()=>{
        innerMoodButton.classList.toggle("innerButtonToggle");

        document.body.classList.toggle("toggleBodyColor");
        document.querySelector(".pictureLine").classList.toggle("toggleBodyColor");
    };
    //end here this innermood  button.s


    //unorderlist nav....
    let innerList = document.createElement("ul");
    sideNav.appendChild(innerList);

    //list items..
    let listItem = ["Home","About","Work","Contact"];
    for(let i = 0; i<listItem.length; i++){
        let listItems = document.createElement("li");
        innerList.appendChild(listItems);

        let link = document.createElement("a");
        link.innerText = listItem[i];
        listItems.appendChild(link);
    }

}


// //add closing action hare becaus better understanding..
const closeBtnAction = ()=>{
document.querySelector(".sideNav i").addEventListener("click",()=>{
    document.querySelector(".sideNav").style.width = "0%";
})    
}


//generate about me section.....
const generateAboutMe=()=>{
    let MeSectionDiv = document.createElement("div");
    MeSectionDiv.classList.add("MeDiv");
    document.body.appendChild(MeSectionDiv);

    let childMe = document.createElement("div");
    childMe.classList.add("childMe");
    MeSectionDiv.appendChild(childMe);

    let meHeader = document.createElement("h1");
    meHeader.innerText = "(==Abut Me==)";
    childMe.appendChild(meHeader);

    let mePara = document.createElement("p");
    mePara.innerText = "Hi, I'm Rabbi Hossain, a self-taught web developer with a passion for learning, especially in front-end development. I love creating visually appealing and user-friendly websites. Alongside web development, I also enjoy practicing data structures and algorithms with Java to sharpen my problem-solving skills. My journey in tech is driven by curiosity and a desire to constantly improve and grow.";
    childMe.appendChild(mePara);
}
//Project Section...
const generateProjectSection =()=>{
    let ProjectContentDiv = document.createElement("div");
    ProjectContentDiv.classList.add("ProjectContainer");
    ProjectContentDiv.setAttribute("id","ProjectContainer");
    document.body.appendChild(ProjectContentDiv);
    
    let ProjectHeader = document.createElement("h1");
    ProjectHeader.innerText = "(==My Projects Section==)";
    ProjectContentDiv.appendChild(ProjectHeader);

    let  ChildContainer = document.createElement("div");
    ChildContainer.classList.add("ChildContainer");
    ProjectContentDiv.appendChild(ChildContainer);

    
    //....3/4 divs into childConrainer for showcasing project..
    let countDivCreate = ["Currency Converter","BG Changer","Memory Card Game"];
    let countImgLink = [
        "./images/project1.png",
        "./images/project2.png",
        "./images/project3.png"
    ];
    countDivCreate.forEach((items,index)=>{
        // console.log(items,index);
        let addingDiv = document.createElement("div");
        addingDiv.classList.add("showcasing");
        ChildContainer.appendChild(addingDiv);

        let innerImg = document.createElement("img");
        innerImg.src = countImgLink[index];
        addingDiv.appendChild(innerImg);

        let innerP = document.createElement("p");
        innerP.innerText = items;
        addingDiv.appendChild(innerP);
    })
}


//contact section...
const ContactSection=()=>{
    let contactParent = document.createElement("div");
    contactParent.classList.add("ContactParent");
    document.body.appendChild(contactParent);

    let ContactParentHeader = document.createElement("h1");
    ContactParentHeader.innerText = "Let's Connect And Code Something Extraordinary.";
    contactParent.appendChild(ContactParentHeader);

    let socialContact = document.createElement("div");
    socialContact.classList.add("socialContact");
    contactParent.appendChild(socialContact);

    let mailContact = document.createElement("div");
    mailContact.classList.add("mailContact");
    contactParent.appendChild(mailContact);

    let input1 = document.createElement("input");
    input1.type = "text";input1.placeholder = "Your Name";
    mailContact.appendChild(input1);
    let input2 = document.createElement("input");
    input2.type = "email";input2.placeholder = "Email";
    mailContact.appendChild(input2);
    let input3 = document.createElement("input");
    input3.type = "text"; input3.placeholder = "Write Message";
    mailContact.appendChild(input3);
}





BuildFunc();

