/* =============== Typing Annimations ================== */
const typed = new Typed('.typing', 
{
  strings: ["", "Sofware Engineer", "Software Developer", "Freelancer", "ML Enthusiast", "Spritual Seeker!"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      allSection = document.querySelectorAll('.section')

for (let i=0; i<navList.length; i++) 
{
  const a = navList[i].querySelector('a')
  a.addEventListener('click', function() 
  {
    removeBackSection()
    for( let j=0; j<navList.length; j++)
    {
      if( navList[j].querySelector('a').classList.contains('active')) 
      {
        addBackSection(j)
      }
      navList[j].querySelector('a').classList.remove('active')
    }
    this.classList.add('active')
    showSection(this)
    if(window.innerWidth < 1200)
    {
      asideSectionTooglerBtn()
    }
  })
}

function addBackSection(num)
{
  allSection[num].classList.add('back-section')
}

function removeBackSection()
{
  for (let i=0; i<allSection.length; i++)
  {
    allSection[i].classList.remove('back-section')
  }
}

function showSection(element) 
{
  const target = element.getAttribute('href').split('#')[1]
  for (let i=0; i<allSection.length; i++)
  {
    allSection[i].classList.remove('active')
  }
  document.querySelector('#'+target).classList.add('active')
}

function updateNav(element)
{
  // console.log(element)
  for(let i=0; i<navList.length; i++) 
  {
    navList[i].querySelector('a').classList.remove('active')
    const target = element.getAttribute('href').split('#')[1]
    if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1])
    {
      navList[i].querySelector('a').classList.add('active')
    }
  }
  
  // document.querySelector('#'+target).classList.add('active')
}

document.querySelector('.hire-me').addEventListener('click', function() 
{
  const sectionIndex = this.getAttribute('data-section-index')
  // console.log(sectionIndex)
  showSection(this)
  updateNav(this)
  removeBackSection()
  addBackSection(sectionIndex)
})

const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside')

navTogglerBtn.addEventListener('click', () => 
{
  asideSectionTooglerBtn()
})

function asideSectionTooglerBtn()
{
  aside.classList.toggle('open')
  navTogglerBtn.classList.toggle('open')
  for (let i=0; i<allSection.length; i++) 
  {
    allSection[i].classList.toggle('open')
  }
}

(function() {
  emailjs.init('xgrsf4AAkaOiV4IQu');
})();

window.onload = function() {
  showSection(navList[0].querySelector('a'))
  document.querySelector('.contact-form').addEventListener('submit', function(event) {
      event.preventDefault()
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              document.querySelector('#face-smile').classList.add('hidden')
              document.querySelector('#face-grin').classList.remove('hidden')
              document.querySelector('.contact-form').reset()
          }, function(error) {  
              document.querySelector('#face-smile').classList.add('hidden')
              document.querySelector('#face-frown-open').classList.remove('hidden')
          });
  });
}
