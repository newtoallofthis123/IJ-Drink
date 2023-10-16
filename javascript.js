// small cups is list
const smallCups = document.querySelectorAll('.cup-small')
// listers is a ele
const listers = document.getElementById('liters')
// percentage is the lower div
const percentage = document.getElementById('percentage')
// remained in the upper div
const remained = document.getElementById('remained')

// TODO
updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

// handles visual ascept
function highlightCups(idx) {
    // handles if all the cups are full
    // we want to start reducting instead of adding
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
    // If it is normal condition, we just want to deduct
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    // adding condictions 0, 1, 2, 3, 4
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
