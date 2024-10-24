const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

// Ajusta esta ruta a la ubicación correcta de tus imágenes
const directorio = path.join(__dirname, 'public', 'images', 'carrusel-home');

fs.readdir(directorio, (err, archivos) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  const imagenes = archivos
    .filter(archivo => /\.(jpg|jpeg|png|gif|webp)$/i.test(archivo))
    .map((archivo, index) => {
      const rutaCompleta = path.join(directorio, archivo);
      let dimensiones;
      try {
        dimensiones = sizeOf(rutaCompleta);
      } catch (error) {
        console.error(`Error al obtener dimensiones de ${archivo}:`, error);
        return null;
      }
      return {
        id: index + 1,
        src: `/images/carrusel-home/${archivo}`,
        link: `#`,
        width: dimensiones.width,
        height: dimensiones.height
      };
    })
    .filter(Boolean); // Elimina cualquier entrada nula

  console.log(JSON.stringify(imagenes, null, 2));

  // Guardar en un archivo
  fs.writeFile('imagenes.json', JSON.stringify(imagenes, null, 2), (err) => {
    if (err) {
      console.error('Error al escribir el archivo:', err);
    } else {
      console.log('Archivo imagenes.json creado con éxito');
    }
  });
});