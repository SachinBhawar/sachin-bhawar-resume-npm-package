#!/usr/bin/env node

import chalk from "chalk";

// formatted resume
const displayResume = () => {
    console.log("\n");
    console.log(chalk.bold.cyan("========================================"));
    console.log(chalk.bold.cyan("           SACHIN BHAWAR"));
    console.log(chalk.bold.cyan("========================================"));
    console.log(chalk.yellow("+91-9604328867 ♦ Nashik, Maharashtra, India"));
    console.log(chalk.blue("sachinbhawar@gmail.com ♦ LinkedIn ♦ GitHub ♦ Portfolio"));
    console.log("\n");

    // Objective
    console.log(chalk.bold.green("OBJECTIVE"));
    console.log(
        chalk.white(
            "Aspiring Frontend Developer with 500+ hours of hands-on experience in React.js, Node.js, JavaScript, and modern web development. Built 5+ production-ready applications using React.js,Redux, Node.js, MongoDB and Firebase. Transitioned from Mechanical Design and Pharmaceutical sales to tech through dedicated MERN stack training."
        )
    );
    console.log("\n");

    // Education
    console.log(chalk.bold.green("EDUCATION"));
    console.log(chalk.bold.white("PGDITT, IT Bombay, Mumbai"));
    console.log(chalk.white("Mechanical Design Engineering"));
    console.log(chalk.gray("2013"));
    console.log("\n");

    // Training
    console.log(chalk.bold.green("TRAINING"));
    console.log(chalk.bold.white("MERN Full Stack Web Development, Coding Ninjas"));
    console.log(chalk.gray("2024"));
    console.log("\n");

    // Skills
    console.log(chalk.bold.green("SKILLS"));
    console.log(
        chalk.bold.white("Frontend: ") +
            chalk.white("React.js, Redux-toolkit, Tailwind CSS, Bootstrap, Zustand")
    );
    console.log(
        chalk.bold.white("Backend: ") +
            chalk.white("Node.js, Express.js, Socket.io, JWT Authentication, REST APIs")
    );
    console.log(chalk.bold.white("Databases: ") + chalk.white("MongoDB, Firebase"));
    console.log(chalk.bold.white("Tools: ") + chalk.white("VS Code, Git/Github, Postman"));
    console.log("\n");

    // Projects
    console.log(chalk.bold.green("PROJECTS"));

    console.log(chalk.bold.cyan("AI Chatbot React App"));
    console.log(chalk.blue("GitHub Repo Live Demo"));
    console.log(chalk.gray("Feb 2025"));
    console.log(chalk.white("Technologies: React.js, Google Generative AI, Tailwind CSS"));
    console.log(chalk.white("● Integrated Google's NLP API to deliver context-aware responses"));
    console.log(chalk.white("● Designed a user-friendly interface with prompt-response workflow"));
    console.log("\n");

    console.log(chalk.bold.cyan("Busy Buy E-commerce React App"));
    console.log(chalk.blue("GitHub Repo Live Demo"));
    console.log(chalk.gray("Sept 2024"));
    console.log(chalk.white("Technologies: React.js, Firebase, Redux Toolkit, HTML, CSS, Bootstrap"));
    console.log(
        chalk.white("● Developed cart management system supporting over 100 products with real-time updates")
    );
    console.log(
        chalk.white(
            "● Reduced authentication setup 60% using Firebase Auth and added search filters for instant product access."
        )
    );
    console.log("\n");

    console.log(chalk.bold.cyan("Chatter-up Live Chat App"));
    console.log(chalk.blue("GitHub Repo Live Demo"));
    console.log(chalk.gray("July 2024"));
    console.log(chalk.white("Technologies: Socket.IO, Node.js, Express.js, MongoDB, HTML, CSS"));
    console.log(
        chalk.white("● Created real-time messaging system with less than 500ms latency using Socket.IO")
    );
    console.log(
        chalk.white(
            "● Implemented a message history retrieval system that loads 500+ records in 2 seconds using timestamps."
        )
    );
    console.log("\n");

    // Experience
    console.log(chalk.bold.green("EXPERIENCE"));

    console.log(chalk.bold.white("Territory Executive"));
    console.log(chalk.gray("June 2022 - May 2023"));
    console.log(
        chalk.white("Team Lease Services Pvt Ltd (Services dedicated to Johnson and Johnson Surgical Vision)")
    );
    console.log(chalk.gray("Nashik, Maharashtra"));
    console.log(
        chalk.white(
            "● Consistently exceeded monthly sales targets by 100% + over 6 months, delivering 50+ customized OIL solutions that improved cataract patient outcomes and boosted client satisfaction."
        )
    );
    console.log("\n");

    console.log(chalk.bold.white("Area Business Manager"));
    console.log(chalk.gray("November 2021 - May 2022"));
    console.log(chalk.white("Amanta Healthcare Pvt Ltd"));
    console.log(chalk.gray("Nashik, Maharashtra"));
    console.log("\n");

    console.log(chalk.bold.white("Mechanical Design Engineer"));
    console.log(chalk.gray("May 2018 - Oct 2020"));
    console.log(chalk.white("Astrotec"));
    console.log(chalk.gray("Nashik, Maharashtra"));
    console.log(
        chalk.white(
            "● Authored 50+ detailed mechanical design specs using CATIA V5 Software enabling timely product development."
        )
    );
    console.log("\n");

    console.log(chalk.bold.cyan("========================================"));
    console.log("\n");
};

displayResume();
