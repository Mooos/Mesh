const app = require('./server');
const config = require("./config/config");

const HOST = '0.0.0.0'; // Listen on all available network interfaces
const PORT = process.env.PORT || 3000; 

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
