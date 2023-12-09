let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ec407a;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ec407a;">Soy una persona a la que le gusta transmitir sus conocimientos</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();