const quoteCont = document.querySelector('.quote-container')
console.log(quoteCont);
const quote = document.querySelector('.text')
console.log(quote);
const author = document.querySelector('.author')
console.log(author);
const button = document.querySelector('#next-quote')
console.log(button);


let quotesArray = [
    ["“Be yourself; everyone else is already taken.”","Oscar Wilde"],
    ["“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”","Marilyn Monroe"],
    ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","Albert Einstein"]
]
button.addEventListener('click', (e)=>{
    console.log(quotesArray[2][1])
    let i = Math.floor(Math.random()*quotesArray.length);
    console.log(i);
    quote.innerText= quotesArray[i][0]
    author.innerText= quotesArray[i][1];
    quote.classList.add('text-animation')
    author.classList.add('text-animation')

})