const countValue= document.querySelector('#counter');
function increment(){
    //get the value from UI
    // update existing content with innertext in webpage
    let value= parseInt(countValue.innerText);
    //update value
    value=value+1;
    // set the value on UI
    countValue.innerText=value;
};

function decrement(){
    //get the value from UI
    // update existing content with innertext in webpage
    let value= parseInt(countValue.innerText);
    //update value
    value=value-1;
    // set the value on UI
    countValue.innerText=value;
};

