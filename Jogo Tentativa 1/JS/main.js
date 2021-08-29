kaboom({
  global: true,
  debug: true,
});

// carregamentos
loadSprite("flappy", "assets/sprites/flappy.png");
loadSprite("bg", "assets/sprites/background.png");
loadSprite("pipe", "assets/sprites/pipe.png")
loadSound("wooosh", "assets/sounds/Suction-Cup.mp3");

scene("main", () => {

  // background
  add([
    sprite("bg", {
      width: width(),
      height: height(),
    }),
    scale(),
  ]);

  // player
  const player = add([
    sprite("flappy"),
    pos(80, 80),
    body(),
    // scale(3.5),
  ]);

  // plataforma
  add([
    rect(width(), 20),
    pos(0, height() - 40),
    solid(),
  ]);

  // pipe
  const pipe = add([
    sprite("pipe"),
    pos(width(), 292),
    scale(3),
    // area(),
    "pipe"
  ]);

  keyPress("space", () => {
    player.jump();
    play("wooosh");
  });

  pipe.action(() => {
    pipe.move(-60, 0)
  });

  player.collides("pipe", () => {
    go("lose");
  })
});

scene("lose", () => {
  add([
    text("Game Over"),
  ]);

  keyPress("space", () => {
    go("main");
  });
});

start("main");

