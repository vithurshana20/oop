"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
class circle {
    constructor() {
        this.radius = 1;
    }
    setRadius(r) {
        this.radius = r;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
exports.circle = circle;
//# sourceMappingURL=circle.js.map