const Geometry = {
    randomColor(alpha=1){
        return [Math.random(), Math.random(), Math.random(), alpha];
    },

    setGeometry(gl, positions){
        gl.bufferData(gl.ARRAY_BUFFER, new Float(positions), gl.STATIC_DRAW);
    },

    setRectangle(gl, x, y, width, height){
        console.log("working..");
        var x1 = x;
        var x2 = x + width;
        var y1 = y;
        var y2 = y + height;
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            x1, y1,
            x2, y1,
            x1, y2,
            x1, y2,
            x2, y1,
            x2, y2,
        ]), gl.STATIC_DRAW);
    }
}
