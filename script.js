'use strict'; 

class Rectangle { // nazwa klasy zawsze z duzej literki 
    constructor (heigth, width){ // odpowiada za zbudowania klasy, w () beda argumenty 
        this.heigth = heigth;
        this.width = width; 
 
    }
    calcArea(){
        return this.heigth * this.width
    }
}

class ColoredRectangelWithText extends Rectangle { // dziedziczenie 
    constructor(height, width, text, bgColor){
        super(height, width); // metoda ktora wylouje super konstruktor rodzica, super zawsze ma byc w pierwszej linii konstruktora 
        this.text = text;
        this.bgColor = bgColor; 
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}`); 
    }
}

const div = new ColoredRectangelWithText(25, 10, "Hello", "red"); 
div.showMyProps();
console.log(div.calcArea()); 

const square = new Rectangle(10, 10);
console.log(square.calcArea());


// miedzy konstruktorem a metodami nie piszemy ; !!!!