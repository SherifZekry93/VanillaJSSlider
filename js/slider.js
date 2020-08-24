const images = [...document.querySelectorAll(".slider-container img")];

const sliderLength = images.length

let currrentSlide = 1;

const slideNumberElement = document.getElementById("slide-number");

const next = document.getElementById("next");

const pev = document.getElementById("prev");



const indicators = document.getElementById("indicators");

const pagination = document.createElement("ul");

pagination.id ="pagination-ul";

for(let i =1;i<=sliderLength;i++)
{
    const li = document.createElement("li");
    li.setAttribute("data-index",i);
    li.appendChild(document.createTextNode(i))
    pagination.appendChild(li);
}

indicators.appendChild(pagination);

const allLis = [...document.querySelectorAll("#pagination-ul li")]

next.addEventListener("click",nextSlide);

prev.addEventListener("click",prevSlide);



function nextSlide()
{
    if(currrentSlide !== sliderLength)
    {
        currrentSlide++;
        setCurrentSlide();
    }
}

function prevSlide()
{
    if(currrentSlide !== 1)
    {
        currrentSlide--;
        setCurrentSlide();
    }
}

function paginationIndicators()
{
    allLis.forEach(element => {
        element.addEventListener("click",function(){
            currrentSlide = parseInt(this.textContent);
            setCurrentSlide();
        })
    });
}

setCurrentSlide();
paginationIndicators();
function setCurrentSlide()
{
    slideNumberElement.textContent = `Slide #${currrentSlide} of ${sliderLength}`;
    removeAllActiveClasses();
    setButtonsDisabledClasses();
    images[currrentSlide - 1].classList.add("active");
    allLis[currrentSlide - 1].classList.add("active");
}
function removeAllActiveClasses()
{

    for(let i =0;i<sliderLength;i++)
    {      
        images[i].classList.remove("active");
        allLis[i].classList.remove("active");
    }
}
function setButtonsDisabledClasses()
{
    if(currrentSlide == 1)
    {
        prev.classList.add("disabled")
    }
    else
    {
        prev.classList.remove("disabled");
    }
    if(currrentSlide == images.length)
    {
        next.classList.add("disabled")
    }
    else
    {
        next.classList.remove("disabled");
    }
}