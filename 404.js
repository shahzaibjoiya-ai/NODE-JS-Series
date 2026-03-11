// ES import and export methods
import express from "express";
import homePage from "./pages/home.js";
import aboutPage from "./pages/about.js";
import {contactPage} from "./pages/home.js";
import path from "path";
const app = express();
const pagesPath = path.resolve("pages");
app.use(express.static(pagesPath));
app.get('/', (req, res) => {
  res.send(homePage());
});
app.get('/about', (req, res) => {
  res.send(aboutPage());
});
app.get('/contact', (req, res) => {
  res.send(contactPage());
});
app.use((req, res) => {
  const absPath = path.resolve("pages/404.html");
  res.status(404).sendFile(absPath);
});
const port = 3200;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});