'use strict'

const utils = {
    getCanvas(id){
        const canvas = document.getElementById(id);
        if(!canvas){
            console.error(`There is no canvas with id ${id} on this page.`);
            return null;
        }
        return canvas;
    },

    getGLContext(canvas){
        return canvas.getContext('webgl2') || console.error('WebGL2 is not available in your browser');
    },

    async getShader(gl, path, type){
        var shader = gl.createShader(type);
        var sh = new Shader();
        var shaderString = await sh.get(path);
        gl.shaderSource(shader, shaderString);
        gl.compileShader(shader);
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if(!success){
            console.error("failed compile shader");
            return null;
        }else{
            console.log("Shader created successfully");
        }
        return shader;
    },

    async getProgram(gl, vertexShaderPath, fragmentShaderPath){
        var program = gl.createProgram();
        
        var vertexShader = await this.getShader(gl, vertexShaderPath, gl.VERTEX_SHADER);
        var fragmentShader = await this.getShader(gl, fragmentShaderPath, gl.FRAGMENT_SHADER);

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        
        gl.linkProgram(program);

        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if(!success){
            console.error("failed link program");
            return null;
        }else{
            console.log("Program has created");
        }
        
        return program;
    }
    
};
