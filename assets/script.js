$(function() {

// Thanks to Justin Windle for posting this scrambler:
// https://codepen.io/soulwire/pen/mErPAK
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrases = [
  'Now',
  '2019',
  'Lunarpunks',
  'Hauntologists',
  'Now',
  'Artists',
  '浮世',
  'AI',
  'Sonderers',
  'Climates',
  '02219',
  'Internet Citizens',
  'Solastalgia',
  'Now',
  'Anthropocenes',
  'Makers',
  'You',
  'Solarpunks',
  '⁂',
  'Now',  
  'The Hopeful',
  'Ellipsism',
  'Exulansis',
  '&#19932;'
]

if ($('.tagline').length) {
  const el = document.querySelector('.tagline');
  const fx = new TextScramble(el);

  let counter = 0;
  const next = () => {
    fx.setText('A Podcast For ' + phrases[counter]).then(() => {
      setTimeout(next, 800);
    })
    counter = (counter + 1) % phrases.length;
  }

  next();
}

if ($('.container-fluid').length && !$('.container-fluid-home').length ) {
  $('.navbar').addClass('navBackgroundVisible');
}

$(window).scroll(function() {
  if ($('.container-fluid-home').length) {
    if ($(window).scrollTop() > 10) {
      $('.navbar').addClass('navBackgroundVisible');
    } else {
      $('.navbar').removeClass('navBackgroundVisible');
    }
  }
});

$('.button-mobile').on('click', function() {
  if ($('.navbar-collapse').hasClass('show')) {
    $('.navbar').removeClass('navToggleBackgroundVisible');
  } else {
    $('.navbar').addClass('navToggleBackgroundVisible');
  }
});

$('.listen-now').click(function() {
  $('html, body').animate({
    scrollTop: ($('.row-platforms').offset().top - 80)
  },500);
});

});
