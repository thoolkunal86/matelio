const express = require('express');
const cors = require('cors');
const router = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const dbAuth = require('./db/dbauth');
const addressRoutes = require('./routes/addressRoute');

const app = express();

// Defining the CORS options
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000'] // Whitelist the domains you want to allow
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", [profileRoutes, router, addressRoutes]);

//Do db auth
dbAuth()
.then((data) => {
    //Create server
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`App listening on port ${process.env.SERVER_PORT}`)
    })
})
.catch((error) => {
    console.error('Unable to connect to the database check env file for settings.');
});
