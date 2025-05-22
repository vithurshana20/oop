export class circle {
    radius: number = 1;

    setRadius(r: number): void {
        this.radius = r;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}