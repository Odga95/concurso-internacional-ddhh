const images = import.meta.glob('../assets/concurso-i/img/*.jpg', {
  eager: true,
  import: 'default'
});

export const imgConcurso1 = Object.entries(images).map(([path, src], index) => ({
  id: index + 1,
  src,
  alt: `Gallery Image ${index + 1}`
}));