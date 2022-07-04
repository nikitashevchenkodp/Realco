// Visible menu

function burger(burgerSelector, menuSelector) {
    const burger = document.querySelector(burgerSelector),
        menu = document.querySelector(menuSelector);

    burger.addEventListener('click', () => {
        menu.classList.toggle('show')
    })
}

//Render cards



function housesCards(parentSelector, data) {
    const parent = document.querySelector(parentSelector);

    data.forEach(item => {

        const {image, title, price, adress, bathtub, bed, sqft} = item;

        const card = document.createElement('div')
        card.innerHTML = `
            <div class="houses__cards__item">
                <div class="houses__cards__item--img">
                    <img src=${image} alt="">
                </div>
                <div class="houses__cards__item--info">
                    <h5 class="houses__cards__item--title">${title}</h5>
                    <p class="houses__cards__item--price"> $ ${price} USD</p>
                
                    <div class="houses__cards__item--adress"><span class="material-symbols-outlined">
                        home_pin
                        </span>${adress}</div>
                    <div class="houses__cards__item--details">
                        <div class="houses__cards__item--detail">
                            <span class="material-symbols-outlined">
                                bathtub
                            </span> ${bathtub} 
                        </div>
                        <div class="houses__cards__item--detail">
                            <span class="material-symbols-outlined">
                                bed
                            </span> ${bed} 
                        </div>
                        <div class="houses__cards__item--detail">
                            <span class="material-symbols-outlined">
                                square_foot 
                            </span> ${sqft} sqft
                        </div>
                        
                    </div>
                </div>
            </div>
        `
        parent.append(card)
    })
}

//Entry blocks
function animatedBlocks () {
    const sections = document.querySelectorAll('section')

    sections.forEach((sec) => {
        sec.classList.add('hide')

    })

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show');
            }
    
        })
    }

    const options = {
        threshold: [0.15]
    }

    const observer = new IntersectionObserver( onEntry, options)

    for (let elm of sections) {
        observer.observe(elm);
    }
}





















const data = [
    {
        image: './img/cards/IMAGEhouses_2.png',
        title: 'iny home in San Diego',
        price: '740,000.00',
        adress: '2569 El Segundo, San Diego',
        bathtub: 1,
        bed: 2,
        sqft: 400
    },
    {
        image: './img/cards/IMAGEhouses_2.png',
        title: 'iny home in San Diego',
        price: '740,000.00',
        adress: '2569 El Segundo, San Diego',
        bathtub: 1,
        bed: 2,
        sqft: 400
    },
    {
        image: './img/cards/IMAGEhouses_2.png',
        title: 'iny home in San Diego',
        price: '740,000.00',
        adress: '2569 El Segundo, San Diego',
        bathtub: 1,
        bed: 2,
        sqft: 400
    },
    {
        image: './img/cards/IMAGEhouses_2.png',
        title: 'iny home in San Diego',
        price: '740,000.00',
        adress: '2569 El Segundo, San Diego',
        bathtub: 1,
        bed: 2,
        sqft: 400
    },
    {
        image: './img/cards/IMAGEhouses_2.png',
        title: 'iny home in San Diego',
        price: '740,000.00',
        adress: '2569 El Segundo, San Diego',
        bathtub: 1,
        bed: 2,
        sqft: 400
    },
    {
        image: './img/cards/IMAGEhouses_2.png',
        title: 'iny home in San Diego',
        price: '740,000.00',
        adress: '2569 El Segundo, San Diego',
        bathtub: 1,
        bed: 2,
        sqft: 400
    },
]

burger('.burger__block', '.nav')
housesCards('.houses__cards', data)
animatedBlocks()