// Canvas and context
let c = document.querySelector(`#pong`)
let ctx = c.getContext(`2d`)
let score = document.querySelectorAll("#score div")

// Timer to make the game run at 60fps
let timer = setInterval(main, 1000/60)



// Global friction variable
let fy = .97

// players setups

let players = [new Player("PR1", new Box()), new Player("PR2", new Box())]
let pads = [players[0].pad, players[1].pad]

pads[0].w = 20
pads[0].h = 150
pads[0].x = 0 + pads[0].w/2


pads[1].w = 20
pads[1].h = 150
pads[1].x = c.width - pads[1].w/2

console.log(players)
console.log(pads)
console.log(score)

// Ball setup
let ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`

function main()
{
    // Erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    

    // pads[0] stuff
    // pads[0] accelerates when key is pressed 
    if(keys[`w`])
    {
       pads[0].vy += -pads[0].force
    }

    if(keys[`s`])
    {
        pads[0].vy += pads[0].force
    }

    // Applies friction
    pads[0].vy *= fy
    // Player movement
    pads[0].move();

    // Ball movement
    ball.move()

    // pads[0] collision
    if (pads[0].y < 0+pads[0].h/2)
    {
        pads[0].y = 0+pads[0].h/2
    }
    if (pads[0].y > c.height-pads[0].h/2)
    {
        pads[0].y = c.height-pads[0].h/2
    }

    // pads[1] stuff
    // pads[1] accelerates when key is pressed 
    if(keys[`ArrowUp`])
    {
       pads[1].vy += -pads[1].force
    }

    if(keys[`ArrowDown`])
    {
        pads[1].vy += pads[1].force
    }

    // Applies friction
    pads[1].vy *= fy
    // Player movement
    pads[1].move();

    // Ball movement
    ball.move()

    // pads[1] collision
    if (pads[1].y < 0+pads[1].h/2)
    {
        pads[1].y = 0+pads[1].h/2
    }
    if (pads[1].y > c.height-pads[1].h/2)
    {
        pads[1].y = c.height-pads[1].h/2
    }

    // Ball collision 
    if (ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        players[0].score += 1
        console.log(`${players[0].score} | ${players[1].score}`)
    }
    if (ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y = c.height/2
        players[1].score += 1
        console.log(`${players[0].score} | ${players[1].score}`)
    }
    if (ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if (ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy       
    }

    // pads[0] with ball collision
    if (ball.collide(pads[0]))
    {
        ball.x = pads[0].x + pads[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    // pads[1] with ball collision
    if (ball.collide(pads[1]))
    {
        ball.x = pads[1].x - pads[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    // Draw the objects
    pads[0].draw()
    pads[1].draw()
    ball.draw()
    for(i = 0; i<score.length; i++){
        score[i].innerHTML = `${players[i].score}`
    }
}
