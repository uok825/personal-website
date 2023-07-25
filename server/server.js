//API server using expressjs import everything we need
const express = require('express');
const path = require('path');
const cors = require('cors');

//create express app
const app = express();
const port = 8000;
const dataPath = path.join(__dirname, '../data/data.json');

app.use(cors());

app.get('/apiv1/experiences', (req, res) => {
    res.sendFile(dataPath);
}
);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);