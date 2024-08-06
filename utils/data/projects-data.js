import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Drum Kit Game ',
        description: "I have developed a drum kit game using HTML, CSS, and JavaScript. The game is designed to play drum sounds when the user clicks on the drum images or presses the corresponding keys on the keyboard. I have used event listeners to detect the user's actions and play the corresponding sounds. The game is fully responsive and works on all devices. I have deployed the game to Github Pages.",
        tools: ['HTML', 'CSS', 'JavaScript', 'Github Pages'],
        role: 'full-stack developer',
        code: '',
        demo: 'https://jainutkarshh.github.io/html-drumm/',
        image: crefin,
    },
    {
        id: 2,
        name: 'My Portfolio Website',
        description: 'I have developed my portfolio website using NextJS, Tailwind CSS, and other necessary npm libraries. The website is fully responsive and works on all devices. I have used the NextJS framework to build the website and Tailwind CSS for styling. I have deployed the website. The website contains information about me, my skills, projects, and contact information.',
        tools: ['NextJS', 'Tailwind CSS', 'React', 'JavaScript', 'HTML', 'CSS', 'Github Pages'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Apple Website Clone',
        description: 'I have developed a clone of the Apple website using React, Bootstrap, CSS, and other necessary npm libraries. The website is fully responsive and works on all devices. I have used Bootstrap to build the website. I have deployed the website to Github Pages. The website contains information about Apple products, services, and contact information.',
        tools: ['React', 'Bootstrap', 'CSS', 'JavaScript', 'HTML', 'Github Pages'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Clone of Google Keep',
        description: "I have developed a clone of Google Keep using React, Material UI, and other necessary npm libraries. The website is fully responsive and works on all devices. I have used Material UI to build the website. I have deployed the website to Github Pages. The website contains features like adding notes, deleting notes, and editing notes.",
        tools: ['React', 'Material UI','Node Js', 'CSS', 'JavaScript', 'HTML', 'Github Pages'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },