
document.addEventListener('DOMContentLoaded', () => {
    const d6 = () => {
        let roll = Math.floor(Math.random() * 6) + 1
        return roll
    }
    //let arr = []
   `` const diceRoll = () => {
        const input = Number(document.querySelector('#input-num').value)
        const output = document.querySelector('#sum-para')
        const outputDice = document.querySelector('#dice-para')
        const outputHistory = document.querySelector('#output-sum-history')

        //make the dice
        // const d1 = String.fromCodePoint(0x2680)
        // const d2 = String.fromCodePoint(0x2681)
        // const d3 = String.fromCodePoint(0x2682)
        // const d4 = String.fromCodePoint(0x2683)
        // const d5 = String.fromCodePoint(0x2684)
    
        // const d6 = String
        let arr = []
        console.log(`${arr} arr before loop`)
        const inputReset = document.getElementById('dice-para')
        inputReset.value = ''
        for (let i = 0; i < input; i++) {
            let roll = d6()
            switch (roll) {
                case 1:
                    
                    outputDice.textContent += String.fromCodePoint(0x2680)
                    console.log(`d1 here`)
                    break;
                case 2:
                    outputDice.textContent += String.fromCodePoint(0x2681)
                    console.log(`d2 here`)
                    break;
                case 3:
                    outputDice.textContent += String.fromCodePoint(0x2682)
                    console.log(`d3 here`)
                    break;
                case 4:
                    outputDice.textContent += String.fromCodePoint(0x2683)
                    console.log(`d4 here`)
                    break;
                case 5:
                    outputDice.textContent += String.fromCodePoint(0x2684)
                    console.log(`d5 here`)
                    break;
                case 6:
                    outputDice.textContent += String.fromCodePoint(0x2685)
                    console.log(`d6 here`)
                    break;
            }
            arr.push(roll)
            console.log(`${arr} arr after loop`)
        }
        
        const sum = arr.reduce((a, b) => a + b)
        console.log(`${sum} sum here `)
        
        output.textContent = `Sum = ${sum}`
   }
})
























