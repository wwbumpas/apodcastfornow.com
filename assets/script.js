/*! Grained.js 
* Author : Sarath Saleem  - https://github.com/sarathsaleem 
* MIT license: http://opensource.org/licenses/MIT 
* GitHub : https://github.com/sarathsaleem/grained 
* v0.0.1 
*/
!function(a,b){"use strict";function c(a,c){function d(a,b,c,d){var e="";e=b.length?b+"{"+c+"}":c,"insertRule"in a?a.insertRule(e,d):"addRule"in a&&a.addRule(b,c,d)}var e=null,f=null,g=null;if("string"==typeof a&&(e=b.getElementById(a.split("#")[1])),!e)return void console.error("Grained: cannot find the element with id "+a);f=e.id,"absolute"!==e.style.position&&(e.style.position="relative"),e.style.overflow="hidden";var h=["","-moz-","-o-animation-","-webkit-","-ms-"],i={animate:!0,patternWidth:100,patternHeight:100,grainOpacity:.1,grainDensity:1,grainWidth:1,grainHeight:1,grainChaos:.5,grainSpeed:10};Object.keys(c).forEach(function(a){i[a]=c[a]});for(var j=function(){var a=b.createElement("canvas"),c=a.getContext("2d");a.width=i.patternWidth,a.height=i.patternHeight;for(var d=0;d<i.patternWidth;d+=i.grainDensity)for(var e=0;e<i.patternHeight;e+=i.grainDensity){var f=256*Math.random()|0;c.fillStyle="rgba("+[f,f,f,i.grainOpacity].join()+")",c.fillRect(d,e,i.grainWidth,i.grainHeight)}return a.toDataURL("image/png")},k=j(),l="",m=["0%:-10%,10%","10%:-25%,0%","20%:-30%,10%","30%:-30%,30%","40%::-20%,20%","50%:-15%,10%","60%:-20%,20%","70%:-5%,20%","80%:-25%,5%","90%:-30%,25%","100%:-10%,10%"],n=h.length;n--;){l+="@"+h[n]+"keyframes grained{";for(var o=0;o<m.length;o++){var p=m[o].split(":");l+=p[0]+"{",l+=h[n]+"transform:translate("+p[1]+");",l+="}"}l+="}"}var q=b.getElementById("grained-animation");q&&q.parentElement.removeChild(q);var r=b.createElement("style");r.type="text/css",r.id="grained-animation",r.innerHTML=l,b.body.appendChild(r);var s=b.getElementById("grained-animation-"+f);s&&s.parentElement.removeChild(s),r=b.createElement("style"),r.type="text/css",r.id="grained-animation-"+f,b.body.appendChild(r);var t="background-image: url("+k+");";if(t+='position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;',n=h.length,i.animate)for(;n--;)t+=h[n]+"animation-name:grained;",t+=h[n]+"animation-iteration-count: infinite;",t+=h[n]+"animation-duration: "+i.grainChaos+"s;",t+=h[n]+"animation-timing-function: steps("+i.grainSpeed+", end);";g="#"+f+"::before",d(r.sheet,g,t)}a.grained=c}(window,document);



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
  '03019',
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

if ($('#grained')) {
  var options = {
    "animate": true,
    "patternWidth": 335.72,
    "patternHeight": 215.09,
    "grainOpacity": 0.05,
    "grainDensity": 5.21,
    "grainWidth": 6.54,
    "grainHeight": 5.21
  }
  grained("#grained", options);
}

if ($('.container-fluid-default').length) {
  $('.navbar').addClass('navBackgroundVisible');
}

$(window).scroll(function() {
  if ($('.container-fluid-home').length) {
    if ($(window).scrollTop() > 100 ) {
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