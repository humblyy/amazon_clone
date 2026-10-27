Amazon Clone

An Amazon-inspired e-commerce website built with React, Node.js, Express, Firebase, and Stripe.

Live Demo
Frontend: https://humblyy.github.io/amazon_clone/
Backend: https://amazon-backend-09d0.onrender.com
Features
Browse products and view product details
Filter products by category
Shopping cart
User authentication
Orders and checkout pages
Stripe payment integration
Docker support
Tech Stack
Frontend: React, JavaScript, React Router, Firebase
Backend: Node.js, Express
Payments: Stripe
Deployment: GitHub Pages, Render
DevOps: Docker, Docker Compose, Nginx
Run Locally

Requirements: Node.js, Git, and Docker Desktop.

Clone the repository:

bash
git clone https://github.com/humblyy/amazon_clone.git
cd amazon_clone


Create a .env file in the project root:

env
STRIPE_SECRET_KEY=your_stripe_test_secret_key
REACT_APP_API_KEY=your_frontend_api_key


Add your actual environment variable values. Never commit secret keys to GitHub.

Build and start the application:

bash
docker compose up --build -d


Open the application:

Frontend: http://localhost:3001
Backend: http://localhost:3000

To stop the containers:

bash
docker compose down

Docker

The frontend is built with React and served by Nginx. The backend runs on Node.js and Express. Docker Compose starts both services together.

Useful commands:

bash
docker compose ps
docker compose logs -f
docker compose down

Deployment
Frontend: GitHub Pages
Backend: Render
Author

GitHub – humblyy

This is a personal learning project inspired by Amazon and is not affiliated with Amazon.