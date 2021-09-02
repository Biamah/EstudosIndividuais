kaboom({
  global: true,
  debug: true,
});

// carregamentos
loadSprite("flappy", "assets/sprites/flappy.png");
loadSprite("bg", "assets/sprites/background.png");
loadSprite("pipe", "assets/sprites/pipe.png");
loadSprite("pipe-reverse", "assets/sprites/pipe-reverse.png");
loadSound("wooosh", "assets/sounds/Suction-Cup.mp3");
loadSound("miss", "assets/sounds/Wobble.mp3");

scene("main", () => {

  // const PIPE_MARGIM = 40;
  // const PIPE_OPEN = 120;
  const JUMP_FORCE = 320;
  const SPEED = 120;

  gravity(1200);

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
    scale(0.7),
  ]);

  let score = 0;

  const scoreLabel = add([
    text(score, 32),
    pos(12, 12),
  ]);

  // plataforma
  add([
    rect(width(), 20),
    pos(0, height() - 40),
    // solid(),
  ]);

  // pipe
  loop(2, () => {
    add([
      sprite("pipe"),
      pos(width(), rand(500, 270)),
      scale(3),
      "pipe",
      { passed: false, }
    ]);
  });

  // pipe-reverse
  loop(2, () => {
    add([
      sprite("pipe-reverse"),
      pos(width(), rand(50, -150)),
      scale(3),
      "pipe-reverse"
    ]);
  });

  keyPress("space", () => {
    player.jump(JUMP_FORCE);
    play("wooosh");
  });

  action("pipe", (pipe) => {
    pipe.move(-SPEED, 0);

    if (pipe.passed === false && pipe.pos.x < player.pos.x) {
      pipe.passed = true;
      score += 1;
      scoreLabel.text = score;
    }

  });

  action("pipe-reverse", (pipeReverse) => {
    pipeReverse.move(-SPEED, 0);
  });

  player.collides("pipe", () => {
    go("lose");
    play("miss");
  });

  player.collides("pipe-reverse", () => {
    go("lose");
    play("miss");
  });

  player.action(() => {
    if (player.pos.y > height()) {
      go("lose");
      play("miss");
    }
  });
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

