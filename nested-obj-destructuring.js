const company = {
    name:'Webdevelopere.com',
    ceo:{
        id:1,
        name:'Pappu kumar',
        food:'Vegatable',
    },
    web:{
        work:'Website development',
        employ:25,
        frameowrk:'React js',
        tech:{
            first:'HTML',
            second:'CSS',
            third:'Tailwind',
            forth:'JavaScript'
        }
    }
}


// Old way destructuring
const comName = company.name;
const ceoName = company.ceo.name;
const webWork = company.web.work;
const webTech = company.web.tech.third;
console.log(comName, ceoName, webWork, webTech)

//ES6 way destructuring
const {name} = company.ceo
const {work} = company.web
const {third} = company.web.tech
console.log(name, work, third)