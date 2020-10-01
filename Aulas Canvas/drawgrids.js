export default function drawGrids(canvas, context){
    for(let x = 0; x < canvas.width; x+=10){
    if(x%50==0){
        context.fillStyle = '#2ecc71'
        context.font = "15px Courrier"
        context.fillText(x, x, 10)
    }
    context.beginPath()
    context.moveTo(x, 0)
    context.lineTo(x, canvas.height)
    context.strokeStyle = '#2ecc71'
    context.lineWidth = (x%50 ==0)? 1 : 0.25
    context.stroke()
    }
    for(let y = 0; y < canvas.height; y+=10){
        if(y%50==0){
            context.fillStyle = '#2ecc71'
            context.font = "15px Courrier"
            context.fillText(y, 0, y+10)
        }
        context.beginPath()
        context.moveTo(0, y)
        context.lineTo(canvas.width, y)
        context.strokeStyle = '#2ecc71'
        context.lineWidth = (y%50 ==0)? 1 : 0.25
        context.stroke()
    }
}