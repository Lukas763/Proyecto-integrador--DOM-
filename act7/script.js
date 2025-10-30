const data = [
  { question: "¿Qué es JavaScript?", answer: "JavaScript es un lenguaje de programación." },
  { question: "¿Cómo funciona el DOM?", answer: "El DOM es una representación estructural del documento HTML." },
  { question: "¿Qué es una variable?", answer: "Una variable es un contenedor de información." }
];

const accordion = document.getElementById('accordion');

data.forEach(item => {
  const accordionItem = document.createElement('div');
  accordionItem.classList.add('accordion-item');
  
  const header = document.createElement('div');
  header.classList.add('accordion-header');
  header.textContent = item.question;
  accordionItem.appendChild(header);
  
  const content = document.createElement('div');
  content.classList.add('accordion-content');
  content.textContent = item.answer;
  accordionItem.appendChild(content);
  
  accordion.appendChild(accordionItem);

  header.addEventListener('click', () => {
    accordionItem.classList.toggle('active');
  });
});
