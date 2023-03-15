class pen {
  constructor () {}
  getInfo() {
    return {
      id: "pen",
      name: "Pen",
      blocks: [ // Removed a curly bracket here
        {
          opcode: "ready",
          blockType: Scratch.BlockType.COMMAND, // Removed an extra quote here
          text: "send ready message",
        }, // Commas are needed between items of an array
        {
          opcode: "penColor",
          blockType: Scratch.BlockType.REPORTER,
          text: "penColor",
        },
        {
          opcode: "penSize",
          blocktype: Scratch.BlockType.REPORTER,
          text: "penSize"
        },
        {
          opcode: "penTransparency",
          blocktype: Scratch.BlockType.REPORTER,
          text: "penTransparency"
        },
        {
          opcode: "penCommand",
          blocktype: Scratch.BlockType.REPORTER,
          text: "penCommand"
        },
        {
          opcode: "penCommandValue", // Removed an extra quote after `opcode`
          blocktype: Scratch.BlockType.REPORTER,
          text: "penCommandValue"
        },
      ], // Removed the corresponding curly bracket
    }; // Added a forgotten closing curly bracket here
  };
  ready() {
    penReady = true;
  };
  penColor() {
    return penColor;
  };
  penSize() {
    return penSize;
  };
  penTransparency() {
    return penTransparency;
  };
  penCommand() {
    return penCommand;
  };
  penCommandValue() {
    return penCommandValue;
  };
}
Scratch.extensions.register(new pen());
