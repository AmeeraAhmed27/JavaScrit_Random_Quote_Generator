const arrayOfObjects = [
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {'author': 'Oscar Wilde', 
     'quote': 'Always forgive your enemies; nothing annoys them so much.'
    },
    {'author': 'Stephen Chbosky, The Perks of Being a Wallflower', 
     'quote': 'We accept the love we think we deserve'
    },
    {'author': 'Friedrich Nietzsche, Twilight of the Idols', 
    'quote': 'Without music, life would be a mistake.'
    }, 
    {'author': 'Ralph Waldo Emerson', 
    'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
    },
];

function generateQuote(){
    var random = Number.parseInt(Math.random()*arrayOfObjects.length );
    document.querySelector('#quote').innerHTML = `\"${arrayOfObjects[random].quote}\"`;
    document.querySelector('#author').innerHTML = `<span class="my-span">**</span> ${arrayOfObjects[random].author}`;
    
}