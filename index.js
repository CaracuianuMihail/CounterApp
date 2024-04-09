document.addEventListener('DOMContentLoaded', function() {
    let counter = localStorage.getItem('counter') || 0; 
    document.getElementById('counter').textContent = counter; 
    
    document.getElementById('addBtn').addEventListener('click', function() {
      counter++;
      document.getElementById('counter').textContent = counter;
      localStorage.setItem('counter', counter); 
    });
    
    document.getElementById('minusBtn').addEventListener('click', function() {
      counter--;
      document.getElementById('counter').textContent = counter;
      localStorage.setItem('counter', counter); 
    });
  });
  