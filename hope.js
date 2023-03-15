const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS63VTWgUZxgH8P+7Mzsf+2U2SrPJKBoEA1WKUMzupaKHpgoetadCnaBN9FRaLLRQEW17KKIed1V21dJLbU/FRqiixx219NDaVi+NmnWNZT+cze7Ozsf7yoxEYpnMRJI5DQzP+5v3P8/7DEHANVHM7iXAVyAkwQCNgZYjDp3KH7jzZ1DdwmckBLirrE29KQgcTNOBZTrQdYP2es631LSPnp34zQqDlgTIcvTlOowxNBsG6o3uHw6he899eOt+EBIGeBHxUW5ElDjEYwKSKdFbzzAsVB61/q4lWlsvv3/XXAwJBOaL9pe29slE3MgoOSHF+N0DAwnwfASNehe1WudkYVw7sixgYfFkMXtSikU/VZQU3LhmHjVZ17Sz59Tbt/2QJe3glUIGMnEhe3PgjcR2Ny5dN/Df0873ebX8gS/wshUBUMK+PKveuhzWGZPF0fdiceHq4FAK3a6FyoyuFca13GKA14ruw8qM/ldhXNscBnz03duDUSY83jCchu04ePBvs5ZXtTW+wGQpW12/IZ1xP9r0dAM9g2bOH9Rmg5DDpW0ZwvFVD7CpW1ctqNqQP1DM/ZJRErvdFqw+bqHdMccKqvZr4AEsbdsVj4lTbkTttolqtXWloGp7FtlB7uv+1fIX6bSM9pyJJ9W5a3m1PAYC5ou4H7mUvT44mNwZTwio17to1Dsn8qp21Bc4cGl0WCLcP+vW9wkRQrxddNrW6cyw9NmxnTfthUX7ftgs9LcTP8dkfmxIWeW16cOHTdO22EheLU8v2qYTxezn6bT8zeo1MS/T2dk5GB3rHgNOMd6+SsFxnE3eJcAnohwdUZQkQAjqtTYadePHwri2L/CgHbuxg3/ywPhdUZJbJOnF3GnpPS9fw7ABAkgij3h8flS46REYPRvVig5KoebV8oXAg3bw4ugmjkV+6u+Xt/T1SSDE/wy6sTxrdiHHBYgCH4q8ssqLjOPHZYk/kkiKEUHg4Y5qBgbLpDBNG62W5Rhde4rjsGdISUEUgxHf1zx0MfsWdTBGCHIAeQeABbAyBdPmfziTpdz+SASlMOT1Z9GCoJeCLAtwrTBk2UAYsiKAH+JN2YreXDHg/wilzJ3Oz1YUmEcYY2fce0LIx88BFi6vvp70RPYAAAAASUVORK5CYII=";

class Utilities {

  constructor() {}

  getInfo() {
    return {
      id: 'utilities',
      name: 'Utlities',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is [A] exactly [B]?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'isLessOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'isMoreOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'trueBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'falseBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi'
        },
        {
          opcode: 'ternaryOperator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'letters',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [START] to [END] of [STRING]',
          arguments: {
            START: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'red apple'
            }
          }
        },
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current millisecond'
        },
        {
          opcode: 'fetchFrom',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get content from [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://translate-service.scratch.mit.edu/translate?language=eo&text=hello'
            }
          }
        },
        {
          opcode: 'parseJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: '[PATH] of [JSON_STRING]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'fruit/apples'
            },
            JSON_STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
            }
          }
        },
        {
          opcode: 'stringToBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'regexReplace',

          blockType: Scratch.BlockType.REPORTER,

          text: 'replace [STRING] using the rule [REGEX] with [NEWSTRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'bananas are awesome. i like bananas.'
            },
            REGEX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            NEWSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        }
      ]
    }
  }

  isExactly({A, B}) {
    return A === B;
  }

  isLessOrEqual({A, B}) {
    return A <= B;
  }

  isMoreOrEqual({A, B}) {
    return A >= B;
  }

  trueBlock() {
    return true;
  }

  falseBlock() {
    return false;
  }

  exponent({A, B}) {
    return Math.pow(A, B);
  }

  pi() {
    return Math.PI;
  }

  ternaryOperator({A, B, C}) {
    return A ? B : C;
  }

  letters({STRING, START, END}) {
    return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
  }

  currentMillisecond() {
    return Date.now() % 1000;
  }

  fetchFrom({URL}) {
    return fetch(URL).then(res => res.text())
      .catch(err => '');
  }

  parseJSON({PATH, JSON_STRING}) {
    try {
      const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + JSON_STRING);
      } catch (e) {
        return e.message;
      }
      path.forEach(prop => json = json[prop]);
      if (json === null) return 'null';
      else if (json === undefined) return '';
      else if (typeof json === 'object') return JSON.stringify(json);
      else return json.toString();
    } catch (err) {
      return '';
    }
  }

  stringToBoolean({STRING}) {
    return STRING;
  }

  regexReplace({STRING, REGEX, NEWSTRING}) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }

}

class RJMTurtle {
    constructor() {
        this.block = "1";
        this.nib = [[0,0,0]];
        this.pos = [0,0,0];
        this.penDown = true;
        this.matrix = null;
        this.TO_RADIANS = Math.PI / 180;
    }
    
    clone() {
        var t = new RJMTurtle();
        t.block = this.block;
        t.nib = this.nib;
        t.pos = this.pos;
        t.penDown = this.penDown;
        t.matrix = this.matrix;
        return t;
    }
    
    mmMultiply(a,b) {
        var c = [[0,0,0],[0,0,0],[0,0,0]];
        for (var i = 0; i < 3 ; i++) for (var j = 0; j < 3 ; j++)
          c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j] + a[i][2]*b[2][j];
        return c;
    };
    
    mod(n,m) {
        return ((n%m)+m)%m;
    };
    
    cosDegrees(angle) {
        if (this.mod(angle,90) == 0) {
            return [1,0,-1,0][this.mod(angle,360)/90];
        }
        else {
            return Math.cos(angle * this.TO_RADIANS);
        }
    }
    
    sinDegrees(angle) {
        if (this.mod(angle,90) == 0) {
            return [0,1,0,-1][this.mod(angle,360)/90];
        }
        else {
            return Math.sin(angle * this.TO_RADIANS);
        }
    }
    
    yawMatrix(angle) {
        var c = this.cosDegrees(angle);
        var s = this.sinDegrees(angle);
        return [[c, 0, -s],
                [0, 1, 0],
                [s, 0, c]];
    };
    
    rollMatrix(angle) {
        var c = this.cosDegrees(angle);
        var s = this.sinDegrees(angle);
        return [[c, -s, 0],
                [s,  c, 0],
                [0,  0, 1]];
    };
    
    pitchMatrix(angle) {
        var c = this.cosDegrees(angle);
        var s = this.sinDegrees(angle);
        return [[1, 0, 0],
                [0, c, s],
                [0,-s, c]];
    };
}

class RaspberryJamMod {
    constructor(runtime) {
        this.clear();
    }
    
    clear() {
        this.socket = null;
        this.hits = [];
        this.turtle = new RJMTurtle();
        this.turtleHistory = [];
        this.savedBlocks = null;
    }
    
    getInfo() {
        return {
            "id": "RaspberryJamMod",
            "name": "Minecraft",
            
            "blocks": [{
                    "opcode": "connect_p",
                    "blockType": "command",
                    "text": "connect to Minecraft on [ip]",
                    "arguments": {
                        "ip": {
                            "type": "string",
                            "defaultValue": "localhost"
                        },
                    }
            },
            {
                    "opcode": "chat",
                    "blockType": "command",
                    "text": "say in chat [msg]",
                    "arguments": {
                        "msg": {
                            "type": "string",
                            "defaultValue": "Hello, World!"
                        },
                    }
            },            
            {
                    "opcode": "blockByName",
                    "blockType": "reporter",
                    "text": "block id of [name]",
                    "arguments": {
                        "name": {
                            "type": "string",
                            "defaultValue": "1,0",
                            "menu": "blockMenu"
                        }
                    }
            },            
            {
                    "opcode": "getBlock",
                    "blockType": "reporter",
                    "text": "block id at ([x],[y],[z])",
                    "arguments": {
                        "x": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "y": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "z": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                    }
            },             
/*            {
                    "opcode": "haveBlock",
                    "blockType": "Boolean",
                    "text": "have [b] at ([x],[y],[z])",
                    "arguments": {
                        "b": {
                            "type": "string",
                            "defaultValue": "1,0",
                            "menu": "blockMenu"
                        },
                        "x": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "y": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "z": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                    }
            },             */
            /* {
                    "opcode": "onBlock",
                    "blockType": "Boolean",
                    "text": "player on [b]",
                    "arguments": {
                        "b": {
                            "type": "string",
                            "defaultValue": "0,0",
                            "menu": "blockMenu"
                        },
                    }
            }, */
            {
                    "opcode": "getPlayerX",
                    "blockType": "reporter",
                    "text": "player x [mode] position",
                    "arguments": {
                        "mode": {
                            "type": "number",
                            "defaultValue": 0,
                            "menu": "modeMenu"
                        },
                    }
            },            
            {
                    "opcode": "getPlayerY",
                    "blockType": "reporter",
                    "text": "player y [mode] position",
                    "arguments": {
                        "mode": {
                            "type": "number",
                            "defaultValue": 0,
                            "menu": "modeMenu"
                        },
                    }
            },            
            {
                    "opcode": "getPlayerZ",
                    "blockType": "reporter",
                    "text": "player z [mode] position",
                    "arguments": {
                        "mode": {
                            "type": "number",
                            "defaultValue": 0,
                            "menu": "modeMenu"
                        },
                    }
            },
            {
                    "opcode": "getPlayerVector",
                    "blockType": "reporter",
                    "text": "player vector [mode] position",
                    "arguments": {
                        "mode": {
                            "type": "number",
                            "defaultValue": 0,
                            "menu": "modeMenu"
                        },
                    }
            },
            {
                    "opcode": "getHit",
                    "blockType": "reporter",
                    "text": "sword hit vector position",
                    "arguments": {
                    }
            },            
            {
                    "opcode": "extractFromVector",
                    "blockType": "reporter",
                    "text": "[coordinate]-coordinate of vector [vector]",
                    "arguments": {
                        "coordinate": {
                            "type": "number",
                            "defaultValue": 0,
                            "menu": "coordinateMenu"
                        },
                        "vector": {
                            "type": "string",
                            "defaultValue": "0,0,0",
                        },
                    }
            },          
            {
                    "opcode": "makeVector",
                    "blockType": "reporter",
                    "text": "vector ([x],[y],[z])",
                    "arguments": {
                        "x": {
                            "type": "number",
                            "defaultValue": 0,
                        },
                        "y": {
                            "type": "number",
                            "defaultValue": 0,
                        },
                        "z": {
                            "type": "number",
                            "defaultValue": 0,
                        },
                    }
            },                
            {
                    "opcode": "setBlock",
                    "blockType": "command",
                    "text": "put [b] at ([x],[y],[z])",
                    "arguments": {
                        "x": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "y": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "z": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "b": {
                            "type": "string",
                            "defaultValue": "1,0",
                            "menu": "blockMenu"
                        },
                    }
            },            
/*            {
                    "opcode": "setBlock",
                    "blockType": "command",
                    "text": "put block with id [b] at ([x],[y],[z])",
                    "arguments": {
                        "x": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "y": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "z": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "b": {
                            "type": "string",
                            "defaultValue": "1,0"
                        },
                    }
            },       */      
            {
                    "opcode": "setPlayerPos",
                    "blockType": "command",
                    "text": "move player to ([x],[y],[z])",
                    "arguments": {
                        "x": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "y": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "z": {
                            "type": "number",
                            "defaultValue": 0
                        },
                    }
            },            
            {
                    "opcode": "movePlayer",
                    "blockType": "command",
                    "text": "move player by ([dx],[dy],[dz])",
                    "arguments": {
                        "dx": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "dy": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "dz": {
                            "type": "number",
                            "defaultValue": 0
                        },
                    }
            },         
            {
                    "opcode": "movePlayerTop",
                    "blockType": "command",
                    "text": "move player to top",
                    "arguments": {
                    }
            },         
            {
                    "opcode": "spawnEntity",
                    "blockType": "command",
                    "text": "spawn [entity] at ([x],[y],[z])",
                    "arguments": {
                        "entity": {
                            "type": "string",
                            "defaultValue": "Villager",
                            "menu": "entityMenu"
                        },
                        "x": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "y": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "z": {
                            "type": "number",
                            "defaultValue": 0
                        },
                    }
            },
            {
                    "opcode": "moveTurtle",
                    "blockType": "command",
                    "text": "turtle [dir] [n]",
                    "arguments": {
                        "dir": {
                            "type": "number",
                            "menu": "moveMenu",
                            "defaultValue": 1
                        },
                        "n": {
                            "type": "number",
                            "defaultValue": "1"
                        },
                    }
            },            
            {
                    "opcode": "leftTurtle",
                    "blockType": "command",
                    "text": "turtle turn left [n] degrees",
                    "arguments": {
                        "n": {
                            "type": "number",
                            "defaultValue": "15"
                        },
                    }
            },            
            {
                    "opcode": "rightTurtle",
                    "blockType": "command",
                    "text": "turtle turn right [n] degrees",
                    "arguments": {
                        "n": {
                            "type": "number",
                            "defaultValue": "15"
                        },
                    }
            },            
            {
                    "opcode": "turnTurtle",
                    "blockType": "command",
                    "text": "turtle [dir] [n] degrees",
                    "arguments": {
                        "dir": {
                            "type": "string",
                            "menu": "turnMenu",
                            "defaultValue": "pitch"
                        },
                        "n": {
                            "type": "number",
                            "defaultValue": "15"
                        },
                    }
            },            
            {
                    "opcode": "pen",
                    "blockType": "command",
                    "text": "turtle pen [state]",
                    "arguments": {
                        "state": {
                            "type": "number",
                            "defaultValue": 1,
                            "menu": "penMenu"
                        }
                    }
            },            
            {
                    "opcode": "turtleBlock",
                    "blockType": "command",
                    "text": "turtle pen block [b]",
                    "arguments": {
                        "b": {
                            "type": "string",
                            "defaultValue": "1,0",
                            "menu": "blockMenu"
                        }
                    }
            },            
/*            {
                    "opcode": "turtleBlock",
                    "blockType": "command",
                    "text": "turtle pen block with id [b]",
                    "arguments": {
                        "b": {
                            "type": "string",
                            "defaultValue": "1,0",
                        }
                    }
            },             */
            {
                    "opcode": "turtleThickness",
                    "blockType": "command",
                    "text": "turtle pen thickness [n]",
                    "arguments": {
                        "n": {
                            "type": "number",
                            "defaultValue": 1,
                        }
                    }
            },            
            {
                    "opcode": "setTurtlePosition",
                    "blockType": "command",
                    "text": "turtle move to ([x],[y],[z])",
                    "arguments": {
                        "x": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "y": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "z": {
                            "type": "number",
                            "defaultValue": 0
                        },
                    }
            },            
            {
                    "opcode": "resetTurtleAngle",
                    "blockType": "command",
                    "text": "turtle reset to [n] degrees",
                    "arguments": {
                        "n": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                    }
            },            
            {
                    "opcode": "saveTurtle",
                    "blockType": "command",
                    "text": "turtle save",
                    "arguments": {
                    }
            },            
            {
                    "opcode": "restoreTurtle",
                    "blockType": "command",
                    "text": "turtle restore",
                    "arguments": {
                    }
            },            
            {
                    "opcode": "suspend",
                    "blockType": "command",
                    "text": "suspend drawing",
                    "arguments": {
                    }
            },            
            {
                    "opcode": "resume",
                    "blockType": "command",
                    "text": "resume drawing",
                    "arguments": {
                    }
            },            
            ],
        "menus": {
            moveMenu: [{text:"forward",value:1}, {text:"back",value:-1}],
            penMenu: [{text:"down",value:1}, {text:"up",value:0}],
            coordinateMenu: [{text:"x",value:0}, {text:"y",value:1}, {text:"z",value:2}],
            turnMenu: [ "yaw", "pitch", "roll" ],
            modeMenu: [{text:"exact",value:1},{text:"block",value:0}],
            entityMenu: ["Item",
                "XPOrb",
                "LeashKnot",
                "Painting",
                "Arrow",
                "Snowball",
                "Fireball",
                "SmallFireball",
                "ThrownEnderpearl",
                "EyeOfEnderSignal",
                "ThrownPotion",
                "ThrownExpBottle",
                "ItemFrame",
                "WitherSkull",
                "PrimedTnt",
                "FallingSand",
                "FireworksRocketEntity",
                "ArmorStand",
                "Boat",
                "MinecartRideable",
                "MinecartChest",
                "MinecartFurnace",
                "MinecartTNT",
                "MinecartHopper",
                "MinecartSpawner",
                "MinecartCommandBlock",
                "Mob",
                "Monster",
                "Creeper",
                "Skeleton",
                "Spider",
                "Giant",
                "Zombie",
                "Slime",
                "Ghast",
                "PigZombie",
                "Enderman",
                "CaveSpider",
                "Silverfish",
                "Blaze",
                "LavaSlime",
                "EnderDragon",
                "WitherBoss",
                "Bat",
                "Witch",
                "Endermite",
                "Guardian",
                "Pig",
                "Sheep",
                "Cow",
                "Chicken",
                "Squid",
                "Wolf",
                "MushroomCow",
                "SnowMan",
                "Ozelot",
                "VillagerGolem",
                "EntityHorse",
                "Rabbit",
                "Villager",
                "EnderCrystal",],
            blockMenu: { acceptReporters: true,
                items: [
                {text:"air",value:"0,0"},
                {text:"bed",value:"26,0"},
                {text:"bedrock",value:"7,0"},
                {text:"bookshelf",value:"47,0"},
                {text:"brick block",value:"45,0"},
                {text:"cactus",value:"81,0"},
                {text:"carpet black",value:"171,15"},
                {text:"carpet blue",value:"171,11"},
                {text:"carpet brown",value:"171,12"},
                {text:"carpet cyan",value:"171,9"},
                {text:"carpet gray",value:"171,7"},
                {text:"carpet green",value:"171,13"},
                {text:"carpet light blue",value:"171,3"},
                {text:"carpet light gray",value:"171,8"},
                {text:"carpet lime",value:"171,5"},
                {text:"carpet magenta",value:"171,2"},
                {text:"carpet orange",value:"171,1"},
                {text:"carpet pink",value:"171,6"},
                {text:"carpet purple",value:"171,10"},
                {text:"carpet red",value:"171,14"},
                {text:"carpet white",value:"171"},
                {text:"carpet yellow",value:"171,4"},
                {text:"chest",value:"54,0"},
                {text:"clay",value:"82,0"},
                {text:"coal block",value:"173,0"},
                {text:"coal ore",value:"16,0"},
                {text:"cobblestone",value:"4,0"},
                {text:"cobweb",value:"30,0"},
                {text:"crafting table",value:"58,0"},
                {text:"diamond block",value:"57,0"},
                {text:"diamond ore",value:"56,0"},
                {text:"dirt",value:"3,0"},
                {text:"door iron",value:"71,0"},
                {text:"door wood",value:"64,0"},
                {text:"double tallgrass",value:"175,2"},
                {text:"farmland",value:"60,0"},
                {text:"fence gate",value:"107,0"},
                {text:"fence",value:"85,0"},
                {text:"fire",value:"51,0"},
                {text:"flower cyan",value:"38,0"},
                {text:"flower yellow",value:"37,0"},
                {text:"furnace active",value:"62,0"},
                {text:"furnace inactive",value:"61,0"},
                {text:"glass pane",value:"102,0"},
                {text:"glass",value:"20,0"},
                {text:"glowstone block",value:"89,0"},
                {text:"gold block",value:"41,0"},
                {text:"gold ore",value:"14,0"},
                {text:"grass tall",value:"31,0"},
                {text:"grass",value:"2,0"},
                {text:"gravel",value:"13,0"},
                {text:"hardened clay stained black",value:"159,15"},
                {text:"hardened clay stained blue",value:"159,11"},
                {text:"hardened clay stained brown",value:"159,12"},
                {text:"hardened clay stained cyan",value:"159,9"},
                {text:"hardened clay stained gray",value:"159,7"},
                {text:"hardened clay stained green",value:"159,13"},
                {text:"hardened clay stained light blue",value:"159,3"},
                {text:"hardened clay stained light gray",value:"159,8"},
                {text:"hardened clay stained lime",value:"159,5"},
                {text:"hardened clay stained magenta",value:"159,2"},
                {text:"hardened clay stained orange",value:"159,1"},
                {text:"hardened clay stained pink",value:"159,6"},
                {text:"hardened clay stained purple",value:"159,10"},
                {text:"hardened clay stained red",value:"159,14"},
                {text:"hardened clay stained white",value:"159,0"},
                {text:"hardened clay stained yellow",value:"159,4"},
                {text:"ice",value:"79,0"},
                {text:"iron block",value:"42,0"},
                {text:"iron ore",value:"15,0"},
                {text:"ladder",value:"65,0"},
                {text:"lapis lazuli block",value:"22,0"},
                {text:"lapis lazuli ore",value:"21,0"},
                {text:"large fern",value:"175,3"},
                {text:"lava flowing",value:"10,0"},
                {text:"lava stationary",value:"11,0"},
                {text:"leaves birch",value:"18,6"},
                {text:"leaves jungle",value:"18,7"},
                {text:"leaves oak",value:"18,4"},
                {text:"leaves spruce",value:"18,5"},
                {text:"leaves",value:"18,0"},
                {text:"lilac",value:"175,1"},
                {text:"melon",value:"103,0"},
                {text:"moss stone",value:"48,0"},
                {text:"mushroom brown",value:"39,0"},
                {text:"mushroom red",value:"40,0"},
                {text:"obsidian",value:"49,0"},
                {text:"peony",value:"175,5"},
                {text:"quartz block",value:"155,0"},
                {text:"redstone block",value:"152,0"},
                {text:"redstone lamp active",value:"124,0"},
                {text:"redstone lamp inactive",value:"123,0"},
                {text:"redstone ore",value:"73,0"},
                {text:"rose bush",value:"175,4"},
                {text:"sand",value:"12,0"},
                {text:"sandstone",value:"24,0"},
                {text:"sapling",value:"6,0"},
                {text:"sea lantern",value:"169,0"},
                {text:"snow block",value:"80,0"},
                {text:"snow",value:"78,0"},
                {text:"stained glass black",value:"95,15"},
                {text:"stained glass blue",value:"95,11"},
                {text:"stained glass brown",value:"95,12"},
                {text:"stained glass cyan",value:"95,9"},
                {text:"stained glass gray",value:"95,7"},
                {text:"stained glass green",value:"95,13"},
                {text:"stained glass light blue",value:"95,3"},
                {text:"stained glass light gray",value:"95,8"},
                {text:"stained glass lime",value:"95,5"},
                {text:"stained glass magenta",value:"95,2"},
                {text:"stained glass orange",value:"95,1"},
                {text:"stained glass pink",value:"95,6"},
                {text:"stained glass purple",value:"95,10"},
                {text:"stained glass red",value:"95,14"},
                {text:"stained glass white",value:"95,0"},
                {text:"stained glass yellow",value:"95,4"},
                {text:"stairs cobblestone",value:"67,0"},
                {text:"stairs wood",value:"53,0"},
                {text:"stone brick",value:"98,0"},
                {text:"stone button",value:"77,0"},
                {text:"stone slab double",value:"43,0"},
                {text:"stone slab",value:"44,0"},
                {text:"stone",value:"1,0"},
                {text:"sugar cane",value:"83,0"},
                {text:"sunflower",value:"175,0"},
                {text:"TNT",value:"46,0"},
                {text:"torch",value:"50,0"},
                {text:"water flowing",value:"8,0"},
                {text:"water stationary",value:"9,0"},
                {text:"wood button",value:"143,0"},
                {text:"wood planks",value:"5,0"},
                {text:"wood",value:"17,0"},
                {text:"wool black",value:"35,15"},
                {text:"wool blue",value:"35,11"},
                {text:"wool brown",value:"35,12"},
                {text:"wool cyan",value:"35,9"},
                {text:"wool gray",value:"35,7"},
                {text:"wool green",value:"35,13"},
                {text:"wool light blue",value:"35,3"},
                {text:"wool light gray",value:"35,8"},
                {text:"wool lime",value:"35,5"},
                {text:"wool magenta",value:"35,2"},
                {text:"wool orange",value:"35,1"},
                {text:"wool pink",value:"35,6"},
                {text:"wool purple",value:"35,10"},
                {text:"wool red",value:"35,14"},
                {text:"wool white",value:"35,0"},
                {text:"wool yellow",value:"35,4"}
            ]            
            }
            }
        };
    };
    
