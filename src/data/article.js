var images = [];
var object = {};

const getImages = () => {
  fetch(
    "https://api.giphy.com/v1/gifs/search?q=art&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K"
  )
    .then((response) => response.json())
    .then((data) => {
      object = data;
      object.data.map((image) => {
        images.push(image.images.downsized.url);
      });
    });
  return([]);
};

getImages();

const lesalon = [
  {
    id: "1",
    name: "Article Audio",
    date: "13/10/2020",
    image: [
      "https://static3.depositphotos.com/1005669/201/i/600/depositphotos_2014626-stock-photo-digital-audio.jpg",
    ],
    section: "balado",
    type: "balado",
    media:
      "https://anchor.fm/le-labo-podcast-1/embed/episodes/Ressenti-Marc-Audette--Ron-Loranger-e1cb33e/a-a75si7j",
    description:
      "Lorem ipsum dolor sit amet, **consectetur adip non pro id**, sed *diam* nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. [Lorem](http://en.wikipedia.org/wiki/Lorem) ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
  },
  {
    id: "2",
    name: "Article Video",
    date: "3/5/2020",
    section: "video",
    type: "video",
    media: "https://vimeo.com/128183956",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
  },
  {
    id: "3",
    name: "Single Article",
    date: "25/12/2020",
    image: images,
    // "https://concepto.de/wp-content/uploads/2015/05/articulo-de-opinion-e1547055829829.jpg",
    section: "exposiciones",
    type: "exposiciones",
    description: `Un tigre que cuando cachorro habia sido capturado por humanos fue liberado luego de varios años de vida domestica. La vida entre los hombres no habia menguado sus fuerzas ni sus instintos; en cuanto lo liberaron, corrio a la selva. Ya en la espesura, sus hermanos teniéndolo otra vez entre ellos, le preguntaron:

      -¿Que has aprendido?
      
      El tigre medito sin prisa. Quería transmitirles algún concepto sabio, trascendente. Recordó un comentario humano: "Los tigres no son inmortales. Creen que son inmortales porque ignoran la muerte, ignoran que morirán."
      
      Ah, pensó el tigre para sus adentros, ese es un pensamiento que los sorprenderá: no somos inmortales, la vida no es eterna. -Aprendí esto- dijo por fin-. No somos inmortales solo ignoramos que alguna vez vamos a....
      
      Los otros tigres no lo dejaron terminar de hablar, se abalanzaron sobre el, le mordieron el cuello y lo vieron desangrarse hasta morir. Es el problema de los enfermos de muerte -dijo uno de los felinos-. Se tornan resentidos y quieren contagiar a todos.''
      
      Marcelo Birmajer, El tigre enfermo`,
  },
  {
    id: "4",
    name: "Article Audio 2",
    date: "13/10/2020",
    image: [
      "https://musicopro.com/wp-content/uploads/2019/01/mezclar-audio-profesional-grabado-en-otro-estudio-2.jpg",
    ],
    section: "balado",
    type: "balado",
    media:
      "https://anchor.fm/le-labo-podcast-1/embed/episodes/Auto-fiction-Genevive-Thauvette--Maria-Legault-e1cb3jf/a-a75sl5a",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
  },
  {
    id: "5",
    name: "Article Video 2",
    date: "13/1/2021",
    section: "video",
    type: "video",
    media: "https://vimeo.com/275135946",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
  },
  {
    id: "6",
    name: "Single Article 2",
    date: "3/8/2020",
    image: [
      "https://concepto.de/wp-content/uploads/2015/05/articulo-de-opinion-e1547055829829.jpg",
    ],
    section: "exposiciones",
    type: "exposiciones",
    description: `Un tigre que cuando cachorro habia sido capturado por humanos fue liberado luego de varios años de vida domestica. La vida entre los hombres no habia menguado sus fuerzas ni sus instintos; en cuanto lo liberaron, corrio a la selva. Ya en la espesura, sus hermanos teniéndolo otra vez entre ellos, le preguntaron:

      -¿Que has aprendido?
      
      El tigre medito sin prisa. Quería transmitirles algún concepto sabio, trascendente. Recordó un comentario humano: "Los tigres no son inmortales. Creen que son inmortales porque ignoran la muerte, ignoran que morirán."
      
      Ah, pensó el tigre para sus adentros, ese es un pensamiento que los sorprenderá: no somos inmortales, la vida no es eterna. -Aprendí esto- dijo por fin-. No somos inmortales solo ignoramos que alguna vez vamos a....
      
      Los otros tigres no lo dejaron terminar de hablar, se abalanzaron sobre el, le mordieron el cuello y lo vieron desangrarse hasta morir. Es el problema de los enfermos de muerte -dijo uno de los felinos-. Se tornan resentidos y quieren contagiar a todos.''
      
      Marcelo Birmajer, El tigre enfermo`,
  },
  {
    id: "7",
    name: "Article Video 3",
    section: "video",
    type: "video",
    media: "https://vimeo.com/275135946",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
  },
  {
    id: "8",
    name: "Article Audio 3",
    date: "13/10/2020",
    image: [
      "https://static3.depositphotos.com/1005669/201/i/600/depositphotos_2014626-stock-photo-digital-audio.jpg",
    ],
    section: "balado",
    type: "balado",
    media:
      "https://anchor.fm/le-labo-podcast-1/embed/episodes/IntimitIdentit-Lise-Beaudry--Jacquelyn-Hbert-e1cb1j8/a-a75s6hr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
  },
  {
    id: "9",
    name: "Single Article 3",
    date: "13/10/2020",
    image: [
      "https://concepto.de/wp-content/uploads/2015/05/articulo-de-opinion-e1547055829829.jpg",
    ],
    section: "exposiciones",
    type: "exposiciones",
    description: `Un tigre que cuando cachorro habia sido capturado por humanos fue liberado luego de varios años de vida domestica. La vida entre los hombres no habia menguado sus fuerzas ni sus instintos; en cuanto lo liberaron, corrio a la selva. Ya en la espesura, sus hermanos teniéndolo otra vez entre ellos, le preguntaron:

      -¿Que has aprendido?
      
      El tigre medito sin prisa. Quería transmitirles algún concepto sabio, trascendente. Recordó un comentario humano: "Los tigres no son inmortales. Creen que son inmortales porque ignoran la muerte, ignoran que morirán."
      
      Ah, pensó el tigre para sus adentros, ese es un pensamiento que los sorprenderá: no somos inmortales, la vida no es eterna. -Aprendí esto- dijo por fin-. No somos inmortales solo ignoramos que alguna vez vamos a....
      
      Los otros tigres no lo dejaron terminar de hablar, se abalanzaron sobre el, le mordieron el cuello y lo vieron desangrarse hasta morir. Es el problema de los enfermos de muerte -dijo uno de los felinos-. Se tornan resentidos y quieren contagiar a todos.''
      
      Marcelo Birmajer, El tigre enfermo`,
  },
  {
    id: "10",
    name: "Single Article 3",
    date: "13/10/2020",
    image: [
      "https://concepto.de/wp-content/uploads/2015/05/articulo-de-opinion-e1547055829829.jpg",
    ],
    section: "exposiciones",
    type: "exposiciones",
    description: `Un tigre que cuando cachorro habia sido capturado por humanos fue liberado luego de varios años de vida domestica. La vida entre los hombres no habia menguado sus fuerzas ni sus instintos; en cuanto lo liberaron, corrio a la selva. Ya en la espesura, sus hermanos teniéndolo otra vez entre ellos, le preguntaron:

      -¿Que has aprendido?
      
      El tigre medito sin prisa. Quería transmitirles algún concepto sabio, trascendente. Recordó un comentario humano: "Los tigres no son inmortales. Creen que son inmortales porque ignoran la muerte, ignoran que morirán."
      
      Ah, pensó el tigre para sus adentros, ese es un pensamiento que los sorprenderá: no somos inmortales, la vida no es eterna. -Aprendí esto- dijo por fin-. No somos inmortales solo ignoramos que alguna vez vamos a....
      
      Los otros tigres no lo dejaron terminar de hablar, se abalanzaron sobre el, le mordieron el cuello y lo vieron desangrarse hasta morir. Es el problema de los enfermos de muerte -dijo uno de los felinos-. Se tornan resentidos y quieren contagiar a todos.''
      
      Marcelo Birmajer, El tigre enfermo`,
  },
];

