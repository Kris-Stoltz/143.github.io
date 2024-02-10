const no_btn = document.getElementById('no_btn')
const headline = document.getElementById('headline')
const yes_btn = document.getElementById('yes_btn')


var count = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function lastTime() {
    headline.innerText = 'Done with your shit?'

    await sleep(5000)

    headline.innerText = 'Will You Be My Valentine?'
    yes_btn.classList.remove('yes_btn')
    yes_btn.classList.add('center_yes')

    yes_btn.style.display = 'block'
}

yes_btn.addEventListener('click', yesPressed)


async function yesPressed () {
    yes_btn.style.display = 'None'
    no_btn.style.display = 'None'

    headline.innerText = 'Yayyy'

    await sleep(2000)

    headline.innerText = 'I love you <3'
}

no_btn.addEventListener('mouseover', function() {
    no_btn.style.position = 'absolute'

    no_btn.style.top = Math.floor(Math.random() * (800 - 100 + 1)) + 100 + 'px'
    no_btn.style.left = Math.floor(Math.random() * (1500 - 100 + 1)) + 100 + 'px'

    count += 1
    if (count === 2) {
        headline.innerText = 'Seriously?'
    }

    if (count === 3) {
        headline.innerText = "You're still trying?"
    }

    if (count === 4) {
        headline.innerText = "Now you're just being mean."
    }

    if (count === 5) {
        headline.innerText = 'Fine, forget I asked.'
        yes_btn.style.display = 'None'
        no_btn.style.display = 'None'


        setTimeout(lastTime, 5000)

    }
})