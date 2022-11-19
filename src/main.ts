import express from "express";
import { faker } from '@faker-js/faker';

const port = process.env.PORT || 3000

const app = express();
 
app.get("/", function (req, res) {
  res.send(faker.random.words());
});

app.get("/get-movie-list", function (req, res) {
    let movies = [];
    
    for (let index = 0; index < parseInt(faker.random.numeric(2)); index++) {
        movies.push({name: faker.random.word(), image: faker.image.avatar(), release: faker.date.past()});
    }

    res.send(movies);
  });
 

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })