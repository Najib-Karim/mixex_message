const randNum = num =>{
    return Math.floor(Math.random()*num)
};

const wisdomCollecting = {
    wisdomInfo: ['Pursue Passion More Than Profit', 'Hard Work Beats Talent ', 'Excellence, Not Perfection', 'Big is Little and Little is Big', 'You Choose Your Spouse, Not Your Child'],
    fortuneInfo: ['Good Luck', 'Unlucky', 'ok luck', 'great luck', 'terrible luck'],
    funInfo: ['When nothing is going right, go left.', 'Lottery: a tax on people who are bad at math.','Why was six scared of seven? Because seven “ate” nine','My windows aren\’t dirty, my dog is painting.', 'I solemnly swear that I am up to no good'
]
};

let message = []

for (let m in wisdomCollecting){
    let randIndex = randNum(wisdomCollecting[m].length)
    switch (m){
        case 'wisdomInfo':
            message.push(`Quote of the day is: ${wisdomCollecting[m][randIndex]}`)
            break;
        case 'fortuneInfo':
            message.push(`You are having ${wisdomCollecting[m][randIndex]} today`)
            break;
        case 'funInfo':
            message.push(`Did you know: ${wisdomCollecting[m][randIndex]}`)
            break;
        default:
            message.push('No comment for today')
    }
};

function formatMessage(wisdom){
    const formatted = message.join('\n')
    console.log(formatted)
}
formatMessage(message) 