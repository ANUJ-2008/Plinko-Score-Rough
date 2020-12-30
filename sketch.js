  const Engine= Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Events= Matter.Events;
  const Render= Matter.Render

  var particles = [];
  var plinkos = [];
  var divisions =[];
  var score=0;
  var particle;
  var gameState="start";
  var count=0;


  function setup()
  {

    createCanvas(900,500);
    engine=Engine.create();
    world=engine.world;


    ground = new Ground(450,480,900,20);

    for(var i=0; i<width; i=i+80)
    {
      divisions.push(division=new Divisions (i,395,10,150)) 
    }

    for (var i=75; i<=width; i=i+50)
    {
      plinkos.push(plinko=new Plinko(i,75) )
    }
    
    for (var i=65; i<=width; i=i+50)
    {
      plinkos.push(plinko=new Plinko(i,120) )
    }

    for (var i=75; i<=width; i=i+50)
    {
      plinkos.push(plinko=new Plinko(i,165) )
    }

    for (var i=65; i<=width; i=i+50)
    {
      plinkos.push(plinko=new Plinko(i,210) )
    }

  

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: 
      {
          width: 1300,
        height: 700,
        wireframes: false
      }
    }); 
 
   
   Render.run(render);
   
   
  }

  function draw()
  {
    Engine.update(engine)

    background("black")
    
    textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 350);
  text(" 500 ", 80, 350);
  text(" 500 ", 160, 350);
  text(" 500 ", 240, 350);
  text(" 100 ", 320, 350);
  text(" 100 ", 400, 350);
  text(" 100 ", 480, 350);
  text(" 200 ", 560, 350);
  text(" 200 ", 640, 350);
  text(" 200 ", 720, 350);
  text(" 200 ", 800, 350);
    
  ground.display()

    for (var i=0; i<divisions.length; i++)
    {
      divisions[i].display()
    }

    for(var i=0; i<plinkos.length; i++)
    {
      plinkos[i].display()
    }

    for(var i=0; i<plinkos.length; i++)
    {
      plinkos[i].display()
    }

    for(var i=0; i<plinkos.length; i++)
    {
      plinkos[i].display()
    }


    if(particle!=null)
    {
      particle.display()
      
      if(particle.body.position.y>150)
      {
        if(particle.body.position.x<240)
        {
          score=score+500;
          particle=null;

          if(count>=5)
          {
            gameState="end";
          }
        }
      }
    }

    
    if(gameState==="end")
    {
      text("Game Over",200,200)
    }

  }

  function mousePressed()
  {
    if(gameState!="end")
    {
    particle =new Particle (mouseX,10,10)
    count++;
    }
  }
