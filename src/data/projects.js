import TODOAPPS from "../assets/project-1.png";
import BOOKSHELFAPPS from "../assets/project-2.png";
import BOOKHOUSEAPPS from "../assets/project-3.png";
import LIBRARYAPI from "../assets/project-4.jpeg";
import LOVELANGUAGEWEB from "../assets/project-5.png";

const projects = [
  {
    id: "todoapps",
    name: "to-do apps",
    desc: "A web application using HTML, CSS, JavaScript which can list your to-do list",
    part: "front-end",
    workFor: "individual",
    img: { TODOAPPS },
    url: "https://froxayn123.github.io/todoapps/",
  },
  {
    id: "bookshelfapps",
    name: "bookshelf apps",
    desc: "A web application using ReactJS & Local Web Storage which can list your books",
    part: "front-end",
    workFor: "individual",
    img: { BOOKSHELFAPPS },
    url: "https://froxayn123.github.io/bookshelfapps/",
  },
  {
    id: "bookhouseapps",
    name: "bookhouse apps",
    desc: "A web application using ReactJS which can find books powered by Google Books",
    part: "front-end",
    workFor: "individual",
    img: { BOOKHOUSEAPPS },
    url: "https://froxayn123.github.io/bookhouse/",
  },
  {
    id: "libraryapi",
    name: "library API",
    desc: "An API using NodeJS & Hapi which can be used for library web",
    part: "back-end",
    workFor: "individual",
    img: { LIBRARYAPI },
    url: "https://github.com/Froxayn123/library-api",
  },
  {
    id: "lovelanguageweb",
    name: "Love Language Web",
    desc: "A web application using ReactJS which can send your Love Language to my email :)",
    part: "front-end",
    workFor: "individual",
    img: { LOVELANGUAGEWEB },
    url: "https://froxayn123.github.io/love-language-web",
  },
];

export { projects };
