export default function drawPacman(context, x, y, radius, inicio, fim){
    context.beginPath()
    context.arc(x,y, radius, inicio, fim)
    context.lineTo(200,200)
    context.fillStyle = 'yellow'
    context.fill()
}