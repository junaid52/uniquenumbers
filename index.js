const body = document.querySelector('body');
const shapes = document.querySelector('#shapes');
const uniqueNumbersArray = [];
const elementsArray = [];
function closureFuncGenerator() {
    
    let randomArray = [];
    const random = (max) => {
        
        if(randomArray.length === 0) {
            const randomNumber1 = Math.floor(Math.random() * (max + 1));
            randomArray.push(randomNumber1);
            return randomNumber1;
        }
        let checkIt = false;
        let randomNumber;
        
        for(let i = 0; i >= 0; i++) {
            
            randomNumber = Math.floor(Math.random() * (max + 1));
            if(randomNumber === max) {
                randomNumber++;
            }
            
            for(let j = 0; j < randomArray.length; j++) {
                if(randomArray[j] === randomNumber) {
                    checkIt = true;
                    break;
                }
            }
            if(checkIt) {
                checkIt = false;
            }
            else {
                randomArray.push(randomNumber);
                break;
            }
        }
        return randomNumber;
    }
    return random;
}


const uniqueValueGenerator = closureFuncGenerator();
body.style.backgroundColor = `rgb(${uniqueValueGenerator(255)}, ${uniqueValueGenerator(255)}, ${uniqueValueGenerator(255)})`;
for(let i = 0; i < 20; i++) {
    const newElement = document.createElement('div');
    newElement.classList.add('shape');
    newElement.style.backgroundColor = `rgb(${uniqueValueGenerator(255)}, ${uniqueValueGenerator(255)}, ${uniqueValueGenerator(255)})`;
    shapes.appendChild(newElement);
    
}

