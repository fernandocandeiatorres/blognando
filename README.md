# blognando
---

# Simple Blog App

A minimalist blog application. It features a main page to display all blog posts and a post creation page where users can write posts using Markdown, add titles, and upload images.

## Features
- **Main Page:** View all blog posts with titles, Markdown-rendered content, and images.
- **Post Creation Page:** Create new posts with a title, Markdown content, and image uploads.

## Tech Stack
- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React, React Router, React-Markdown
- **Image Storage:** Cloudinary

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance like MongoDB Atlas)
- [Cloudinary](https://cloudinary.com/) account for image uploads

## Setup Instructions

### Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder with the following:
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-connection-string>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` folder with:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the frontend development server:
   ```bash
   npm start
   ```

## Deployment
- **Backend:** Deployed on [Heroku](https://heroku.com/).
- **Frontend:** Deployed on [Netlify](https://www.netlify.com/).

### Deployment Steps
1. **Backend (Heroku):**
   - Install Heroku CLI and run `heroku create`.
   - Set environment variables in Heroku dashboard.
   - Push code with `git push heroku main`.

2. **Frontend (Netlify):**
   - Connect GitHub repo to Netlify.
   - Set build command to `npm run build` and publish directory to `build`.
   - Deploy and update `REACT_APP_API_URL` to the Heroku backend URL.

## Project Structure
```
simple-blog-app/
├── backend/            # Node.js + Express server
│   ├── models/         # MongoDB schemas (e.g., Post model)
│   ├── routes/         # API routes
│   └── server.js       # Main server file
├── frontend/           # React app
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Main and Post Creation pages
│   │   └── App.js      # Main app component
└── README.md           # Project documentation
```

## TODO: Step-by-Step Tasks
Here’s a checklist to guide your development process. Check off tasks as you complete them!

### Backend Tasks
- [ ] Set up project folder structure (`backend` directory).
- [ ] Initialize Node.js project (`npm init -y`).
- [ ] Install dependencies (`express`, `mongoose`, `cloudinary`, `dotenv`).
- [ ] Create MongoDB connection in `server.js`.
- [ ] Define Post model (`title`, `content`, `imageUrl`) in `models/Post.js`.
- [ ] Create `GET /posts` route to fetch all posts.
- [ ] Create `POST /posts` route to save a new post.
- [ ] Integrate Cloudinary for image uploads in the POST route.
- [ ] Test backend locally with Postman or browser.

### Frontend Tasks
- [ ] Create React app (`npx create-react-app frontend`).
- [ ] Install dependencies (`react-router-dom`, `react-markdown`, `axios`).
- [ ] Set up React Router with two pages:
  - [ ] Main Page (`/`) to display posts.
  - [ ] Post Creation Page (`/create`) for new posts.
- [ ] Build Main Page:
  - [ ] Fetch posts from backend using `axios`.
  - [ ] Render posts with `React-Markdown` and display images.
- [ ] Build Post Creation Page:
  - [ ] Create form with title, content (textarea), and image upload input.
  - [ ] Handle form submission with `axios` to send data to backend.
- [ ] Test frontend locally with backend running.

### Testing & Refinement
- [ ] Test creating a post and verify it appears on the main page.
- [ ] Fix any bugs (e.g., image not displaying, Markdown not rendering).

### Deployment Tasks
- [ ] Backend:
  - [ ] Create a Heroku app and push backend code.
  - [ ] Set environment variables in Heroku.
- [ ] Frontend:
  - [ ] Push frontend code to GitHub.
  - [ ] Connect to Netlify and deploy.
  - [ ] Update `REACT_APP_API_URL` to Heroku URL.
- [ ] Test live app on deployed URLs.

## Future Improvements
- Add user authentication.
- Implement comments on posts.
- Add pagination for large numbers of posts.

## License
This project is licensed under the MIT License.

---

### Notes for You
- **Keeping Track:** Use GitHub Issues or simply edit the `README.md` file to check off tasks in the TODO section as you go.
- **Portfolio Ready:** Once deployed, add the live URLs (Heroku and Netlify) to the README and mention them in your portfolio or interviews.
- **Version Control:** Commit your changes frequently with clear messages (e.g., `git commit -m "Added Post model"`).

This README gives you a solid starting point and a roadmap to follow. Let me know if you need help with any specific step or code snippets as you build!
