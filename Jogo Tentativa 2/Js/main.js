kaboom({
  width: 640,
  height: 480,
  global: true,
  // debug: true,
});

//carregamentos


//cenas
scene("main", () => {

  //gravidade do jogo
  gravity(1600);

  // ator principal
  const atorPrincipal = add([
    rect(50, 50),
    pos(25, 25),
    body(),
    color(0, 1, 1),
    // origin("center"),
    // rotate(0),
  ])

  // chão
  const floor = add([
    rect(width(), 50),
    pos(0, height() - 40),
    solid(),
    // area(),
    color(0, 1, 0),
  ])

  // movimentação ator principal
  keyPress("space", () => {
    atorPrincipal.jump();
  });

  keyDown("d", () => {
    atorPrincipal.move(100, 90)
    // atorPrincipal.angle += dt()
  });




  keyDown("a", () => {
    atorPrincipal.move(-50, -120);
  });
});

start("main");