import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Suyash Mishra",
    stack: ["Software Engineer","Machine Learning Engineer", "Full Stack Developer", "Freelancer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
	{
		title: 'Code N Grow',
		desc: 'A full-stack coding platform with login system, where users solve coding problems and run their code online.',
		image: 'https://suyashmishra.com/img/code-n-grow.png',
		live: true,
		technologies: [
			'NextJS',
			'TypeScript',
			'Tailwind CSS',
			'Firebase',
			'Vercel',
		],
		link: 'https://code-n-grow.vercel.app',
		github: '#',
	},
	{
		title: 'Personal Portfolio Website',
		desc: 'A frontEnd project with Dark mode made using Framer Motion for UI animations, deployed on vercel. ',
		image: 'https://suyashmishra.com/img/portfolio.png',
		live: true,
		technologies: [
			'NextJS',
			'TypeScript',
			'Tailwind CSS',
			'Framer Motion',
			'Vercel',
		],
		link: 'https://mishrasuyash.vercel.app/',
		github: 'https://github.com/mishra-suyash/portfolio-nextjs',
	},
	{
		title: 'ENGIFY ECom Website',
		desc: 'A Official StoreFront with Catalog and Live Payments using Wordpress and Custom made plugin for Payment Gateways integrated with Woo Commerce that can send confirmation mail to Users.',
		image: 'https://suyashmishra.com/img/engify.png',
		live: true,
		technologies: ['Wordpress', 'PHP', 'Woo Commerce', 'Payment APIs'],
		link: 'https://engify.in',
		github: '#',
	},
];


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Redux", "Tailwind CSS",  "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]
const socialLinks = [
	{ link: 'https://github.com/mishra-suyash', icon: IconBrandGithub },
	{
		link: 'https://www.linkedin.com/in/onlysuyash/',
		icon: IconBrandLinkedin,
	},
	{ link: 'https://leetcode.com/u/mishrasuyash/', icon: IconBrandLeetcode },
];


const ExperienceInfo = [
	{
		role: 'Campus Ambassador',
		company: 'GEEKSFORGEEKS',
		date: 'Aug 2023 - May 2024',
		desc: 'Organised seminars on Road-maps,Sessions covering Web Development and Hackathons',
		skills: ['React JS', 'Angular', 'Node JS', 'MySQL', 'MongoDB'],
	},
	{
		role: 'Wordpress/PHP Developer',
		company: 'ENGIFY',
		date: 'Nov 2022 - Sep 2023',
		desc: ' Developed E-Commerce store using WooCommerce and Integrated Payment Gateways-Razorpay, PayU using custom made plugin written in PHP',
		skills: [
			'Wordpress',
			'PHP',
			'Woo-Commerce',
			'MySQL',
		],
	},
];
const Slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "flutter",
    "html5",
    "css3",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };