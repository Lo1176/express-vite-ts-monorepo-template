import ExpressConfig from '../Express/express.config.js';

const app = ExpressConfig();
const PORT = process.env.PORT || 5000;

// make your own API
app.get('/api/test', (_req, res) => {
  res.send({ body: 'testing the GET request to API/test 🐝' });
});

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
