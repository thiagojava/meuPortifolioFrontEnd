import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bellinati,
  boticario,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Node Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Grupo Boticário",
    icon: boticario,
    iconBg: "#383E56",
    date: "March 2022 - Até o momento",
    points: [
      "Desenvolvimento e manutenção de aplicativos da web usando React.js, Node.js e outras tecnologias relacionadas.Colaboração com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.Implementação de design responsivo e garantia de compatibilidade entre navegadores.Participação em revisões de código e fornecimento de feedback construtivo para outros desenvolvedores.",
    ],
  },
  {
    title: "Developer",
    company_name: "Bellinati Perez",
    icon: bellinati,
    iconBg: "#383E56",
    date: "Jan 2022 - Abr 2022",
    points: [
      "Desenvolvimento de novas funcionalidades em VB.NET, resoluções de bugs e problemas relacionados a código e performances.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Trabalhar com o Thiago foi uma experiência incrível. Ele tem uma forma única de descomplicar problemas que parecem complicados demais. Seu jeito de trabalhar com JavaScript, ReactJS e NodeJS é de tirar o chapéu. Se você precisa de um desenvolvedor web que seja confiável e saiba o que está fazendo, o Thiago é o cara!",
    name: "Bruno Lopes",
    designation: "Senior Developer",
  },
  {
    testimonial: "Eu sempre busco profissionais que estão em constante evolução e o Thiago é um desses. Ele tem um domínio impressionante das tecnologias web e está sempre se atualizando. Além disso, ele manja muito de bancos de dados SQL e NoSQL e tem um jeito todo especial de trabalhar com metodologias ágeis. Sem sombra de dúvidas, eu indicaria o Thiago para qualquer projeto web.",
    name: "Gabriel Gomes",
    designation: "Tech Lead",
  },
  {
    testimonial: "Thiago é um verdadeiro profissional! Ele é um especialista em desenvolvimento web, muito ágil, atencioso e talentoso",
    name: "Lisa Perez",
    designation: "CTO",

  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
