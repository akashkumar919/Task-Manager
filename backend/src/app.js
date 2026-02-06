// import express from "express";
// import cors from "cors";
// import taskRoutes from "./routes/taskRoutes.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/tasks", taskRoutes);

// export default app;


import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

// Allowed origins
const allowedOrigins = [
  "https://taskmanagerrs.netlify.app", // Production frontend
  "http://localhost:5173",             // Local frontend
];

// CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

export default app;
