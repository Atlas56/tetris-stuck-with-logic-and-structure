    let blockblue=document.querySelector('.blockblue')
    const containerblock=document.querySelector('.container')
    const createblock=document.createElement("div")
    let xAxis=0
    let yAxis=0
    let  time=1000

    function down(){
        yAxis+=50
        blockblue.style.top=yAxis+'px'
        if(yAxis>900){
            yAxis=900 
            blockblue.appendChild(createblock)
            createblock.classList.add('newblock')
            createblock.classList.add('blockblue')
            blockblue.classList.remove('blockblue')
            createblock.classList.remove('newblock')
        }
    }

    function control(e){
        switch(e.key){
            case 'ArrowLeft':
                console.log('pressed left')
                xAxis-=50
                if(xAxis<-300){
                    xAxis=-300
                }
                console.log(xAxis)
                blockblue.style.left=xAxis+'px'

                break
            case 'ArrowRight':
                console.log('pressed right')
                xAxis+=50
                if(xAxis>350){
                    xAxis=350
                }
                console.log(xAxis)
                blockblue.style.left=xAxis+'px'

                break
            case 'ArrowUp':
                console.log('up')
                yAxis-=50
                console.log(yAxis)
                blockblue.style.top=yAxis+'px'
                counter++;
                NumberOfClicks+=1
                shapeRotate()
                break
            case 'ArrowDown':
                console.log('down')
                yAxis+=50
                if(yAxis>600){
                    yAxis=600
                }
                setInterval(down,time)
                console.log(yAxis)
                blockblue.style.top=yAxis+'px'

                break
            default:
                console.log('what ?')
        }
    }
    document.addEventListener('keydown',control)

    

    const generateShapeBtn=document.querySelector('.btns')
    const rotateShapeBtn=document.querySelector('.rotate-btn')
    generateShapeBtn.addEventListener('click',shapeGen)
    
    function shapeGen(){
    const addShape=document.querySelector('.addshape')
    const addShape2=document.querySelector('.addshape')
    const addShape3=document.querySelector('.addshape')
    const randomnumberArray=[0,1,2]
    const randomnumber=Math.floor(Math.random()*randomnumberArray.length)
    setInterval(down,time)
    if(randomnumber===0){
    
    }else if(randomnumber===1){
    
        shapeDiv=document.createElement('div')
        shapeDiv.classList.add('shape0')
        addShape.appendChild(shapeDiv)
    
        shapeDiv2=document.createElement('div')
        shapeDiv2.classList.add('shape1')
        addShape2.appendChild(shapeDiv2)
    }else if(randomnumber===2){
    
        shapeDiv=document.createElement('div')
        shapeDiv.classList.add('shape0')
        addShape.appendChild(shapeDiv)
    
        shapeDiv2=document.createElement('div')
        shapeDiv2.classList.add('shape1')
        addShape2.appendChild(shapeDiv2)
    
        shapeDiv3=document.createElement('div')
        shapeDiv3.classList.add('shape2')
        addShape3.appendChild(shapeDiv3)
    }
    }
    
    
    rotateShapeBtn.addEventListener('click',shapeRotate)
    let counter=0;
    let NumberOfClicks=0;
    
    //select value and buttons
    
    const btns =document.querySelectorAll(".btn");
    
    btns.forEach(function(btn){
        btn.addEventListener("click",function(e){
    
            const Styles=e.currentTarget.classList;
            if(Styles.contains("increase")){
                counter++;
                NumberOfClicks+=1
            }
        console.log(NumberOfClicks)
        });
    });
    function shapeRotate(){
         shapeDiv.classList.add('shape0')
        const rotate=document.querySelector('.rotate')
        let degreesnum=NumberOfClicks
            if(degreesnum===0){
                console.log('operating')
            }else if(degreesnum===1){
                rotate.classList.add('rotate90')
                console.log('balls1')
            
            }else if(degreesnum===2){
                rotate.classList.add('rotate180')
                console.log('balls2')
            
            }else if(degreesnum===3){
                rotate.classList.add('rotate270')
                console.log('balls3')
            
            }else if(degreesnum===4){
                rotate.classList.add('rotate360')
                console.log('balls3')
            
            }else if(degreesnum===5){
                rotate.classList.add('rotate450')
                console.log('balls2')
            
            }else if(degreesnum===6){
                rotate.classList.add('rotate540')
                console.log('balls3')
            
            }else if(degreesnum===7){
                rotate.classList.add('rotate630')
                console.log('balls3')
            
            }else if(degreesnum===8){
                rotate.classList.add('rotate720')
                console.log('balls3')
            
            }else if(degreesnum===9){
                rotate.classList.add('rotate810')
                console.log('balls2')
            
            }else if(degreesnum===10){
                rotate.classList.add('rotate900')
                console.log('balls3')
            
            }else if(degreesnum===11){
                rotate.classList.add('rotate990')
                console.log('balls3')
            
            }else if(degreesnum===12){
                rotate.classList.add('rotate1080')
                console.log('balls3')
            
            }
    
    
    }
    
    //set initial count
 