    parseXYZ(x,y,z) {
        var coords = [];
        if (typeof(x)=="string" && x.indexOf(",") >= 0) {
            return x.split(",").map(parseFloat);
        }
        else {
            return [x,y,z];
        }
    }

    blockByName({name}){
        return name;
    }
    
    sendAndReceive(msg) {
        var rjm = this;
        return new Promise(function(resolve, reject) {            
            rjm.socket.onmessage = function(event) {
                resolve(event.data.trim());
            };
            rjm.socket.onerror = function(err) {
                reject(err);
            };
            rjm.socket.send(msg);
        });
    };
    
    resume() {
        if (this.savedBlocks != null) {
            for (var [key, value] of this.savedBlocks)
                this.socket.send("world.setBlock("+key+","+value+")");
            this.savedBlocks = null;
        }
    };
    
    suspend() {
        if (this.savedBlocks == null) {
            this.savedBlocks = new Map();
        }
    }
    
    drawBlock(x,y,z,b) {
        if (this.savedBlocks != null) {
            this.savedBlocks.set(""+x+","+y+","+z, b);
        }
        else {
            this.socket.send("world.setBlock("+x+","+y+","+z+","+b+")");
        }
    };

    drawLine(x1,y1,z1,x2,y2,z2) {
        var l = this.getLine(x1,y1,z1,x2,y2,z2);
        
        for (var i=0; i<l.length ; i++) {
            this.drawBlock(l[i][0],l[i][1],l[i][2],this.turtle.block);
        }
    };
    
