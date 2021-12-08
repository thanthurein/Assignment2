const avg = (a,b,c) => (a + b + c)/3;

const mgmgOfAvg = avg(96,50,35);
const aungaungOfAug = avg(84,78,98);
if(mgmgOfAvg >= 2 * aungaungOfAug){
    console.log(`Mg Mg is winner(${mgmgOfAvg} vs ${aungaungOfAug})`)
}else if(aungaungOfAug >= 2 * mgmgOfAvg){
    console.log(`Aung Aung is winner ${aungaungOfAug} vs ${mgmgOfAvg}`)
}else {
    console.log(`No team!`)
}