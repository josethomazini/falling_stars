(self.webpackChunk=self.webpackChunk||[]).push([[826],{690:(t,e,n)=>{"use strict";var r=n(379),o=n.n(r),s=n(774);o()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;var i=n(260),a=n.n(i);const c="sky",f="platform",u="star",l="bomb",p="dude";var y=n(972),h=n(58),b=n(695),m=n(656),d=n(435);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(i,t);var e,n,r,o,s=(r=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),s.call(this,"PreloadScene")}return e=i,(n=[{key:"loadAssets",value:function(){this.load.image(c,y),this.load.image(f,h),this.load.image(u,b),this.load.image(l,m),this.load.spritesheet(p,d,{frameWidth:32,frameHeight:48})}},{key:"preload",value:function(){var t=this.add.graphics(),e=this.add.graphics();e.fillStyle(2236962,.8),e.fillRect(240,270,320,50);var n=this.cameras.main.width,r=this.cameras.main.height,o=this.make.text({x:n/2,y:r/2-50,text:"Loading...",style:{font:"20px monospace",fill:"#ffffff"}});o.setOrigin(.5,.5);var s=this.make.text({x:n/2,y:r/2-5,text:"0%",style:{font:"18px monospace",fill:"#ffffff"}});s.setOrigin(.5,.5);var i=this.make.text({x:n/2,y:r/2+50,text:"",style:{font:"18px monospace",fill:"#ffffff"}});i.setOrigin(.5,.5),this.load.on("progress",(function(e){s.setText("".concat(parseInt(100*e,10),"%")),t.clear(),t.fillStyle(16777215,1),t.fillRect(250,280,300*e,30)})),this.load.on("fileprogress",(function(t){i.setText("Loading asset: ".concat(t.key))})),this.load.on("complete",(function(){t.destroy(),e.destroy(),o.destroy(),s.destroy(),i.destroy()})),this.loadAssets()}},{key:"create",value:function(){this.scene.start("GameScene")}}])&&g(e.prototype,n),i}(a().Scene);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _=function(t){return"Score: ".concat(t)},j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(i,t);var e,n,r,o,s=(r=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function i(t,e,n,r,o){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(a=s.call(this,t,e,n,_(r),o)).score=r,a}return e=i,(n=[{key:"setScore",value:function(t){this.score=t,this.updateScoreText()}},{key:"add",value:function(t){this.setScore(this.score+t)}},{key:"updateScoreText",value:function(){this.setText(_(this.score))}}])&&B(e.prototype,n),i}(a().GameObjects.Text);function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var E=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scene=e,this.key=n,this.group=this.scene.physics.add.group()}var e,n;return e=t,(n=[{key:"spawn",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=t<400?a().Math.Between(400,800):a().Math.Between(0,400),n=this.group.create(e,16,this.key);return n.setBounce(1),n.setCollideWorldBounds(!0),n.setVelocity(a().Math.Between(-200,200),20),n}}])&&C(e.prototype,n),t}();function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function F(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(i,t);var e,n,r,o,s=(r=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return F(this,t)});function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),s.call(this,"GameScene")}return e=i,(n=[{key:"create",value:function(){this.player=null,this.cursors=null,this.platforms=null,this.scoreLabel=null,this.stars=null,this.bombSpawner=null,this.bombsGroup=null,this.gameOver=!1,this.add.image(400,300,c),this.platforms=this.createPlatforms(),this.player=this.createPlayer(),this.stars=this.createStars(),this.scoreLabel=this.createScoreLabel(16,16,0),this.bombSpawner=new E(this,l),this.bombsGroup=this.bombSpawner.group,this.cursors=this.input.keyboard.createCursorKeys(),this.collisionDefs(),this.input.keyboard.on("keydown-SPACE",this.restart,this)}},{key:"update",value:function(){this.gameOver||(this.cursors.left.isDown?(this.player.setVelocityX(-160),this.player.anims.play("left",!0)):this.cursors.right.isDown?(this.player.setVelocityX(160),this.player.anims.play("right",!0)):(this.player.setVelocityX(0),this.player.anims.play("turn")),this.cursors.up.isDown&&this.player.body.touching.down&&this.player.setVelocityY(-330))}},{key:"collisionDefs",value:function(){this.physics.add.collider(this.player,this.platforms),this.physics.add.collider(this.stars,this.platforms),this.physics.add.collider(this.bombsGroup,this.platforms),this.physics.add.collider(this.player,this.bombsGroup,this.hitBomb,null,this),this.physics.add.overlap(this.player,this.stars,this.collectStar,null,this)}},{key:"hitBomb",value:function(t,e){this.physics.pause(),t.setTint(16711680),t.anims.play("turn"),this.gameOver=!0}},{key:"restart",value:function(){this.gameOver&&this.scene.start("PreloadScene")}},{key:"collectStar",value:function(t,e){e.disableBody(!0,!0),this.scoreLabel.add(10),0===this.stars.countActive(!0)&&this.stars.children.iterate((function(t){t.enableBody(!0,t.x,0,!0,!0)})),this.bombSpawner.spawn(t.x)}},{key:"createScoreLabel",value:function(t,e,n){var r=new j(this,t,e,n,{fontSize:"32px",fill:"#000"});return this.add.existing(r),r}},{key:"createStars",value:function(){var t=this.physics.add.group({key:u,repeat:11,setXY:{x:12,y:0,stepX:70}});return t.children.iterate((function(t){t.setBounceY(a().Math.FloatBetween(.4,.8))})),t}},{key:"createPlatforms",value:function(){var t=this.physics.add.staticGroup();return t.create(400,568,f).setScale(2).refreshBody(),t.create(600,400,f),t.create(50,250,f),t.create(750,220,f),t}},{key:"createPlayer",value:function(){var t=this.physics.add.sprite(100,450,p);return t.setBounce(.2),t.setCollideWorldBounds(!0),this.anims.create({key:"left",frames:this.anims.generateFrameNumbers(p,{start:0,end:3}),frameRate:10,repeat:-1}),this.anims.create({key:"turn",frames:[{key:p,frame:4}],frameRate:20}),this.anims.create({key:"right",frames:this.anims.generateFrameNumbers(p,{start:5,end:8}),frameRate:10,repeat:-1}),t}}])&&G(e.prototype,n),i}(a().Scene),D={type:a().CANVAS,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:300}}},scene:[O,V]};new(a().Game)(D)},774:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(15),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([t.id,"/* @font-face {\n  font-family: 'MyFont';\n  src: url('./my-font.woff2') format('woff2'),\n    url('./my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n} */\n\nbody {\n  /* font-family: 'MyFont'; */\n  margin: 0;\n  background: #333;\n}\n","",{version:3,sources:["webpack://./src/assets/style.css"],names:[],mappings:"AAAA;;;;;;GAMG;;AAEH;EACE,2BAA2B;EAC3B,SAAS;EACT,gBAAgB;AAClB",sourcesContent:["/* @font-face {\n  font-family: 'MyFont';\n  src: url('./my-font.woff2') format('woff2'),\n    url('./my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n} */\n\nbody {\n  /* font-family: 'MyFont'; */\n  margin: 0;\n  background: #333;\n}\n"],sourceRoot:""}]);const a=i},656:(t,e,n)=>{"use strict";t.exports=n.p+"assets/1344cabbbf6c61010d6e.png"},435:(t,e,n)=>{"use strict";t.exports=n.p+"assets/96aa753af441d2464d09.png"},58:(t,e,n)=>{"use strict";t.exports=n.p+"assets/69db09bf9618dbe6c387.png"},972:(t,e,n)=>{"use strict";t.exports=n.p+"assets/47a86b192804f1490bee.png"},695:(t,e,n)=>{"use strict";t.exports=n.p+"assets/a7cb585cf61f7dafb028.png"}},0,[[690,666,216]]]);
//# sourceMappingURL=index.7abb39012cae6f51b20a.js.map