    turnTurtle({dir,n}) {
        if (dir=="right" || dir=="yaw") {
            this.turtle.matrix = this.turtle.mmMultiply(this.turtle.matrix, this.turtle.yawMatrix(n));    
        }
        else if (dir=="pitch") {
            this.turtle.matrix = this.turtle.mmMultiply(this.turtle.matrix, this.turtle.pitchMatrix(n));    
        }
        else { // if (dir=="roll") {
            this.turtle.matrix = this.turtle.mmMultiply(this.turtle.matrix, this.turtle.rollMatrix(n));    
        }
    };
    
    leftTurtle({n}) {
        this.turtle.matrix = this.turtle.mmMultiply(this.turtle.matrix, this.turtle.yawMatrix(-n));    
    }
    
    rightTurtle({n}) {
        this.turtle.matrix = this.turtle.mmMultiply(this.turtle.matrix, this.turtle.yawMatrix(n));
    }
    
    resetTurtleAngle({n}) {
        this.turtle.matrix = this.turtle.yawMatrix(n);
    };
    
    pen({state}) {
        this.turtle.penDown = state;
    }
    
    turtleBlock({b}) {
        this.turtle.block = b;
    }
    
    turtleBlockEasy({b}) {
        this.turtle.block = b;
    }
    
    setTurtlePosition({x,y,z}) {
        this.turtle.pos = this.parseXYZ(x,y,z);
    }
    
    turtleThickness({n}) {
        if (n==0) {
            this.turtle.nib = [];
        }
        else if (n==1) {
            this.turtle.nib = [[0,0,0]];
        }
        else if (n==2) {
            this.turtle.nib = [];
            for (var x=0; x<=1; x++) 
                for (var y=0; y<=1; y++) 
                    for (var z=0; z<=1; z++) 
                        this.turtle.nib.push([x,y,z]);
        }
        else {
            var r2 = n*n/4;
            var d = Math.ceil(n/2);
            this.turtle.nib = [];
            for (var x=-d; x<=d; x++) 
                for (var y=-d; y<=d; y++) 
                    for (var z=-d; z<=d; z++) 
                        if (x*x+y*y+z*z <= r2)
                            this.turtle.nib.push([x,y,z]);
        }
    }
    
    saveTurtle() {
        var t = this.turtle.clone();
        this.turtleHistory.push(t);
    }
    
    restoreTurtle() {
        if (this.turtleHistory.length > 0) {
            this.turtle = this.turtleHistory.pop();
        }
    }

    drawPoint(x0,y0,z0) {
        var l = this.turtle.nib.length;
        if (l == 0) {
            return;
        }
        else if (l == 1) {
            this.drawBlock(x0,y0,z0,this.turtle.block)
            return;
        }

        for (var i = 0 ; i < l ; i++) {
            var p = this.turtle.nib[i];
            var x = p[0] + x0;
            var y = p[1] + y0;
            var z = p[2] + z0;
            this.drawBlock(x,y,z,this.turtle.block)
        }
    };

    moveTurtle({dir,n}) {
        n *= dir;
        var newX = this.turtle.pos[0] + this.turtle.matrix[0][2] * n;
        var newY = this.turtle.pos[1] + this.turtle.matrix[1][2] * n;
        var newZ = this.turtle.pos[2] + this.turtle.matrix[2][2] * n;
        if (this.turtle.penDown != 0)
            this.drawLine(Math.round(this.turtle.pos[0]),Math.round(this.turtle.pos[1]),Math.round(this.turtle.pos[2]),Math.round(newX),Math.round(newY),Math.round(newZ));
        this.turtle.pos = [newX,newY,newZ];
    }; 
    
