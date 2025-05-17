export const memorialsConcurso1 = [
  {
    id: 1,
    title: "Memorial Equipo 10",
    file: "MEMORIAL EQUIPO N_10.pdf"
  },
  {
    id: 2,
    title: "Memorial Equipo 12",
    file: "MEMORIAL EQUIPO N_12.pdf"
  },
  {
    id: 3,
    title: "Memorial Equipo 14",
    file: "MEMORIAL EQUIPO N_14.pdf"
  },
  {
    id: 4,
    title: "Memorial Equipo 30",
    file: "MEMORIAL EQUIPO N_30.pdf"
  },
  {
    id: 5,
    title: "Memorial Equipo 32",
    file: "MEMORIAL EQUIPO N_32.pdf"
  },
  {
    id: 6,
    title: "Memorial Equipo 34",
    file: "MEMORIAL EQUIPO N_34.pdf"
  }
];

export const memorialsConcurso2 = [
    {
        id: 1,
        title: "Memorial Equipo 10 Estado",
        file: "EQUIPO E-10 (ESTADO).pdf"
    },
    {
        id: 2,
        title: "Memorial Equipo 11 Estado",
        file: "EQUIPO E-11 (ESTADO).pdf"
    },
    {
        id: 2,
        title: "Memorial Equipo 10 Victimas",
        file: "EQUIPO V-10 (VICTIMAS).pdf"
    },
    {
        id: 2,
        title: "Memorial Equipo 11 Victimas",
        file: "EQUIPO V-11 (VICTIMAS).pdf"
    },
];

export const getDocumentUrl = (filename) => {
  return new URL(`../assets/concurso-i/docs/${filename}`, import.meta.url).href;
};