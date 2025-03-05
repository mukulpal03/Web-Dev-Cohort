const accordianItems = document.querySelectorAll('.accordion-button')

accordianItems.forEach((accordianItem, idx) => {
    accordianItem.addEventListener('click', (e) => {
        let accordianContents = document.querySelectorAll('.accordion-content')
        let arrows = document.querySelectorAll('.arrow')
        let visibleEle = accordianContents[idx]
        visibleEle.classList.toggle('visible')

        arrows.forEach((arrow) => {
            if(!arrow[idx]) {
                arrow.textContent = '↓'
            }
        })
        
        if(visibleEle.classList.contains('visible')) {
            visibleEle.style.height = '80px'
            arrows[idx].textContent = '↑'
            accordianContents.forEach((accordianContent) => {
                if(accordianContent !== visibleEle) {
                    accordianContent.style.height = '0px'
                    accordianContent.classList.remove('visible')
                }
            })
        } else {
            visibleEle.style.height = '0px'
            visibleEle.classList.remove('visible')
            arrows[idx].textContent = '↓'
        }
    })
})