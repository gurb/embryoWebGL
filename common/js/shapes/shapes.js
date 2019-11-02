const Shape = function(){   
    // G
    this.gShape = function(x, y){
        var thickness = 30.0;
        var width = 10.0;
        var height = 10.0;
        var gPositions = [
            x, y,
            x + thickness, y,
            x, y + height,
            x, y + height,
            x + thickness, y,
            x + thickness, y + height,
            
            x, y + height,
            x + width, y + height,
            x , y + thickness + height,
            x , y + thickness + height, 
            x + width, y + height,
            x + width, y + thickness + height,
    
            x, y + thickness + height,
            x, y + thickness + height * 2,
            x + thickness, y + thickness + height,
            x + thickness, y + thickness + height,
            x, y + thickness + height * 2,
            x + thickness, y + thickness + height * 2,
    
            x + thickness * 2/3, y + thickness * 2/3,
            x + thickness, y + thickness * 2/3,
            x + thickness * 2/3, y + thickness * 4/3,
            x + thickness * 2/3, y + thickness * 4/3,
            x + thickness, y + thickness * 2/3,
            x + thickness, y + thickness * 4/3,
        ];
        console.log(gPositions)
        return gPositions;
    }    
}