// Carousel action for popular article
const prevButtonPopularArticle = document.getElementById('prev-button-article')
const nextButtonPopularArticle = document.getElementById('next-button-article')
const wrapperPopularArticle = document.getElementById('wrapper-popular-article')

prevButtonPopularArticle.addEventListener('click', () => {
    wrapperPopularArticle.scrollLeft -= 600
})

nextButtonPopularArticle.addEventListener('click', () => {
    wrapperPopularArticle.scrollLeft += 600
})


// Carousel action for category
const prevButtonPopularCategory = document.getElementById('prev-button-category')
const nextButtonPopularCategory = document.getElementById('next-button-category')
const wrapperPopularCategory = document.getElementById('wrapper-popular-category')

prevButtonPopularCategory.addEventListener('click', () => {
    wrapperPopularCategory.scrollLeft -= 200
})

nextButtonPopularCategory.addEventListener('click', () => {
    wrapperPopularCategory.scrollLeft += 200
})
