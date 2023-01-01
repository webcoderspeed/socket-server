import express from 'express';

const app = express();

const PORT = process.env.PORT ?? 1338;

const main = async () => {
  try {
    const server = app.listen(PORT, () => {
      console.log(
        `Listening to server at port: ${PORT} -> http://localhost:${PORT}`
      );
    });




  } catch (error) {
    console.log(`Error while starting the main server`);
  }
};

main();
