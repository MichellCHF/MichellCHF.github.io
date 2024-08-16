var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2>Desarrolladora Fronted Jr. | Biotecnóloga</h2>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar lo puedes crear')
    .pauseFor(2500)
    .deleteChars(5)
    .typeString('<strong>programar</strong>')
    .pauseFor(2500)
    .start();
