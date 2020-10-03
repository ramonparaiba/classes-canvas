export default function drawShip(context, x, y, radius, options){
        options = options || {}

        context.save();
        if(options.guide){
            context.strokeStyle = 'white'
            context.fillStyle = (0,0,0,0.25)
            context.lineWidth = 0.5
            context.beginPath()
            context.arc(x, y, radius, 0, 2*Math.PI)
            context.stroke()
            context.fill()
        }
        context.lineWidth = options.lineWidth || 2
        context.strokeStyle = options.strok || 'white'
        context.fillStyle = options.fill || 'black'
        let angle = (options.angle || 0.5 * Math.PI) / 2
        context.beginPath()
        context.moveTo(x+radius, y)
        context.lineTo(
            x + Math.cos(Math.PI - angle) * radius,
            y + Math.sin(Math.PI - angle) * radius  
        )
        context.lineTo(
            x + Math.cos(Math.PI + angle) * radius,
            y + Math.sin(Math.PI + angle) * radius
        )

        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
    }