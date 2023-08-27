# HomeroOchoa.com | Portfolio Website

<img width="600" alt="Screenshot 2023-08-22 at 9 09 29 PM" src="https://github.com/homeroochoa47/homeroochoa.com/assets/104741653/022d1703-cd6b-4421-9bde-ef39cbdf0026">

Welcome to my portfolio website! This project showcases my projects, experiences in web development, and a little about myself. It was built using Next.js and TypeScript.



## Live website

You can check out the live version of the website [here](https://www.homeroochoa.com).

## Features

The site is fairly simple, and includes the following
- Projects page with a list of my live client projects
  - The list and its images are populated via Sanity CMS
- Info page with some more about me
- An embedded spotify playlist

## Technologies Used

- [Next.js](https://nextjs.org/) - Featuring the pages directory, rendering everything statically.
- [TypeScript](https://www.typescriptlang.org/) - To allow for better type-safety
- [Tailwind CSS](https://tailwindcss.com/) - Used for styling
- [Framer Motion](https://www.framer.com/motion/) - For the page transition animations
- [Sanity](https://www.sanity.io/) - Providing project data and images via their CDN.


### Installation
You can install using NPM via
```bash
npm install
```
from both the frontend and sanity directories


### Usage
You'll need two terminals; one in each of the two directories. From there you can run
```bash
npm run dev
```
to start development servers in each.

### Deployment
Deployment can be done via Vercel by linking the repo to your project. From there selet 'frontend' as the main directory and you'll be good to go.
