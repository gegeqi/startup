import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));

app.use('*', (req,res)=>{
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(3000, function() {
  console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;