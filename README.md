# Blogifyer

Blogifyer is a full-featured blogging website designed to provide a seamless experience for users to create, manage, and interact with blog posts. Built using modern web technologies, Blogifyer includes robust features such as authentication, authorization, encryption, comments, file uploading, and more. The project is fully tested, optimized for performance, and ready to be deployed on AWS.

# Preview

https://bloging-website-rmwq.onrender.com/

![Screenshot 2024-09-10 165511](https://github.com/user-attachments/assets/7fa6e937-69bc-4b3f-abbd-d777e5444e92)
![Screenshot 2024-09-10 165527](https://github.com/user-attachments/assets/1c48637d-3b36-4ca5-bb1f-84d865e29239)
[Screenshot 2024-09-10 165709](https://github.com/user-attachments/assets/8d014d8d-6aa2-4d76-a196-5981dfd3eaa3)
![Screenshot 2024-09-10 165618](https://github.com/user-attachments/assets/9d89c7f6-601c-45af-afd9-08e630059411)
![Screenshot 2024-09-10 165648](https://github.com/user-attachments/assets/e11cdb91-8e7d-4a7e-a070-1091d6f6f2af)
![Screenshot 2024-09-10 165636](https://github.com/user-attachments/assets/91e1ba5c-a265-45f7-a791-6317ce43e316)

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
