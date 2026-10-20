// Canvas and context
let c = document.querySelector(`#pong`)
let ctx = c.getContext(`2d`)

// Timer to make the game run at 60fps
let timer = setInterval(main, 1000/60)

let players = [new Player(), new Player()]


// Global friction variable
let fy = .97

// Player 1 (players[0].pad) setup
//players[0].pad = new Box();
players[0].pad.w = 20
players[0].pad.h = 150
players[0].pad.x = 0 + players[0].pad.w/2

//players[1].pad = new Box();
players[1].pad.w = 20
players[1].pad.h = 150
players[1].pad.x = c.width - players[1].pad.w/2

console.log(players)

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
    

    // players[0].pad stuff
    // players[0].pad accelerates when key is pressed 
    if(keys[`w`])
    {
       players[0].pad.vy += -players[0].pad.force
    }

    if(keys[`s`])
    {
        players[0].pad.vy += players[0].pad.force
    }

    // Applies friction
    players[0].pad.vy *= fy
    // Player movement
    players[0].pad.move();

    // Ball movement
    ball.move()

    // players[0].pad collision
    if (players[0].pad.y < 0+players[0].pad.h/2)
    {
        players[0].pad.y = 0+players[0].pad.h/2
    }
    if (players[0].pad.y > c.height-players[0].pad.h/2)
    {
        players[0].pad.y = c.height-players[0].pad.h/2
    }

    // players[1].pad stuff
    // players[1].pad accelerates when key is pressed 
    if(keys[`ArrowUp`])
    {
       players[1].pad.vy += -players[1].pad.force
    }

    if(keys[`ArrowDown`])
    {
        players[1].pad.vy += players[1].pad.force
    }

    // Applies friction
    players[1].pad.vy *= fy
    // Player movement
    players[1].pad.move();

    // Ball movement
    ball.move()

    // players[1].pad collision
    if (players[1].pad.y < 0+players[1].pad.h/2)
    {
        players[1].pad.y = 0+players[1].pad.h/2
    }
    if (players[1].pad.y > c.height-players[1].pad.h/2)
    {
        players[1].pad.y = c.height-players[1].pad.h/2
    }

    // Ball collision 
    if (ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if (ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y = c.height/2
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

    // players[0].pad with ball collision
    if (ball.collide(players[0].pad))
    {
        ball.x = players[0].pad.x + players[0].pad.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    // players[1].pad with ball collision
    if (ball.collide(players[1].pad))
    {
        ball.x = players[1].pad.x - players[1].pad.w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    // Draw the objects
    players[0].pad.draw()
    players[1].pad.draw()
    ball.draw()
}
