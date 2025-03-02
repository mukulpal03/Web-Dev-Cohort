const carouselTrack = document.querySelector('#carouselTrack');
const caption = document.querySelector('#caption');
const autoPlayButton = document.querySelector('#autoPlayButton');
const timerDisplay = document.querySelector('#timerDisplay');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const carouselNav = document.querySelector('#carouselNav');

const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

let imageIndex = 0;
let timerId;
let timerFlag = false;
let timerDisplayId;

let image = document.createElement('img')
image.classList.add('carousel-slide')

image.src = images[imageIndex].url
caption.innerHTML = images[imageIndex].caption
carouselTrack.appendChild(image)

images.forEach((image) => {
  const carouselIndicator = document.createElement('div')
  carouselIndicator.classList.add('carousel-indicator')
  carouselNav.appendChild(carouselIndicator)
})

const carouselIndicators = document.querySelectorAll('.carousel-indicator')

carouselIndicators[0].classList.add('active')

nextButton.addEventListener('click', () => {
  imageIndex++
  if(imageIndex < 4) {
    image.src = images[imageIndex].url
    caption.innerHTML = images[imageIndex].caption
  }
  if(imageIndex > 3) {
    imageIndex = 0
    image.src = images[imageIndex].url
    caption.innerHTML = images[imageIndex].caption
  }

  carouselIndicators.forEach((indicator, idx) => {
    if(idx === imageIndex) {
      indicator.classList.add('active')
    } else {
      indicator.classList.remove('active')
    }
  })
})

prevButton.addEventListener('click', () => {
  imageIndex--
  
  if(imageIndex < 0) {
    imageIndex = 3
    
    image.src = images[imageIndex].url
    caption.innerHTML = images[imageIndex].caption
  }
  if(imageIndex >= 0) {
    image.src = images[imageIndex].url
    caption.innerHTML = images[imageIndex].caption
  }

  carouselIndicators.forEach((indicator, idx) => {
    if(idx === imageIndex) {
      indicator.classList.add('active')
    } else {
      indicator.classList.remove('active')
    }
  })
})

autoPlayButton.addEventListener('click', () => {

    let timerDisplayCount = 5

    timerDisplay.textContent = `Next Slide in ${timerDisplayCount}s`

    if(timerDisplayId) {
      clearInterval(timerDisplayId)
      timerDisplayId = null
      timerDisplay.textContent = ''
    } else {
      timerDisplayId = setInterval(() => {
        timerDisplayCount--
        timerDisplay.textContent = `Next Slide in ${timerDisplayCount}s`
        if(timerDisplayCount === 0) {
          timerDisplayCount = 6
        }
      }, 1000)
    }

    if(timerId) {
      clearInterval(timerId)
      timerId = null
    } else {
      timerId = setInterval(() => {
      
        imageIndex++
      if(imageIndex < 4) {
        image.src = images[imageIndex].url
        caption.innerHTML = images[imageIndex].caption
      }
      if(imageIndex > 3) {
        imageIndex = 0
        image.src = images[imageIndex].url
        caption.innerHTML = images[imageIndex].caption
      }
    
      carouselIndicators.forEach((indicator, idx) => {
        if(idx === imageIndex) {
          indicator.classList.add('active')
        } else {
          indicator.classList.remove('active')
        }
      })
      }, 6000)
    }

    timerFlag = !timerFlag
  
  autoPlayButton.textContent === "Stop Auto Play" ? autoPlayButton.textContent = "Start Auto Play" : autoPlayButton.textContent = "Stop Auto Play"
})