//const amount = document.querySelector('#dice-number').value
const roll = (x) => {
    let dice = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
    let results = '';    
    for (let i = 0; i < x; i++) {
        results += dice[Math.floor(Math.random()*6)] + ' ';
    }
    //console.log(results)
    return results;
}

//const rolled = roll(3)
//console.log(rolled)

//const amount = document.getElementById('dice-number').value
const doRoll = (amount, result) => {
    console.log(`${amount},${result} <- dice-number, dice-roll-result `)
    document.getElementById(result).innerHTML =
        console.log(roll(parseInt(document.getElementById(amount).value)));
    
}

