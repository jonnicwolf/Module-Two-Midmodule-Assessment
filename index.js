// const inputArr = []
// const numberSnek = () => {
//     const input = Number(document.querySelector('#number-statistics-number-input').value);
//     const ul = document.querySelector('#number-statistics-numbers')
//     let avg = document.querySelector('#number-statistics-average')
//     let max = document.querySelector('#number-statistics-maximum')
//     let min = document.querySelector('#number-statistics-minimum')

//     inputArr.unshift(input)
//     let li = document.createElement('li')    
//     li.textContent = input
//     ul.appendChild(li)

//     let sorter = inputArr.sort((lo, hi) => { return hi - lo })     

//     max.textContent = `Maximum: ${sorter[0]}`
//     min.textContent = `Minimum: ${sorter[sorter.length - 1]}`    
//     avg.textContent = `Average: ${sorter.reduce((a, b) => { return (a + b) })/sorter.length}`    
// }
//document.addEventListener('DOMContentLoaded', () => {    
    let arr = []
    const diceRoll = () => {
        const input = Number(document.querySelector('#input-num').value)
        const output = document.querySelector('#sum-para') 
        const outputDice = document.querySelector('#dice-para')
        const outputHistory = document.querySelector('#output-sum-history')
        
        const d6 = () => {
            let roll = Math.floor(Math.random() * 6) + 1
            return roll
        }
        const d1 = String.fromCodePoint(0x2680)
        const d2 = String.fromCodePoint(0x2681)
        const d3 = String.fromCodePoint(0x2682)
        const d4 = String.fromCodePoint(0x2683)
        const d5 = String.fromCodePoint(0x2684)
        const d6 = String
        //let arr = []    
        for (let i = 0; i < input; i++) {
            let roll = d6()
            switch (roll) {                
                case 1:
                    outputDice.textContent = String.fromCodePoint(0x2680)
                    break;
                case 2:
                    outputDice.textContent += String.fromCodePoint(0x2681)
                    break;
                case 3:
                    outputDice.textContent += String.fromCodePoint(0x2682)
                    break;
                case 4:
                    outputDice.textContent += String.fromCodePoint(0x2683)
                    break;
                case 5:
                    outputDice.textContent += String.fromCodePoint(0x2684)
                    break;
                case 6:
                    outputDice.textContent += String.fromCodePoint(0x2685)
                    break;
            }
            arr.push(roll)
          //if (){
          //       
          //}
        }
        //let log = []
        const sum = arr.reduce((a, b) => a + b)
        //log.unshift()
        output.textContent = `Sum = ${sum}`
    }
//})
























