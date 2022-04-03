$(document).ready(() => {
    let s1 = document.getElementById('squares1');
    let s2 = document.getElementById('squares2');
    for (i = 0; i < 5; i++) {
        let square1 = document.createElement("div");
        square1.id = 'sqr1'
        s1.appendChild(square1);
        s2.appendChild(square1);
        
        let square2 = document.createElement("div");
        square2.id = 'sqr2';
        s1.appendChild(square2);
        s2.appendChild(square2);

        let square3 = document.createElement("div");
        square3.id = 'sqr3';
        s1.appendChild(square3);
        s2.appendChild(square3);

        let square4 = document.createElement("div");
        square4.id = 'sqr4';
        s1.appendChild(square4);
        s2.appendChild(square4);
     }
     
    }
);