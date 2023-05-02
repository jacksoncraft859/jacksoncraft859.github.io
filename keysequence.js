let buffer = [];
let keysequence = ['38', '38', '40', '40', '37', '39', '37', '39'];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
    
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();

    buffer.push(key);
    console.log(buffer);
        
});
