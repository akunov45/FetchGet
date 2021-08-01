function Task(prioritet, des, day) {
    this.prioritet = prioritet
    this.des = des
    this.day = day
}

const tasks = [
    new Task(1, "description", 20),
    new Task(4, "description2", 25),
    new Task(9, "description3", 30),
    new Task(20, "des", 5),
    new Task(25, "", 5),
]
// var tResuce = tasks.reduce(function(proritet, current) {
//     // console.log(proritet)
//     console.log(current)
//   return proritet.day > current.day ? proritet : current;
// },)
// console.log(tResuce);
// console.log(tasks.map(function (task){return task.des}))//сюда описание всех задач
// console.log(tasks.filter(function (task){return task.day>20}))//
// console.log(tasks.reduce(function (task,tasks){return task.prio > tasks.prio ? task:tasks}))//


// const taskDes = tasks.map(function (task) {
//     return task.des
// })
// // console.log(taskDes)
// const number = JSON.stringify(Math.random())
// console.log(typeof number)
// const n = number.slice(0,3)
// console.log(n)


// const arr = ["1","2","3","4"]
// let  arrD = [...arr,...arr]
// console.log(arrD)

// let phoneInput = document.querySelector('#kgPhoneInput')
// let validText = document.querySelector('#kgPhoneValidationText')
// let btnChek = document.querySelector('#checkBtn')
// btnChek.addEventListener('click',()=>{
//     // const kgPhoneRegex = new RegExp("\+996\d{3}\d{2}-\d{2}-\d{2}");
//     const kgPhoneRegex = /\+996 \d{3} \d{2}-\d{2}-\d{2}/;
//     const kgPhone = phoneInput.value
//     if (kgPhoneRegex.test(kgPhone)){
//         console.log("salam")
//         validText.innerText = 'OK'
//         validText.classList.add('ok')
//     }else {
//         console.log("ss")
//         validText.innerText='use +996 XXX-XX-XX-XX'
//         validText.classList.add('error')
//     }
// }
let data = []
fetch('https://ghibliapi.herokuapp.com/films')
    .then(respons => respons.json())
    .then((json)=>{
        data = json;
    })
console.log(data)


// const kutman = {
//     name: 'Kutman',
//     age: 27,
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }
// const nagima = {
//     name: 'Nagima',
//     age: 24
// }
// kutman.logInfo.bind(kutman, 'Frontend', '+996502135151')()
// kutman.logInfo.bind(nagima, 'Frontend', '+996502135151')()