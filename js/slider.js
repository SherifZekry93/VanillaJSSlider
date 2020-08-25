const createSlider = (function()
{
    const images = [...document.querySelectorAll(".slider-container img")];

    const sliderLength = images.length

    let currrentSlide = 1;

    const slideNumberElement = document.getElementById("slide-number");

    const next = document.getElementById("next");

    const pev = document.getElementById("prev");

    const indicators = document.getElementById("indicators");

    const pagination = createPaginationList();

    pagination.id ="pagination-ul";

    const allLis = [...document.querySelectorAll("#pagination-ul li")]
    
    
    setButtonsClickEvent();
    
    setIndicatorsClickEvent();

    setCurrentSlide();
    function createPaginationList()
    {
        const ul = document.createElement("ul");
        for(let i =1;i<=sliderLength;i++)
        {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(i))
            ul.appendChild(li);
        }
        indicators.appendChild(ul);
        return ul
    }


    function setButtonsClickEvent()
    {
        next.addEventListener("click",nextSlide);
        prev.addEventListener("click",prevSlide);    
    }


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

    function setIndicatorsClickEvent()
    {
        allLis.forEach(element => {
            element.addEventListener("click",function(){
                currrentSlide = parseInt(this.textContent);
                setCurrentSlide();
            })
        });
    }

  
    function setCurrentSlide()
    {
        slideNumberElement.textContent = `Slide #${currrentSlide} of ${sliderLength}`;
        removeAllActiveClasses();
        setButtonsState();
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
    function setButtonsState()
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

});
createSlider()