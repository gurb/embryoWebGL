'use strict'

let gl,
    program;

function updateClearColor(...color){
    gl.clearColor(...color);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, 0, 0);
}

/*
function checkKey(event){
    switch(event.keyCode){
        case 49: {  // green -> num 1
            updateClearColor(0.2, 0.8, 0.2, 1.0);
            break;
        }
        case 50: {  // blue -> num 2
            updateClearColor(0.2, 0.2, 0.8, 1.0);
            break;
        }
        case 51: {  // random -> num 3
            updateClearColor(Math.random(), Math.random(), Math.random(), 1.0);
            break;
        }
        case 52: {  // get color -> num 4
            const color = gl.getParameter(gl.CAAAOLOR_CLEAR_VALUE);
            alert(`clearColor = (
                ${color[0].toFixed(1)},
                ${color[1].toFixed(1)},
                ${color[2].toFixed(1)}
            )`);
            window.focus();
            break;
        }
    }
}
*/

async function init(){
    const canvas = utils.getCanvas('webgl-canvas');
    
    gl = utils.getGLContext(canvas);
    program = await utils.getProgram(
        gl, 
        "shader/translation/vertexshader.txt", 
        "shader/translation/fragmentshader.txt"
    );
    
    var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    
    var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    var colorLocation = gl.getUniformLocation(program, "u_color");
    
    var positionBuffer = gl.createBuffer();
    var vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    var size = 2;
    var type = gl.FLOAT;
    var normalize = false;
    var stride = 0;
    var offset = 0;
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

    var translation = [0,0];
    var width = 100;
    var height = 100;
    var color = Geometry.randomColor();
    
    draw();
    function updatePosition(index, way){
        if(way === '+')
            translation[index] += 5;
        else
            translation[index] -= 5;    
    }
    const eventMove = new EventHandler(updatePosition, draw);
    window.onkeydown = eventMove.move;
    
    function draw(){
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.clearColor(0,0,0,0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.useProgram(program);

        gl.bindVertexArray(vao);

        gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        Geometry.setRectangle(gl, translation[0], translation[1], width, height);

        gl.uniform4fv(colorLocation, color);

        var primitiveType = gl.TRIANGLES;
        var offset = 0;
        var count = 6;
        gl.drawArrays(primitiveType, offset, count);
    }
    
}

window.onload = init;
