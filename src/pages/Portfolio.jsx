import PortfolioCard from '../components/Project';

function Portfolio() {
    const projects = [
        {
            title: 'Employee Tracker with Javascript',
            text: 'Employee payroll tracker utilizng javascript.',
            imgSrc: 'holder.js/100px180',
            linkUrl: 'https://github.com/Sabrina-Sawyer/Employee-Payroll-Tracker-Javascript'
        },
        {
            title: 'Employee Tracker with PostgreSQL',
            text: 'The Employee Management System is an interactive command-line application built using TypeScript, Node.js, and PostgreSQL. It allows users to manage employee data, including departments, roles, and employees. With this application, users can view, add, and update data in a user-friendly manner.',
            imgSrc: 'holder.js/100px180',
            linkUrl: 'https://github.com/Sabrina-Sawyer/PostgreSQL-employeeTracker'
        },
        {
            title: 'Car Selector with Typescript',
            text: 'This project is a Command-Line Interface (CLI) application for managing a fleet of vehicles, including cars, trucks, and motorbikes. It is built using TypeScript and leverages the inquirer package to prompt users for input.',
            imgSrc: 'holder.js/100px180',
            linkUrl: 'https://github.com/Sabrina-Sawyer/typescript-car-selector'
        },
        {
            title: 'Readme Generator',
            text: 'This is a command line application that helps generate high-quality README.me files. It prompts the user to input the information and creates a detailed README with clickable sections.',
            imgSrc: 'holder.js/100px180',
            linkUrl: 'https://github.com/Sabrina-Sawyer/readme-generator'
        },
        {
            title: 'My Book List',
            text: 'Personal booktracker utilizing Javascript, HTML, CSS, and leveraging local storage.',
            imgSrc: 'holder.js/100px180',
            linkUrl: 'https://github.com/Sabrina-Sawyer/my-book-list'
        },
        {
            title: 'React Portfolio',
            text: 'Portfolio made with React.',
            imgSrc: 'holder.js/100px180',
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