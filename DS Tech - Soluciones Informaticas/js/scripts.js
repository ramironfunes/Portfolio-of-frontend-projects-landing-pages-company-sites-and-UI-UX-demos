const gpuNvidia = {
    id: 1,
    imagen: "./imagenes/gpunvidia.jpg",
    nombre: "Nvidia EVGA 3070 TI",
    descripcion: "Nvidia EVGA 3070 TI 8 GB",
    precio: 190000
}

let imagen1 = document.getElementById('imgcard1');

imagen1.innerHTML = `

  <img class="card-img-top" src=${gpuNvidia.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${gpuNvidia.nombre}</h5>
    <p class="card-text">${gpuNvidia.descripcion}</p>
    <p class="card-text">$ ${gpuNvidia.precio}</p>
    <button id=btn${gpuNvidia.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

const fuente = {
    id: 2,
    imagen: "./imagenes/fuentexfx1000gq.jpg",
    nombre: "XFX 1000-GQ ",
    descripcion: "Fuente 1000W Modular",
    precio: 50000
}

let imagen2 = document.getElementById('imgcard2');

imagen2.innerHTML = `

  <img class="card-img-top" src=${fuente.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${fuente.nombre}</h5>
    <p class="card-text">${fuente.descripcion}</p>
    <p class="card-text">$ ${fuente.precio}</p>
    <button id=btn${fuente.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

 const memoriaRam = {
    id: 3,
    imagen: "./imagenes/corsairvengeance16gb.jpg",
    nombre: "CORSAIR VENGEANCE 16 GB",
    descripcion: "Memoria RAM Corsair 16gb",
    precio: 35000
}

let imagen3 = document.getElementById('imgcard3');

imagen3.innerHTML = `

  <img class="card-img-top" src=${memoriaRam.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${memoriaRam.nombre}</h5>
    <p class="card-text">${memoriaRam.descripcion}</p>
    <p class="card-text">$ ${memoriaRam.precio}</p>
    <button id=btn${memoriaRam.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

const gabinete = {
    id: 4,
    imagen: "./imagenes/gabinetelevelup.jpg",
    nombre: "GABINETE GAMER LEVEL UP",
    descripcion: "Gabinete Gamer Level UP ATX",
    precio: 20000
}

let imagen4 = document.getElementById('imgcard4');

imagen4.innerHTML = `

  <img class="card-img-top" src=${gabinete.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${gabinete.nombre}</h5>
    <p class="card-text">${gabinete.descripcion}</p>
    <p class="card-text">$ ${gabinete.precio}</p>
    <button id=btn${gabinete.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

const gpuRadeon = {
    id: 5,
    imagen: "./imagenes/gpuradeon.jpg",
    nombre: "AMD RADEON RX 5700XT",
    descripcion: "AMD Radeon RX 5700XT 8 GB",
    precio: 60000
}

let imagen5 = document.getElementById('imgcard5');

imagen5.innerHTML = `

  <img class="card-img-top" src=${gpuRadeon.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${gpuRadeon.nombre}</h5>
    <p class="card-text">${gpuRadeon.descripcion}</p>
    <p class="card-text">$ ${gpuRadeon.precio}</p>
    <button id=btn${gpuRadeon.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

const mother = {
    id: 6,
    imagen: "./imagenes/MothAsusb550.jpg",
    nombre: "ASUS ROG STRIX B550",
    descripcion: "Motherboard ASUS ROG STRIX B550",
    precio: 70000
}

let imagen6 = document.getElementById('imgcard6');

imagen6.innerHTML = `

  <img class="card-img-top" src=${mother.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${mother.nombre}</h5>
    <p class="card-text">${mother.descripcion}</p>
    <p class="card-text">$ ${mother.precio}</p>
    <button id=btn${mother.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;

const teclado = {
    id: 7,
    imagen: "./imagenes/tecladogamerrazer.jpg",
    nombre: "TECLADO RAZER HUNTSMAN V2",
    descripcion: "Teclado Gamer Mecanico RAZER",
    precio: 50000
}

let imagen7 = document.getElementById('imgcard7');

imagen7.innerHTML = `

  <img class="card-img-top" src=${teclado.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${teclado.nombre}</h5>
    <p class="card-text">${teclado.descripcion}</p>
    <p class="card-text">$ ${teclado.precio}</p>
    <button id=btn${teclado.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;



const microIntel = {
    id: 8,
    imagen: "./imagenes/IntelI5.jpg",
    nombre: "Intel I5",
    descripcion: "Micro procesador Intel I5 12ava generacion",
    precio: 78000
}

let imagen8 = document.getElementById('imgcard8');

imagen8.innerHTML = `

  <img class="card-img-top" src=${microIntel.imagen} alt="yerba mate">
  <div class="card-body">
    <h5 class="card-title">${microIntel.nombre}</h5>
    <p class="card-text">${microIntel.descripcion}</p>
    <p class="card-text">$ ${microIntel.precio}</p>
    <button id=btn${microIntel.id} class="btn btn-primary">Comprar</button>
  </div>
</div>
`;
