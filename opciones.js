
 const especie = document.getElementById("pet_select");
 const raza = document.getElementById("raza_select");
 
 const breeds = {
     perro: ['Bulldog', 'Labrador', 'Beagle'],
     gato: ['Siamés', 'Persa', 'Maine Coon'],
     hamster: ['Sirio', 'Roborovski', 'Chino'],
     perico: ['Opalino', 'Verde', 'Azul'],
     araña: ['Viuda Negra', 'Tarántula', 'Reclusa Marrón'],
     pez: ['Pez Dorado', 'Betta', 'Guppy']
 };
 
 especie.addEventListener('change', (event) => {
     const especieSelected = event.target.value;
     const opcionesRaza = breeds[especieSelected] || [];
     
 
     opcionesRaza.forEach(breed => {
         const opcion = document.createElement("option");
         opcion.value = breed;
         opcion.textContent = breed;
         raza.appendChild(opcion);
     });
 });
 