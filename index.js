var rect = {
    perimeter: (x,y) => 2*(x+y),
    area: (x,y) => x*y
}

function solveRectangle(l,b) {
    console.log("solving for l = "+l+" and b = "+b);

    if(l <= 0 || b <= 0)
    {
        console.log("rectange dimension should be greater than zero");
    }
    else{
        console.log("perimeter of rectangle is "+rect.perimeter(l,b));
        console.log("area of the reactange is "+rect.area(l,b));
    }
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,5);
solveRectangle(-3,5);
