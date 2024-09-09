import PortfolioCard from '../components/Project';
import dolphin from '../assets/dolphin.jpeg';
import jellyfish from '../assets/jellyfish.jpeg';
import octopus from '../assets/octopus.jpeg';
import seal from '../assets/seal.jpeg';
import turtle from '../assets/turtle.jpeg';
import whale from '../assets/whale.jpeg';

function Portfolio() {
    const projects = [
        {
            title: 'Employee Tracker with Javascript',
            text: 'Employee payroll tracker utilizng javascript.',
            imgSrc: dolphin,
            linkUrl: 'https://github.com/Sabrina-Sawyer/Employee-Payroll-Tracker-Javascript'
        },
        {
            title: 'Employee Tracker with PostgreSQL',
            text: 'The Employee Management System is an interactive command-line application built using TypeScript, Node.js, and PostgreSQL. It allows users to manage employee data, including departments, roles, and employees. With this application, users can view, add, and update data in a user-friendly manner.',
            imgSrc: jellyfish,
            linkUrl: 'https://github.com/Sabrina-Sawyer/PostgreSQL-employeeTracker'
        },
        {
            title: 'Car Selector with Typescript',
            text: 'This project is a Command-Line Interface (CLI) application for managing a fleet of vehicles, including cars, trucks, and motorbikes. It is built using TypeScript and leverages the inquirer package to prompt users for input.',
            imgSrc: octopus,
            linkUrl: 'https://github.com/Sabrina-Sawyer/typescript-car-selector'
        },
        {
            title: 'Readme Generator',
            text: 'This is a command line application that helps generate high-quality README.me files. It prompts the user to input the information and creates a detailed README with clickable sections.',
            imgSrc: seal,
            linkUrl: 'https://github.com/Sabrina-Sawyer/readme-generator'
        },
        {
            title: 'My Book List',
            text: 'Personal booktracker utilizing Javascript, HTML, CSS, and leveraging local storage.',
            imgSrc: turtle,
            linkUrl: 'https://github.com/Sabrina-Sawyer/my-book-list'
        },
        {
            title: 'React Portfolio',
            text: 'Portfolio made with React.',
            imgSrc: whale,
            linkUrl: 'https://github.com/Sabrina-Sawyer/react-portfolio'
        },
    ];

    return (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {projects.map((project, index) => (
                <PortfolioCard
                    key={index}
                    title={project.title}
                    text={project.text}
                    imgSrc={project.imgSrc}
                    linkUrl={project.linkUrl}
                />
            ))}
        </div>
    );
}

export default Portfolio;