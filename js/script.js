



// Raderna

let body = document.querySelector('body'); 
const colors = ["#b6fbb6","#b6fbcd", "#b6fbe4", "#b6fbfb", "#b6e4fb"]; 

for(let i = 0; i <= 5; i++){
    let container = document.createElement('div'); 
    container.style.cssText = `
        text-align: center;
        font-size: calc(2rem * (${i} / 2));
        font-weight: bold;
        color:#6e6ef7;
        margin-bottom: calc(2rem * (${i} / 2)); 
        background: ${colors[i - 1]};
    `;

    body.append(container)
    container.innerHTML = "Rad " + `${[i]}`;   
}

//Boxarna

let boxContainer = document.createElement('div');  

//Box 1

let box1 = document.createElement('div'); 

for(let i = 0; i <= 9; i++){
    let box = document.createElement('div'); 

    box1.style.cssText = `
    width: 3rem;
    padding: 10px; 
    background: #a8a8f0
    `
    if(i % 2 === 0){
        box.style.cssText = `
            background: black; 
            color: white;
         `;
    } else {
        box.style.cssText = `
         background: white
    `;
    }

    if(i === 4){
        box.style.background = "none"
    }

    box.innerHTML = i; 
    box1.append(box);
    boxContainer.append(box1);
    body.append(boxContainer);
    
}

//Box 2

let box2 = document.createElement('div'); 

for(let i = 9; i >= 0; i--){
    let box = document.createElement('div'); 

    box2.style.cssText = `
    width: 3rem;
    text-align: center;
    padding: 10px; 
    background: #a8a8f0
    `
    
    if(i % 2 === 0){
        box.style.cssText = `
        background: black; 
            color: white;
            
         `;
    } else {
        box.style.cssText = `
         background: white
    `;
    }

    if(i === 8){
        box.style.background = "none"
    }


    box.innerHTML = i; 
    box2.append(box);
    boxContainer.append(box2);
    body.append(boxContainer);
}
 
//Box 3

let box3 = document.createElement('div'); 
const numbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]; 

for(let i = 0; i <= 9; i++){
    let box  = document.createElement('div'); 

    box3.style.cssText = `
    width: 3rem;
    text-align: right;
    padding: 10px; 
    background: #a8a8f0
    `
    
    if(i % 2 === 0){
        box.style.cssText = `
        background: black; 
            color: white; 
         `;

    } else {
        box.style.cssText = `
         background: white
    `;
    }

    if(i === 5){
        box.style.background = "none"
    }

    box.innerHTML = numbers[i]; 
    box3.append(box);
    boxContainer.append(box3);
    body.append(boxContainer);
}

boxContainer.style.cssText = `
    display: flex; 
    justify-content: space-evenly;
    border: 1px solid black;
    padding: 4rem;
`;