

// Carrosel

// const lista = new SimpleLinkedList()


let slideAtual = 0;

let slideAtualEquipe = 0;

const slides = document.querySelectorAll(".carrosel")

// slides.forEach((slide => {
//     lista.add(slide)
// }))

// function paraCada(lista, func){
//     for(let i = 0; i<lista.length ; i++){
//         func(lista[i])
//     }
// }

// paraCada(slides, (a) => {
//     lista.add(a)
// })

// só nois dois no meio do ba



const slide0 = document.querySelector("#slide0")

const slide1 = document.querySelector('#slide1')

const leftArrow = document.querySelector("#leftArrowNews")

const rightArrow = document.querySelector("#rightArrowNews")


leftArrow.addEventListener('click', () => {

    if(slideAtual == 2){
                    slideAtual--
 slides.forEach((slide => {
            slide.style.transition = 'transform 200ms'
            slide.style.transform = "translate(-100%)"
            
         }))

    }
    else if(slideAtual == 1){
                            slideAtual--
 slides.forEach((slide => {
            slide.style.transition = 'transform 200ms'
            slide.style.transform = "translate(0%)"
            
         }))
        

    }
    else{
        slideAtual = 2
 slides.forEach((slide => {
            slide.style.transition = 'transform 200ms'
            slide.style.transform = "translate(-200%)"
            
         }))
    }

    
})




rightArrow.addEventListener('click', () => {
 
        // lista.next()
         if(slideAtual == 0){
            slideAtual++
 slides.forEach((slide => {
            slide.style.transition = 'transform 200ms'
            slide.style.transform = "translate(-100%)"
            
         }))

         }  
         else if(slideAtual == 1){
             slideAtual++
 slides.forEach((slide => { 
            slide.style.transition = 'transform 200ms'
            slide.style.transform = "translate(-200%)"
            
         }))

         }

         else{
            slideAtual = 0
 slides.forEach((slide => { 
            slide.style.transition = 'transform 200ms'
            slide.style.transform = "translate(0%)"
            
         }))
         }

         
         

          
        
        
})



// Carrosel equipe 

const slidesCarrosel = document.querySelectorAll(".equipeCarrosel")

const leftArrowTeam = document.querySelector("#leftArrow")

const rightArrowTeam = document.querySelector("#rightArrow")



// leftArrowTeam.addEventListener('click', () => {
//    let click = 1


//    for(i = 1; i < click; click++){}

//    slidesCarrosel.forEach((slide => {
//       slide.style.transition = 'transform 200ms'
//      slide.style.transform = `translate(-${click *10}px)`
//      click++
//    //   slide.style.transform = `translate(-(${calc(click * 10)})px)`
     

//    }))

//    if(slideAtualEquipe == 2){
//       slideAtualEquipe--
// slidesCarrosel.forEach((slide => {
// slide.style.transition = 'transform 200ms'
// slide.style.transform = "translate(-50px)"

// }))

// }
// else if(slideAtualEquipe == 1){
//               slideAtual--
// slidesCarrosel.forEach((slide => {
// slide.style.transition = 'transform 200ms'
// slide.style.transform = "translate(-200px)"

// }))


// }
// else{
// slideAtualEquipe = 2
// slidesCarrosel.forEach((slide => {
// slide.style.transition = 'transform 200ms'
// slide.style.transform = "translate(-100px)"

// }))
// }








// outra lógica, cada vez que clica aumenta a quantidade pra uma direção, cliquei 1x = -50px, cliquei 2x = -100px...


// })












// class SimpleLinkedList{
//     constructor(list=[], current=0){
//         this.list = list
//         this.current = current
//     }

//     renderLeft(){
        
//     }

//     previous(){
//         if(this.current == 0){
//             this.current = this.list.length - 1
//         } else {
//             this.current--
//         }
//         this.renderLeft()
//     }

//     getCurrent(){
//         return this.list[this.current]
//     }

//     next(){
//         if(this.current == this.list.length - 1){
//             this.current = 0
//         } else {
//             this.current++
//         }
//         this.renderRight()
//     }

//     add(data){
//         this.list.push(data)
//     }


// }


