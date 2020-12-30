
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * 16);
      color += letters[index];
    }
  
    return color;
  }
  
  
  export default {getRandomColor};