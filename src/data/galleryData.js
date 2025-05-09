const images = import.meta.glob('../assets/img/concursoAnterior/*.jpg', {
  eager: true,
  import: 'default'
});

export const galleryImages = Object.entries(images).map(([path, src], index) => ({
  id: index + 1,
  src,
  alt: `Gallery Image ${index + 1}`
}));