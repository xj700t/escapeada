(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {}; var ss = {}; var img = {};
    lib.ssMetadata = [];


    // symbols:
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.player = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#0000FF").s().p("AkrEsIAApXIJXAAIAAJXg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.player, new cjs.Rectangle(-30, -30, 60, 60), null);


    (lib.enemy7 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(60, 2, 0, 3).p("EAnTAAAMhOlAAA");
        this.shape.setTransform(251.5, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.enemy7, new cjs.Rectangle(-30, -30, 563, 60), null);


    (lib.enemy6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(60, 2, 0, 3).p("EAAAAnTMAAAhOl");
        this.shape.setTransform(0, 251.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.enemy6, new cjs.Rectangle(-30, -30, 60, 563), null);


    (lib.enemy5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(60, 2, 0, 3).p("EgnSAAAMBOlAAA");
        this.shape.setTransform(251.5, 0);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.enemy5, new cjs.Rectangle(-30, -30, 563, 60), null);


    (lib.enemy4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(60, 2, 0, 3).p("EAAAgnSMAAABOl");
        this.shape.setTransform(0, 251.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.enemy4, new cjs.Rectangle(-30, -30, 60, 563), null);


    (lib.enemy1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#990033").s().p("AkrEsIAApXIJXAAIAAJXg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.enemy1, new cjs.Rectangle(-30, -30, 60, 60), null);


    (lib.enemy0 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#990033").s().p("AkrEsIAApXIJXAAIAAJXg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.enemy0, new cjs.Rectangle(-30, -30, 60, 60), null);


    (lib.enemy_part = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#990033").s().p("AiVCWIAAkrIErAAIAAErg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.enemy_part, new cjs.Rectangle(-15, -15, 30, 30.1), null);


    (lib.enemy3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.part1 = new lib.enemy_part();
        this.part1.name = "part1";
        this.part1.parent = this;

        this.part0 = new lib.enemy_part();
        this.part0.name = "part0";
        this.part0.parent = this;
        this.part0.setTransform(0, -22);

        this.part2 = new lib.enemy_part();
        this.part2.name = "part2";
        this.part2.parent = this;
        this.part2.setTransform(0, 22);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.part2 }, { t: this.part0 }, { t: this.part1 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.enemy3, new cjs.Rectangle(-15, -37, 30, 74.1), null);


    (lib.enemy2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.part0 = new lib.enemy_part();
        this.part0.name = "part0";
        this.part0.parent = this;
        this.part0.setTransform(-44.2, 0);

        this.part3 = new lib.enemy_part();
        this.part3.name = "part3";
        this.part3.parent = this;
        this.part3.setTransform(44.3, 0);

        this.part2 = new lib.enemy_part();
        this.part2.name = "part2";
        this.part2.parent = this;
        this.part2.setTransform(14.8, 0);

        this.part1 = new lib.enemy_part();
        this.part1.name = "part1";
        this.part1.parent = this;
        this.part1.setTransform(-14.7, 0);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.part1 }, { t: this.part2 }, { t: this.part3 }, { t: this.part0 }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.enemy2, new cjs.Rectangle(-59.2, -15, 118.5, 30.1), null);


    // stage content:
    (lib.escapeada = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            var home = this
            var volumeMultiplier = 0;
            var speedMultiplier = 1;
            var allowIntersect = true;
            var allowDrag = true;

            var c = createjs;
            c.Sound.volume = 0;
            c.Ticker.setFPS(60);
            c.Ticker.addEventListener("tick", GAME);
            home.player.addEventListener("pressmove", dragFunc);
            c.Ticker.paused = true;

            var timerStarts = new Date;
            var timerEnds = new Date;

            var activeTimer = false;

var enemyMatrix = [
			[-1.5, -2],
			[1.65, 1.5],
			[-1.5, 2],
			[-1.5, -1.5]
		]
            var gameNum = 0;
            var stats = []

            function dragFunc(evt) {
                if (allowDrag) {
                    c.Ticker.paused = false;
                    if (activeTimer == false) { timerStarts = new Date().getTime() }
                    activeTimer = true;
                    var p = home.globalToLocal(stage.mouseX, stage.mouseY);
                    evt.currentTarget.x = p.x;
                    evt.currentTarget.y = p.y;
                }
            }



            setInterval(checkVolume, 100)
            function checkVolume() {
                //8TH GRADE ALGEBRA YOU GUYS - distance between two points equals sqrt(pow(x1-x2,2)+pow(y1-y2,2))
                var distance0 = Math.sqrt(Math.pow(home.player.x - home.enemy0.x, 2) + Math.pow(home.player.y - home.enemy0.y, 2))
                var distance1 = Math.sqrt(Math.pow(home.player.x - home.enemy1.x, 2) + Math.pow(home.player.y - home.enemy1.y, 2))

                //'parts' holds the global x,y values of child elements of rectangular enemies to better represent the change in volume relative to their children's center points.
                var parts = [
                    [home.enemy2.localToGlobal(home.enemy2.part0.x, home.enemy2.part0.y), home.enemy2.localToGlobal(home.enemy2.part1.x, home.enemy2.part1.y), home.enemy2.localToGlobal(home.enemy2.part2.x, home.enemy2.part2.y), home.enemy2.localToGlobal(home.enemy2.part3.x, home.enemy2.part3.y)],
                    [home.enemy3.localToGlobal(home.enemy3.part0.x, home.enemy3.part0.y), home.enemy3.localToGlobal(home.enemy3.part1.x, home.enemy3.part1.y), home.enemy3.localToGlobal(home.enemy3.part2.x, home.enemy3.part2.y)]
                ]
                // distance2&3 are chosen by the shortest distance to the player (most dangerous sub-part) other than that the internal calc is the same.
                var distance2 = Math.min(Math.sqrt(Math.pow(home.player.x - parts[0][0].x, 2) + Math.pow(home.player.y - parts[0][0].y, 2)), Math.sqrt(Math.pow(home.player.x - parts[0][1].x, 2) + Math.pow(home.player.y - parts[0][1].y, 2)), Math.sqrt(Math.pow(home.player.x - parts[0][2].x, 2) + Math.pow(home.player.y - parts[0][2].y, 2)), Math.sqrt(Math.pow(home.player.x - parts[0][3].x, 2) + Math.pow(home.player.y - parts[0][3].y, 2)))
                var distance3 = Math.min(Math.sqrt(Math.pow(home.player.x - parts[1][0].x, 2) + Math.pow(home.player.y - parts[1][0].y, 2)), Math.sqrt(Math.pow(home.player.x - parts[1][1].x, 2) + Math.pow(home.player.y - parts[1][1].y, 2)), Math.sqrt(Math.pow(home.player.x - parts[1][2].x, 2) + Math.pow(home.player.y - parts[1][2].y, 2)))

                //same trick as above- the closest (most dangerous) enemy sets the volume with ALGEBRA AGAIN- linear equation of y=ax+b that maxes volume at a range of ~80px and shuts off at ~150px
                volumeMultiplier = Math.min(distance0, distance1, distance2, distance3) * (-0.014) + 2.14
                //createjs.Sound.volume = 1 * volumeMultiplier;
                //console.log(volumeMultiplier)
            }

            function GAME() {
                //console.log("game")
                if (c.Ticker.paused == false) {
                    enemyMove()
                    speedMultiplier = 1.08;
                }
                if (allowIntersect && (intersect(home.player, home.enemy0) || intersect(home.player, home.enemy1) || intersect(home.player, home.enemy2) || intersect(home.player, home.enemy3) || intersect(home.player, home.enemy4) || intersect(home.player, home.enemy5) || intersect(home.player, home.enemy6) || intersect(home.player, home.enemy7))) {
                    //console.log("hit")
                    gameOver()
                }
            }



            function enemyMove() {
                // change enemyMatrix[enemyID][x,y] & enemyNUM in 5 places accordingly

                home.enemy0.x += enemyMatrix[0][0]
                if (home.enemy0.x > stage.canvas.width || home.enemy0.x < 0) {
                    enemyMatrix[0][0] *= (-1)
                }

                home.enemy0.y += enemyMatrix[0][1]
                if (home.enemy0.y > 500 || home.enemy0.y < 0) {
                    enemyMatrix[0][1] *= (-1)
                }

                home.enemy1.x += enemyMatrix[1][0]
                if (home.enemy1.x > stage.canvas.width || home.enemy1.x < 0) {
                    enemyMatrix[1][0] *= (-1)
                }
                home.enemy1.y += enemyMatrix[1][1]
                if (home.enemy1.y > 500 || home.enemy1.y < 0) {
                    enemyMatrix[1][1] *= (-1)
                }

                home.enemy2.x += enemyMatrix[2][0]
                if (home.enemy2.x > stage.canvas.width || home.enemy2.x < 0) {
                    enemyMatrix[2][0] *= (-1)
                }
                home.enemy2.y += enemyMatrix[2][1]
                if (home.enemy2.y > 500 || home.enemy2.y < 0) {
                    enemyMatrix[2][1] *= (-1)
                }

                home.enemy3.x += enemyMatrix[3][0]
                if (home.enemy3.x > stage.canvas.width || home.enemy3.x < 0) {
                    enemyMatrix[3][0] *= (-1)
                }
                home.enemy3.y += enemyMatrix[3][1]
                if (home.enemy3.y > 500 || home.enemy3.y < 0) {
                    enemyMatrix[3][1] *= (-1)
                }
                /*
                for (i = 0; i < 4; i++) {
                    eval("home.enemy" + i).x += enemyMatrix[i][1]
                    if (eval("home.enemy" + i).x > stage.canvas.width || eval("home.enemy" + i).x < 0) {
                        enemyMatrix[i][0] *= (-1)
                    }
            
                    eval("home.enemy" + i).y += enemyMatrix[i][1]
                    if (eval("home.enemy" + i).y > 500 || eval("home.enemy" + i).y < 0) {
                        enemyMatrix[i][1] *= (-1)
                    }
                }*/
            }

            setInterval(speedUp, 3000)
            function speedUp() {
                for (i = 0; i < enemyMatrix.length; i++) {
                    enemyMatrix[i][0] *= speedMultiplier;
                    enemyMatrix[i][1] *= speedMultiplier;
                }
            }

            function gameOver() {
                allowIntersect = false;
                allowDrag = false;
                activeTimer = false;

                timerEnds = new Date().getTime();
                home.player.alpha = 0.5;
                home.player.removeEventListener("pressmove", dragFunc);

                setTimeout(killMovement, 1000)
                function killMovement() {
                    c.Ticker.paused = true
                    setTimeout(resetGame, 30)
                }
            }

            function resetGame() {
                var elapsedTime = (timerEnds - timerStarts) / 1000;

                alert("score= " + elapsedTime)
                stats[gameNum] = elapsedTime;
                gameNum++

                window.sessionStorage.setItem("totalGames", gameNum)
                window.sessionStorage.setItem("results", stats)

                home.player.alpha = 1;
                home.player.x = 249
                home.player.y = 253.95

                home.enemy0.x = 410
                home.enemy0.y = 426

                home.enemy1.x = 64
                home.enemy1.y = 71.05

                home.enemy2.x = 402.75
                home.enemy2.y = 56.05

                home.enemy3.x = 63.05
                home.enemy3.y = 386.10

                home.player.addEventListener("pressmove", dragFunc);
                allowIntersect = true;
                allowDrag = true;

                 enemyMatrix = [
			[-1.5, -2],
			[1.65, 1.5],
			[-1.5, 2],
			[-1.5, -1.5]
		]
                speedMultiplier = 1;


            }

            function intersect(obj1, obj2) {
                var obj1W = obj1.nominalBounds;
                var obj2W = obj2.nominalBounds;
                if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
                    return false;
                } else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
                    return false;
                } else if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
                    return false;
                } else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
                    return false;
                }
                return true;
            }
            playSound("beep", -1);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Actions
        this.enemy3 = new lib.enemy3();
        this.enemy3.name = "enemy3";
        this.enemy3.parent = this;
        this.enemy3.setTransform(63.1, 386.1);

        this.enemy2 = new lib.enemy2();
        this.enemy2.name = "enemy2";
        this.enemy2.parent = this;
        this.enemy2.setTransform(402.8, 56.1);

        this.enemy1 = new lib.enemy1();
        this.enemy1.name = "enemy1";
        this.enemy1.parent = this;
        this.enemy1.setTransform(64, 71.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.enemy1 }, { t: this.enemy2 }, { t: this.enemy3 }] }).wait(1));

        // Layer 1
        this.player = new lib.player();
        this.player.name = "player";
        this.player.parent = this;
        this.player.setTransform(249, 254);

        this.enemy0 = new lib.enemy0();
        this.enemy0.name = "enemy0";
        this.enemy0.parent = this;
        this.enemy0.setTransform(410, 426);

        this.enemy7 = new lib.enemy7();
        this.enemy7.name = "enemy7";
        this.enemy7.parent = this;
        this.enemy7.setTransform(249.5, 501, 1, 1, 0, 0, 0, 251.5, 0);

        this.enemy6 = new lib.enemy6();
        this.enemy6.name = "enemy6";
        this.enemy6.parent = this;
        this.enemy6.setTransform(-2, 249.6, 1, 1, 0, 0, 0, 0, 251.5);

        this.enemy5 = new lib.enemy5();
        this.enemy5.name = "enemy5";
        this.enemy5.parent = this;
        this.enemy5.setTransform(249.5, -1.9, 1, 1, 0, 0, 0, 251.5, 0);

        this.enemy4 = new lib.enemy4();
        this.enemy4.name = "enemy4";
        this.enemy4.parent = this;
        this.enemy4.setTransform(501, 249.6, 1, 1, 0, 0, 0, 0, 251.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.enemy4 }, { t: this.enemy5 }, { t: this.enemy6 }, { t: this.enemy7 }, { t: this.enemy0 }, { t: this.player }] }).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(208, 208.1, 583, 583);
    // library properties:
    lib.properties = {
        id: '59FCCF2B15989740B5F010A6418BE4F9',
        width: 500,
        height: 500,
        fps: 60,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            { src: "sounds/beep.mp3?1523823297441", id: "beep" }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['59FCCF2B15989740B5F010A6418BE4F9'] = {
        getStage: function () { return exportRoot.getStage(); },
        getLibrary: function () { return lib; },
        getSpriteSheet: function () { return ss; },
        getImages: function () { return img; }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
