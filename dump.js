import express from "express";
// const express = require('express')
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const hostname = '127.0.0.1';
const app = express();
import cors from "cors";
app.use(cors());
app.get('/', (req, res) => {
    res.json({
        success: true,
        name: "Ehtesham"
    });
});
app.listen(port, () => {
    console.log(`This server is running on port http://${hostname}:${port}`);
});
// Starting a MERN stack web app with 64 pages is indeed a substantial project, and proper setup and organization are crucial for its success, scalability, and maintainability. Here are some recommendations to help you start this project efficiently:

// 1. Project Structure:
// Organize by Feature: Group related components, pages, and assets together under feature folders. For example, have separate folders for authentication, dashboard, user management, etc.
// Route-Based Structure: Use a routing library like React Router to handle navigation between different pages. Each route should correspond to a specific feature or page.

// 2. State Management:
// Choose a state management solution like Redux or React Context API, depending on the complexity of your application's state and data flow.
// Maintain a centralized store to manage shared data across components and pages.

// 3. Component Reusability:
// Identify common UI elements and create reusable components to reduce redundancy and simplify maintenance.
// Consider using component libraries like Material-UI or Ant Design for pre-built UI components.

// 4. Backend Setup (MongoDB, Express, Node.js):
// Set up your MongoDB database schema to efficiently store and retrieve data.
// Implement Express routes to handle HTTP requests from the frontend React application.
// Ensure proper error handling and validation in your backend routes.

// 5. Frontend Setup (React, Vite):
// Configure Vite to bundle and optimize your React application efficiently.
// Set up React Router for client-side routing to navigate between different pages.
// Use modern React features like Hooks for state management and functional components.

// 6. Authentication and Authorization:
// Implement user authentication using JWT (JSON Web Tokens) or session-based authentication.
// Secure routes and endpoints based on user roles and permissions.

// 7. Testing:
// Write unit tests for critical components and functionalities using testing libraries like Jest and React Testing Library.
// Perform end-to-end testing to ensure the application works as expected across different scenarios.

// 8. Deployment:
// Choose a reliable hosting provider for deploying your MERN stack application, such as Heroku, AWS, or DigitalOcean.
// Set up a CI/CD pipeline to automate the deployment process and ensure continuous integration.

// 9. Performance Optimization:
// Optimize your frontend and backend code for performance by minimizing bundle size, using lazy loading, and implementing caching strategies.
// Monitor and analyze performance metrics using tools like Lighthouse and Google PageSpeed Insights.

// 10. Scalability and Maintenance:
// Plan for future scalability by designing your application architecture to accommodate future growth and feature enhancements.

// Document your codebase, including API endpoints, component structure, and project dependencies, to facilitate maintenance and onboarding of new developers.
// By following these best practices and guidelines, you can effectively start and manage your MERN stack web app with 64 pages. Remember to prioritize maintainability, scalability, and performance throughout the development process.



// Date Picker
{/* <Datepicker options={{...dateOptions,title:'To',inputIdProp:'end_date'}} onChange={handleChangeTwo}  show={showTwo} setShow={handleCloseTwo} classNames="w-[35%] " />
             */}
readFile('./memberList.json', 'utf-8', async (err, data) => {
    if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Failed to read member list file' });
    }
    try {
        let arr = [];
        const memberList = JSON.parse(data);
        const adminId = '663cc99733356e422ca18d05';
        memberList.forEach((member) => {
            member.managerId = adminId;
            arr.push(member);
        });
        const allMembers = await memberModel.find();

        arr.forEach(async (users, i) => {
            try {
                // await new memberModel(users).save().then((res) => console.log('ressss', res));
            } catch (err) {
                console.log(err);

            }

        });
        // await memberModel.deleteMany({ Wing: '' });
        res.json({
            success: true, nhBits: allMembers.length,
            allMembers

        });
    } catch (err) {
        console.log(err);
        return res.json({ error: err });
    }
});

readFile('./memberList.json', 'utf-8', async (err, data) => {
    if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Failed to read member list file' });
    }
    try {
        let arr = [];
        const memberList = JSON.parse(data);
        const adminId = '663cc99733356e422ca18d05';
        memberList.forEach((member) => {
            member.managerId = adminId;
            arr.push(member);
        });

        arr.forEach(async (users, i) => {
            try {
                if (users.BillCode === 'Shop-1A') {
                    console.log(users);
                    // await new memberModel(users).save().then((res) => console.log(res));
                } else {

                }
                // await new memberModel(users).save().then((res) => console.log('ressss', res));
                // console.log(allMembers[i].BillCode, '', users.BillCode);
            } catch (err) {
                console.log(err);

            }

        });
        // await memberModel.deleteMany({ Wing: '' });
        const allMembers = await memberModel.find();

        res.json({
            success: true, nhBits: allMembers.length,
            allMembers

        });
    } catch (err) {
        console.log(err);
        return res.json({ error: err });
    }
});