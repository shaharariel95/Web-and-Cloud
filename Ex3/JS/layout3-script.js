$(document).ready(() => {
    let s = document.getElementById('squares');
    let j = 8;

    if (window.innerWidth > 769) {
        let sec1 = document.createElement("section");
        let sec2 = document.createElement("section");
        sec1.id = 'squares1';
        sec2.id = 'squares2';
        s.appendChild(sec1);
        s.appendChild(sec2);
        for (i = 0; i < j; i++) {
            let square1 = document.createElement("div");
            square1.id = 'sqr1'
            sec1.appendChild(square1);

            let square2 = document.createElement("div");
            square2.id = 'sqr2';
            sec1.appendChild(square2);

            let square3 = document.createElement("div");
            square3.id = 'sqr3';
            sec1.appendChild(square3);

            let square4 = document.createElement("div");
            square4.id = 'sqr4';
            sec1.appendChild(square4);
        }
        for (i = 0; i < j; i++) {
            let square1 = document.createElement("div");
            square1.id = 'sqr1'
            sec2.appendChild(square1);

            let square2 = document.createElement("div");
            square2.id = 'sqr2';
            sec2.appendChild(square2);

            let square3 = document.createElement("div");
            square3.id = 'sqr3';
            sec2.appendChild(square3);

            let square4 = document.createElement("div");
            square4.id = 'sqr4';
            sec2.appendChild(square4);
        }
        
    }
    else {
        for (i = 0; i < j; i++) {
            let square1 = document.createElement("div");
            square1.id = 'sqr1'
            s.appendChild(square1);

            let square2 = document.createElement("div");
            square2.id = 'sqr2';
            s.appendChild(square2);

            let square3 = document.createElement("div");
            square3.id = 'sqr3';
            s.appendChild(square3);

            let square4 = document.createElement("div");
            square4.id = 'sqr4';
            s.appendChild(square4);
        }
    }
}
);