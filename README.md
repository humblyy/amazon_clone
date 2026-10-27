🛒 Amazon Clone

A full-stack, Amazon-inspired e-commerce application built with React, JavaScript, Node.js, Express, Firebase, and Stripe. The application features product browsing, shopping cart functionality, user authentication, order-related pages, and payment integration.

🌐 Live Demo
Frontend: Amazon Clone
Backend API: Amazon Backend
✨ Features
Browse products and view product details.
Explore products by category.
Add products to the shopping cart.
User authentication and protected routes.
Orders page for authenticated users.
Payment integration with Stripe.
Client-side routing with React Router.
Firebase integration.
Responsive user interface.
Dockerized frontend and backend.
Docker Compose for local development.
🛠️ Technologies Used
Frontend
React.js (Create React App)
JavaScript (ES6+)
React Router
Stripe.js and React Stripe.js
Firebase
HTML5 and CSS3
Backend
Node.js
Express.js
Stripe API
CORS
dotenv
DevOps and Deployment
Docker
Docker Compose
Nginx
Git and GitHub
GitHub Pages
Render
🏗️ Application Architecture

The application consists of a frontend and a backend.

Frontend: A React application that provides the user interface, product browsing, navigation, cart functionality, authentication flows, and payment interface. It is deployed on GitHub Pages and can also be served locally through an Nginx Docker container.

Backend: A Node.js and Express API that handles backend requests and creates Stripe PaymentIntents. It is deployed on Render and can also run locally in Docker.

Firebase: Used for the Firebase-related functionality implemented in the application.

Docker: Separate Dockerfiles package the frontend and backend. Docker Compose runs both services together for local development.

🚀 Run the Project Locally
Prerequisites

Install the following:

Git
Node.js and npm
Docker Desktop
1. Clone the repository
bash
git clone https://github.com/humblyy/amazon_clone.git
cd amazon_clone

2. Install dependencies (optional for Docker)

To install dependencies for local development without Docker:

bash
cd amazon_frontend
npm install

cd ../amazon_backend
npm install

cd ..


If you plan to run everything using Docker Compose, you can skip this step.

3. Configure environment variables

Create a .env file in the project root, alongside docker-compose.yml.

env
STRIPE_SECRET_KEY=your_stripe_test_secret_key
REACT_APP_API_KEY=your_public_frontend_key


Replace the placeholders with the values required by your application.

Important: Keep secret credentials private. Never commit your .env file or expose your Stripe secret key in frontend code.

4. Build and start the containers

From the project root, run:

bash
docker compose up --build -d


Docker Compose builds the frontend and backend images and starts both services.

5. Access the application
Frontend: http://localhost:3001
Backend: http://localhost:3000

The backend root endpoint should return:

json
{
  "message": "success"
}

6. View container logs
bash
docker compose logs --tail=100


To view logs for a specific service:

bash
docker compose logs client
docker compose logs backend

7. Stop the containers
bash
docker compose down

🔌 API Endpoints
Method	Endpoint	Description
GET	/	Checks whether the backend is running.
POST	/payment/create?total_price=1000	Creates a Stripe PaymentIntent and returns its client secret.

The payment endpoint expects the amount in the smallest currency unit accepted by Stripe. For USD, this means cents; 1000 represents $10.00.

🐳 Docker Configuration

The project uses Docker to package the frontend and backend into separate containers.

Frontend Dockerfile: Builds the React application and serves the production files using Nginx.
Backend Dockerfile: Installs production dependencies and runs the Express application using Node.js.
Docker Compose: Defines and starts both services together.

Useful commands:

bash
# Build and start services
docker compose up --build -d

# Check running containers
docker compose ps

# Follow logs
docker compose logs -f

# Stop services
docker compose down

☁️ Deployment
Component	Platform
Frontend	GitHub Pages
Backend	Render
Local container orchestration	Docker Compose

The frontend uses the /amazon_clone base path on GitHub Pages. For local Docker hosting at http://localhost:3001, it is served from the root path.

The frontend must use the appropriate backend URL for each environment.

🔐 Security Considerations
Store Stripe secret keys in environment variables.
Never expose private API credentials in frontend JavaScript.
Use Stripe test mode during development.
Validate payment amounts on the backend and calculate totals from trusted product prices.
Use HTTPS for deployed services.
Keep .env files and other secrets out of version control.
🔮 Future Improvements
Introduce automated tests.
Implement CI/CD with GitHub Actions.
Improve product search and filtering.
Add persistent cart and order storage where needed.
Strengthen request validation and error handling.
Add production monitoring and logging.
👨‍💻 Author

GitHub: humblyy

📄 Disclaimer

This is an educational project inspired by Amazon. It is not affiliated with, endorsed by, or officially associated with Amazon.