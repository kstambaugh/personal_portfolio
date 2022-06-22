function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

class Circle {
    constructor(radius) {
        this.radius = radius
    }
    circumference() {
        return Math.PI * this.radius * 2;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const circleMaker = () => {

}