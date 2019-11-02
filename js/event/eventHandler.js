const EventHandler = function(param, screen){
    this.move = function(event){
        console.log("event working...")
        switch(event.keyCode){
            case 65:{   // left
                param(0, '-');
                console.log("a working...")
                screen();
                break;
            }
            case 87:{   // up
                param(1, '-');
                screen();
                break;
            }
            case 68:{   // right
                param(0, '+');
                screen();
                break;
            }
            case 83:{   // down
                param(1, '+');
                screen(); 
                break;
            }
        }
    }
}