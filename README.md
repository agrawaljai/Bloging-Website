# Blogifyer

Blogifyer is a full-featured blogging website designed to provide a seamless experience for users to create, manage, and interact with blog posts. Built using modern web technologies, Blogifyer includes robust features such as authentication, authorization, encryption, comments, file uploading, and more. The project is fully tested, optimized for performance, and ready to be deployed on AWS.

![Screenshot 2024-07-04 152626](https://github.com/agrawaljai/Bloging-Website/assets/153916803/e993cb60-a529-47c0-8c89-190f5164d796)
![Screenshot 2024-07-04 142925](https://github.com/agrawaljai/Bloging-Website/assets/153916803/5fed7479-f0ef-47e6-b475-dec354adacfe)
![Screenshot 2024-07-04 152649](https://github.com/agrawaljai/Bloging-Website/assets/153916803/3bc11eb1-7593-49fc-8c95-14c75f156c6f)
![Screenshot 2024-07-04 152705](https://github.com/agrawaljai/Bloging-Website/assets/153916803/d35e661f-ff06-4506-a1f1-24375191ba73)
![Screenshot 2024-07-04 152729](https://github.com/agrawaljai/Bloging-Website/assets/153916803/43de34c9-7e1f-48fb-93d2-21c5716a6a13)

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- **User Authentication and Authorization**: Secure sign-up and log-in process with role-based access control.
- **Encryption**: Passwords are encrypted using industry-standard hashing algorithms.
- **Comments**: Users can comment on blog posts.
- **File Uploading**: Users can upload profile pictures and cover images for their blog posts using Multer.
- **Cookies and Tokens**: Secure session management using cookies and JSON Web Tokens (JWT).
- **Responsive Design**: Fully responsive layout using Bootstrap.
- **Optimized Performance**: Improved for better performance and scalability.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **EJS**: Embedded JavaScript templating.
- **JavaScript, HTML, CSS**: Core web technologies.
- **Bootstrap**: Front-end component library for responsive design.
- **MongoDB**: NoSQL database.
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.
- **Cookies and JWT**: For secure session management.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/blogifyer.git
   cd blogifyer
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Server**
   ```bash
   npm start
   ```

## Configuration

- **Database Configuration**: Ensure MongoDB is running and accessible using the URI provided in the `.env` file.
- **Environment Variables**: Configure the required environment variables in the `.env` file.

## Usage

- **Home Page**: View a list of all blog posts.
- **User Registration and Login**: Sign up and log in to create and manage posts.
- **Create/Edit/Delete Posts**: Authenticated users can create, edit, and delete their blog posts.
- **Comments**: Users can comment on posts.
- **Profile Management**: Upload and manage profile pictures and cover images.

## Deployment

Blogifyer is ready to be deployed on AWS. Follow these steps for deployment:

1. **Create an EC2 Instance**: Set up an EC2 instance with Node.js and MongoDB.
2. **Transfer Files**: Upload your project files to the EC2 instance.
3. **Install Dependencies**: SSH into the EC2 instance and run `npm install`.
4. **Set Up Environment Variables**: Configure the environment variables on the EC2 instance.
5. **Start the Server**: Run `npm start` to start the server.
6. **Configure Security**: Set up security groups, load balancers, and SSL certificates as needed.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**
2. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m "Add your message"
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy blogging with Blogifyer! If you have any questions or need further assistance, feel free to open an issue or contact the maintainer.