    getPosition() {
        return this.sendAndReceive("player.getPos()")
            .then(pos => {
                var p = pos.split(",");
                return [parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])];
            });
    };

    spawnEntity({entity,x,y,z}) {
        var [x,y,z] = this.parseXYZ(x,y,z);
        return this.sendAndReceive("world.spawnEntity("+entity+","+x+","+y+","+z+")"); // TODO: do something with entity ID?
    };

    movePlayer({dx,dy,dz}) {
        var [x,y,z] = this.parseXYZ(dx,dy,dz);
        return this.getPosition().then(pos => this.setPlayerPos({x:pos[0]+x,y:pos[1]+y,z:pos[2]+z}));
    };

    movePlayerTop() {
        return this.getPosition().then(pos => 
            this.sendAndReceive("world.getHeight("+Math.floor(pos[0])+","+Math.floor(pos[2])+")").then(
                height => this.setPlayerPos({x:pos[0],y:height,z:pos[2]})));
    };

    getRotation() {
        return this.sendAndReceive("player.getRotation()")
            .then(r => {
                return parseFloat(r);
            });
    };
    
    getBlock({x,y,z}) {
        var pos = ""+this.parseXYZ(x,y,z).map(Math.floor);
        if (this.savedBlocks != null) {
            if (this.savedBlocks.has(pos)) {
                var b = this.savedBlocks.get(pos);
                if (b.indexOf(",")<0)
                    return ""+b+",0";
                else
                    return b;
            }
        }
        return this.sendAndReceive("world.getBlockWithData("+pos+")")
            .then(b => {
                return b;
            });
    };

    onBlock({b}) {
        return this.getPosition().then( pos => this.sendAndReceive("world.getBlockWithData("+Math.floor(pos[0])+","+Math.floor(pos[1]-1)+","+Math.floor(pos[2])+")")
                    .then( block => block == b ) );
    }

    haveBlock({b,x,y,z}) {
        var [x,y,z] = this.parseXYZ(x,y,z).map(Math.floor);
        return this.sendAndReceive("world.getBlockWithData("+x+","+y+","+z+")")
            .then(block => {
                return block == b;
            });
    };
    
    getPlayerVector({mode}) {
        return this.getPosition()
            .then(pos => mode != 0 ? ""+pos[0]+","+pos[1]+","+pos[2] : ""+Math.floor(pos[0])+","+Math.floor(pos[1])+","+Math.floor(pos[2]));
    };
    
    makeVector({x,y,z}) {
        return ""+x+","+y+","+z
    }
    
    getHit() {
        if (this.hits.length>0) 
            return ""+this.hits.shift().slice(0,3);
        var rjm = this;
        return this.sendAndReceive("events.block.hits()")
            .then(result => {
                if (result.indexOf(",") < 0) 
                    return "";
                
                else {
                    var hits = result.split("|");
                    for(var i=0;i<hits.length;i++)
                        rjm.hits.push(hits[i].split(",").map(parseFloat));
                }
                return ""+this.shift.pop().slice(0,3);
            });
    };

    extractFromVector({vector,coordinate}) {
        var v = vector.split(",");
        if (v.length <= coordinate) {
            return 0.;
        }
        else {
            return parseFloat(v[coordinate]);
        }
    };

    getPlayerX({mode}) {
        return this.getPosition()
            .then(pos => mode != 0 ? pos[0] : Math.floor(pos[0]));
    };

    getPlayerY({mode}) {
        return this.getPosition()
            .then(pos => mode != 0 ? pos[1] : Math.floor(pos[1]));
    };

    getPlayerZ({mode}) {
        return this.getPosition()
            .then(pos => mode != 0 ? pos[2] : Math.floor(pos[2]));
    };

    connect_p({ip}){
        this.ip = ip;
        var rjm = this;
        return new Promise(function(resolve, reject) {
            if (rjm.socket != null)
                rjm.socket.close();
            rjm.clear();
            rjm.socket = new WebSocket("ws://"+ip+":14711");
            rjm.socket.onopen = function() {                
                resolve();
            };
            rjm.socket.onerror = function(err) {
                reject(err);
            };
        }).then(result => rjm.getPosition().then( result => {
            rjm.turtle.pos = result;
        })).then (result => rjm.getRotation().then( result => {
            rjm.playerRot = result;
            rjm.turtle.matrix = rjm.turtle.yawMatrix(Math.floor(0.5+result/90)*90);
        }));
    };
    
    chat({msg}){
        this.socket.send("chat.post("+msg+")");
    };
    
    getLine(x1,y1,z1,x2,y2,z2) {
        var line = [];
        x1 = Math.floor(x1);
        y1 = Math.floor(y1);
        z1 = Math.floor(z1);
        x2 = Math.floor(x2);
        y2 = Math.floor(y2);
        z2 = Math.floor(z2);
        var point = [x1,y1,z1];
        var dx = x2 - x1;
        var dy = y2 - y1;
        var dz = z2 - z1;
        var x_inc = dx < 0 ? -1 : 1;
        var l = Math.abs(dx);
        var y_inc = dy < 0 ? -1 : 1;
        var m = Math.abs(dy);
        var z_inc = dz < 0 ? -1 : 1;
        var n = Math.abs(dz);
        var dx2 = l * 2;
        var dy2 = m * 2;
        var dz2 = n * 2;
        
        var nib = this.turtle.nib;
        
        var draw = function(x,y,z) {
            for (var i=0; i<nib.length; i++) {
                var nx = x + nib[i][0];
                var ny = y + nib[i][1];
                var nz = z + nib[i][2];
                var j;
                for (j=0; j<line.length; j++) {
                    if (line[j][0] == nx && line[j][1] == ny && line[j][2] == nz)
                        break;
                }
                if (j<line.length)
                    continue;
                line.push([nx,ny,nz]);
            }
        };

        if (l >= m && l >= n) {
            var err_1 = dy2 - l;
            var err_2 = dz2 - l;
            for (var i=0; i<l; i++) {
                draw(point[0],point[1],point[2]);
                if (err_1 > 0) {
                    point[1] += y_inc;
                    err_1 -= dx2;
                }
                if (err_2 > 0) {
                    point[2] += z_inc;
                    err_2 -= dx2;
                }
                err_1 += dy2;
                err_2 += dz2;
                point[0] += x_inc;
            }
        }
        else if (m >= l && m >= n) {
            err_1 = dx2 - m;
            err_2 = dz2 - m;
            for (var i=0; i<m; i++) {
                draw(point[0],point[1],point[2]);
                if (err_1 > 0) {
                    point[0] += x_inc;
                    err_1 -= dy2;
                }
                if (err_2 > 0) {
                    point[2] += z_inc;
                    err_2 -= dy2;
                }
                err_1 += dx2;
                err_2 += dz2;
                point[1] += y_inc;
            }
        }
        else {
            err_1 = dy2 - n;
            err_2 = dx2 - n;
            for (var i=0; i < n; i++) {
                draw(point[0],point[1],point[2]);
                if (err_1 > 0) {
                    point[1] += y_inc;
                    err_1 -= dz2;
                }
                if (err_2 > 0) {
                    point[0] += x_inc;
                    err_2 -= dz2;
                }
                err_1 += dy2;
                err_2 += dx2;
                point[2] += z_inc;
            }
        }
        draw(point[0],point[1],point[2]);
        if (point[0] != x2 || point[1] != y2 || point[2] != z2) {
            draw(x2,y2,z2);
        }
        return line;
    };
    
    setBlock({x,y,z,b}) {
      var [x,y,z] = this.parseXYZ(x,y,z).map(Math.floor);
      this.drawBlock(x,y,z,b);
    };

    setPlayerPos({x,y,z}) {
      var [x,y,z] = this.parseXYZ(x,y,z);
      this.socket.send("player.setPos("+x+","+y+","+z+")");
    };
}

class ScratchFetch {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Fetch",
            "name": "Fetch",
            "blocks": [
                        {
                            "opcode": "fetchURL",
                            "blockType": "reporter",
                            "text": "fetch data from [url]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": "https://api.weather.gov/stations/KNYC/observations"
                                },
                            }
                        },
                        {
                            "opcode": "jsonExtract",
                            "blockType": "reporter",
                            "text": "extract [name] from [data]",
                            "arguments": {
                                "name": {
                                    "type": "string",
                                    "defaultValue": "temperature"
                                },
                                "data": {
                                    "type": "string",
                                    "defaultValue": '{"temperature": 12.3}'
                                },
                            }
                        },
                ],
        };
    }
    
    fetchURL({url}) {
        return fetch(url).then(response => response.text())
    }
    
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

class SingleGamepad {
    constructor(index) {
        this.id = null
        this.index = index
        this.currentMSecs = null
    }
    
    matches(gamepad) {
        return gamepad && this.index != null && gamepad.id == this.id && 
            gamepad.buttons.length == this.currentButtons.length && gamepad.axes.length == this.currentAxes.length
    }
    
