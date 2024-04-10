document.addEventListener('DOMContentLoaded', () => {
  let counter = parseInt(localStorage.getItem('counter')) || 0; 
  document.getElementById('counter').textContent = counter; 
  
  const updateCounter = (value) => {
    counter += value;
    document.getElementById('counter').textContent = counter;
    localStorage.setItem('counter', counter); 
  };
  
  document.getElementById('addBtn').addEventListener('click', () => {
    updateCounter(1);
  });
  
  document.getElementById('minusBtn').addEventListener('click', () => {
    updateCounter(-1);
  });
});
