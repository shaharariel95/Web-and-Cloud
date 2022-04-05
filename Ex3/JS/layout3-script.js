$(document).ready(() => {
    let s = document.getElementById('squares');
    let j = 8;
    let pls = document.getElementById('plus');
    if (window.innerWidth > 769) {
        let sec1 = document.createElement("section");
        let sec2 = document.createElement("section");
        sec1.id = 'squares1';
        sec2.id = 'squares2';
        s.appendChild(sec1);
        s.appendChild(sec2);

        let square1 = document.createElement("div");
        square1.className = 'sqr1'
        sec1.appendChild(square1);
        square1.addEventListener("click", opacityChange);

        let square2 = document.createElement("div");
        square2.className = 'sqr2';
        sec1.appendChild(square2);
        square2.addEventListener("click", opacityChange);

        let square3 = document.createElement("div");
        square3.className = 'sqr3';
        sec1.appendChild(square3);
        square3.addEventListener("click", opacityChange);

        let square4 = document.createElement("div");
        square4.className = 'sqr4';
        square4.id = 'this_sqr';
        sec1.appendChild(square4);
        square4.addEventListener("click", opacityChange);

        for (i = 0; i < j - 1; i++) {
            let square1 = document.createElement("div");
            square1.className = 'sqr1'
            square1.addEventListener("click", opacityChange);
            sec1.appendChild(square1);

            let square2 = document.createElement("div");
            square2.className = 'sqr2';
            square2.addEventListener("click", opacityChange);
            sec1.appendChild(square2);

            let square3 = document.createElement("div");
            square3.className = 'sqr3';
            square3.addEventListener("click", opacityChange);
            sec1.appendChild(square3);

            let square4 = document.createElement("div");
            square4.className = 'sqr4';
            square4.addEventListener("click", opacityChange);
            sec1.appendChild(square4);
        }
        for (i = 0; i < j; i++) {
            let square1 = document.createElement("div");
            square1.className = 'sqr1'
            square1.addEventListener("click", opacityChange);
            sec2.appendChild(square1);

            let square2 = document.createElement("div");
            square2.className = 'sqr2';
            square2.addEventListener("click", opacityChange);
            sec2.appendChild(square2);

            let square3 = document.createElement("div");
            square3.className = 'sqr3';
            square3.addEventListener("click", opacityChange);
            sec2.appendChild(square3);

            let square4 = document.createElement("div");
            square4.className = 'sqr4';
            square4.addEventListener("click", opacityChange);
            sec2.appendChild(square4);
        }

    }
    else {
        let square1 = document.createElement("div");
        square1.className = 'sqr1'
        s.appendChild(square1);
        square1.addEventListener("click", opacityChange);

        let square2 = document.createElement("div");
        square2.className = 'sqr2';
        square2.addEventListener("click", opacityChange);
        s.appendChild(square2);

        let square3 = document.createElement("div");
        square3.className = 'sqr3';
        square3.addEventListener("click", opacityChange);
        s.appendChild(square3);

        let square4 = document.createElement("div");
        square4.className = 'sqr4';
        square4.id = 'this_sqr';
        s.appendChild(square4);
        square4.addEventListener("click", opacityChange);

        for (i = 0; i < j; i++) {
            let square1 = document.createElement("div");
            square1.className = 'sqr1'
            s.appendChild(square1);
            square1.addEventListener("click", opacityChange);

            let square2 = document.createElement("div");
            square2.className = 'sqr2';
            s.appendChild(square2);
            square2.addEventListener("click", opacityChange);

            let square3 = document.createElement("div");
            square3.className = 'sqr3';
            s.appendChild(square3);
            square3.addEventListener("click", opacityChange);

            let square4 = document.createElement("div");
            square4.className = 'sqr4';
            s.appendChild(square4);
            square4.addEventListener("click", opacityChange);
        }
    }
    $(pls).on("click", function () {
        let sq = document.getElementById('this_sqr');
        console.log(sq.style.backgroundColor);
        if (sq.style.backgroundColor == "") {
             sq.style.backgroundColor = "darkgreen";
        }
        else if (sq.style.backgroundColor == "darkgreen") {
            sq.style.backgroundColor = "red";
        }
        else if (sq.style.backgroundColor == "red") {
            sq.style.backgroundColor = "black";
        }
        else if (sq.style.backgroundColor == "black") {
            sq.style.backgroundColor = "cyan";
        }
        else if (sq.style.backgroundColor == "cyan") {
            sq.style.backgroundColor = "";
        }


    });
    function opacityChange() {
        if (this.style.opacity == 0) {
            this.style.opacity = 0.25;
        }
        else if (this.style.opacity == 0.25) {
            this.style.opacity = 0.5;
        }
        else if (this.style.opacity == 0.5) {
            this.style.opacity = 0.75;
        }
        else if (this.style.opacity == 0.75) {
            this.style.opacity = 1;
        }
        else if (this.style.opacity == 1) {
            this.style.opacity = 0;
        }

    }
}
);
