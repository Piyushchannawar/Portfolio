// project images
import Project1 from '../assets/project-1.png';
import Project3 from '../assets/ReacentPost.png';
import Project2 from '../assets/coffee-inventary.png';

// skills images
import Html from '../assets/html5.svg';
import Css from '../assets/css.svg';
import Js from '../assets/javascript.svg';
import React from '../assets/react.svg';
import Node from '../assets/nodejs.svg';
import TypeScript from '../assets/typescript.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Postgres from '../assets/postgresql.svg';
import AWS from '../assets/aws.svg'
import MongoDB from '../assets/mongodb.svg';

export const projects = [
  {
    id: 2,
    title: 'Brewventory',
    description:
      'Brewventory is a full-stack web application that allows users to manage their coffee inventory. It provides features for adding, updating, and deleting beer entries, as well as searching and filtering the inventory.',

    image: Project2,
    stack: ['React', 'JavaScript', 'AWS', 'AWS Amplify', 'AWS DynamoDB'],
    liveUrl: 'https://www.google.com',
    sourceUrl: 'https://github.com/Piyushchannawar/Brewventory',
  },

  {
    id: 3,
    title: 'Blogify',
    description:
      'A modern blogging platform with user profiles, real-time keyword search, and elegant post management Crafted for writers, developers, and content creators to share ideas with style.',
    image: Project3,
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: 'https://www.google.com',
    sourceUrl: 'https://github.com/Piyushchannawar/BlogApp',
  },
   {
    id: 1,
    title: 'PostgreStore',
    description:
      'The Product Store is a full-stack e-commerce application built using the PostgreSQL, Express.js, React.js, and Node.js (PERN stack). It allows users to browse products, add them to a cart, and manage orders efficiently.',
    image: Project1,
    stack: ['PostgreSQL', 'React.js', 'Tailwind CSS', 'Express.js', 'Node.js'],
    liveUrl: 'https://www.google.com',
    sourceUrl: 'https://github.com/Piyushchannawar/PostgreStore',
  },
];

export const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: Html,
  },

  {
    id: 2,
    name: 'CSS',
    icon: Css,
  },

  {
    id: 3,
    name: 'JavaScript',
    icon: Js,
  },

  {
    id: 4,
    name: 'React',
    icon: React,
  },

  {
    id: 5,
    name: 'Node',
    icon: Node,
  },

  {
    id: 6,
    name: 'TypeScript',
    icon: TypeScript,
  },

  {
    id: 7,
    name: 'Tailwind',
    icon: Tailwind,
  },

  {
    id: 8,
    name: 'Postgres',
    icon: Postgres,
  },
  {
    id: 9,
    name: 'AWS',
    icon: AWS,
  },
  {
    id: 10,
    name: 'MongoDB',
    icon: MongoDB,
  },
];