    getGamepad(i) {
        var gamepads = navigator.getGamepads()
        if (gamepads == null || gamepads.length <= i || ! gamepads[i]) 
            return null
        return gamepads[i]
    }
    
    update(currentMSecs) {
        if (this.currentMSecs == currentMSecs)
            return
        
        var gamepad = this.getGamepad(this.index)
        
        if (gamepad == null) {
            this.id = null
            this.currentButtons = []
            this.previousButtons = []
            this.currentAxes = []
            this.previousAxes = []
            return
        }
        
        this.currentMSecs = currentMSecs
        
        if (!this.matches(gamepad)) {
            this.id = gamepad.id
        
            this.previousButtons = []
            for (var i=0;i<gamepad.buttons.length;i++) {
                this.previousButtons.push(false)
            }
            
            this.previousAxes = []
            for (var i=0;i<gamepad.axes.length;i++) {
                this.previousAxes.push(0)
            }
        }
        else {
            this.previousButtons = this.currentButtons
            this.previousAxes = this.previousAxes
        }
        
        this.currentButtons = []
        for (var i=0;i<gamepad.buttons.length;i++) {
            this.currentButtons.push(gamepad.buttons[i].pressed)
        }
        
        this.currentAxes = []
        for (var i=0;i<gamepad.axes.length;i++) {
            this.currentAxes.push(gamepad.axes[i])
        }
        console.log(this.currentButtons)
    }
    
    pressedReleased(currentMSecs,i,pr) {
        this.update(currentMSecs)
        
        if (i < this.currentButtons.length) {
            return this.currentButtons[i] != this.previousButtons[i] && this.currentButtons[i] == pr
        }
        
        return false
    }
    
    changedAxis(currentMSecs,i) {
        this.update(currentMSecs)
        
        if (i < this.currentAxes.length)
            return this.currentAxes[i] != this.previousAxes[i]
        
        return false
    }
    
    getButton(currentMSecs,i) {
        this.update(currentMSecs)
        console.log(""+currentMSecs+" "+i+this.currentButtons)
        if (i < this.currentButtons.length) {
            return this.currentButtons[i]
        }
        else {
            return false
        }
    }
    
    getAxis(currentMSecs,i) {
        this.update(currentMSecs)
        if (i < this.currentAxes.length)
            return this.currentAxes[i]
        else
            return false
    }
    
    rumble(s,w,t) {
        var gamepad = this.gamepads[i].getGamepad()
        if (gamepad != null && gamepad.vibrationActuator) {
            gamepad.vibrationActuator.playEffect("dual-rumble", {
                duration: 1000*t,
                strongMagnitude: Math.max(0,Math.min(s,1)),
                weakMagnitude: Math.max(0,Math.min(w,1))
            });
        }
    }
}

class ScratchGamepad {
    constructor(runtime) {
        this.id = null
        this.runtime = runtime
        this.gamepads = []
        for (var i=0;i<4;i++)
            this.gamepads.push(new SingleGamepad(i))
    }
    
    getInfo() {
        return {
            "id": "Gamepad",
            "name": "Gamepad",
            "blocks": [{
                        "opcode": "buttonPressedReleased",
                        "blockType": "hat",
                        "text": "button [b] [pr] of pad [i]",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "pr": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "pressReleaseMenu"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },
                    },
                    {
                        "opcode": "buttonDown",
                        "blockType": "Boolean",
                        "text": "button [b] of pad [i] is down",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },                    
                    },
                    {
                        "opcode": "axisMoved",
                        "blockType": "hat",
                        "text": "axis [b] of pad [i] moved",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },
                    },
                    {
                        "opcode": "axisValue",
                        "blockType": "reporter",
                        "text": "axis [b] of pad [i] value",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },                    
                    },
                    {
                        "opcode": "rumble",
                        "blockType": "command",
                        "text": "rumble strong [s] and weak [w] for [t] sec. on pad [i]",
                        "arguments": {
                            "s": {
                                "type": "number",
                                "defaultValue": "0.25"
                            },
                            "w": {
                                "type": "number",
                                "defaultValue": "0.5"
                            },
                            "t": {
                                "type": "number",
                                "defaultValue": "0.25"
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": "1",
                                "menu": "padMenu"
                            },
                        },                    
                    },
            ],
            "menus": {
                "pressReleaseMenu": [{text:"press",value:1}, {text:"release",value:0}],
                "padMenu": {
                            acceptReporters: true, 
                            items: [{text:"1",value:1}, {text:"2",value:2}, {text:"3",value:3}, {text:"4",value:4}],
                }
            }            
        };
    }
    
    buttonPressedReleased({b,pr,i}) {
        return this.gamepads[i-1].pressedReleased(this.runtime.currentMSecs,b-1,pr)
    }

    axisMoved({b,i}) {
        return this.gamepads[i-1].changedAxis(this.runtime.currentMSecs,b-1)
    }
    
    axisValue({b,i}) {
        return this.gamepads[i-1].getAxis(this.runtime.currentMSecs,b-1)
    }
    
    buttonDown({b,i}) {
        return this.gamepads[i-1].getButton(this.runtime.currentMSecs,b-1)
    }
    
    rumble({s,w,t,i}) {
        this.gamepads[i-1].rumble(s,w,t)
    }
}

(function() {
    var extensionClass = RaspberryJamMod
    if (typeof window === "undefined" || !window.vm) {
        Scratch.extensions.register(new extensionClass())
    }
    else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime)
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
        var extensionInstance2 = new ScratchGamepad(window.vm.extensionManager.runtime)
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance2)
        window.vm.extensionManager._loadedExtensions.set(extensionInstance2.getInfo().id, serviceName)
    }
})()

Scratch.extensions.register(new Utilities());
Scratch.extensions.register(new ScratchFetch());