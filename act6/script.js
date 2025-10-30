document.querySelectorAll('.tabs button').forEach(button => {
  button.addEventListener('click', () => {
    const panelId = button.getAttribute('data-panel');
    
    
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    
    document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));
    document.getElementById(panelId).classList.add('active');
  });
});