const services = [
  {
    id: "1",
    name: "formation 1",
    section: "formation",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "2",
    name: "formation 2",
    section: "formation",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "3",
    name: "formation 3",
    section: "formation",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "4",
    name: "formation 4",
    section: "formation",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "5",
    name: "formation 5",
    section: "formation",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "6",
    name: "formation 6",
    section: "formation",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "7",
    name: "formation 7",
    section: "formation",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "8",
    name: "formation 8",
    section: "formation",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "9",
    name: "Location 1",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/9271926/pexels-photo-9271926.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "10",
    name: "Location 2",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/279085/pexels-photo-279085.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "11",
    name: "Location 3",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/4560444/pexels-photo-4560444.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "12",
    name: "Location 4",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/10609647/pexels-photo-10609647.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "13",
    name: "Location 5",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/10609655/pexels-photo-10609655.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "14",
    name: "Location 6",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/6001883/pexels-photo-6001883.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "15",
    name: "Location 7",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/10609645/pexels-photo-10609645.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "16",
    name: "Location 8",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/10609652/pexels-photo-10609652.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "17",
    name: "Location 9",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/5730541/pexels-photo-5730541.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "18",
    name: "Location 10",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/9271926/pexels-photo-9271926.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "19",
    name: "Location 11",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/279085/pexels-photo-279085.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "20",
    name: "Location 12",
    section: "location",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/4560444/pexels-photo-4560444.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "21",
    name: "Studio 1",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/4560444/pexels-photo-4560444.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "22",
    name: "Studio 2",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "23",
    name: "Studio 3",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/53265/pexels-photo-53265.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "24",
    name: "Studio 4",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "25",
    name: "Studio 5",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "26",
    name: "Studio 6",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "27",
    name: "Studio 7",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "28",
    name: "Studio 8",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/696407/pexels-photo-696407.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "29",
    name: "Studio 9",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/1029630/pexels-photo-1029630.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "30",
    name: "Studio 10",
    section: "studio",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
];

const lacommunautee = [
  {
    id: "1",
    name: "Benevolat 1",
    section: "benevolat",
    type: "exposiciones",
    image: [
      `https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&h=350`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "2",
    name: "Benevolat 2",
    section: "benevolat",
    type: "exposiciones",
    image: [
      `"https://static3.depositphotos.com/1005669/201/i/600/depositphotos_2014626-stock-photo-digital-audio.jpg"`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "3",
    name: "Devenir 1",
    section: "devenir",
    type: "exposiciones",
    image: [
      `"https://static3.depositphotos.com/1005669/201/i/600/depositphotos_2014626-stock-photo-digital-audio.jpg"`,
    ],
    description:
      "[Form Suscription Link](https://www.questionpro.com/es/ejemplos-de-formularios-en-linea.html) Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
];

const ressources = [
  {
    id: "1",
    name: "Publication 1",
    section: "publications",
    type: "exposiciones",
    image: [`https://media.giphy.com/media/ZFKaOsucd3qqcvrKMQ/giphy.gif`],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "2",
    name: "Bulletin 1",
    section: "bulletin",
    type: "exposiciones",
    image: [`https://media.giphy.com/media/3o6MbcX2pWlJb0b1ks/giphy.gif`],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "3",
    name: "Outils 1",
    section: "outils",
    type: "exposiciones",
    image: [`https://media.giphy.com/media/jRYkbH7tW1Q3Z9OHws/giphy.gif`],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
];

const presse = [
  {
    id: "1",
    name: "Revue 1",
    section: "revue",
    type: "exposiciones",
    image: [`https://media.giphy.com/media/ljS9tJYj7xwNa0IFKs/giphy.gif`],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "2",
    name: "Revue 2",
    section: "revue",
    type: "exposiciones",
    image: [`https://media.giphy.com/media/gJutXZiGf8kHJs5T4r/giphy.gif`],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "3",
    name: "Dossier 1",
    section: "dossier",
    type: "exposiciones",
    image: [`https://media.giphy.com/media/l2Jei9MlhiNyXAAZq/giphy.gif`],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
  {
    id: "4",
    name: "Dossier 2",
    section: "dossier",
    type: "exposiciones",
    image: [`https://media.giphy.com/media/EtpSQxmE6XIfC/giphy.gif`],
    description:
      "Lorem ipsum dolor sit amet, consectetur adip non pro id, sed diam nonum nib nibh. Ut enim ad minim veniam et dolore magna aliquet erat, consectetur adip non pro id et dolor. Lorem ipsum dolor sit amet, consectetur adip non pro id et dolor et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit amet, con sect et dolor et dolor. Lorem ipsum dolor sit am et dolor",
    link: "",
  },
];

export { lesalon, services, lacommunautee, ressources, presse };
