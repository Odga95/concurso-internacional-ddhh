export const galleryImages = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/src/assets/img/concursoAnterior/${i + 1}.jpg`,
  alt: `Gallery Image ${i + 1}`
}));