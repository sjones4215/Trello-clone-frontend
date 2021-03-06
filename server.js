const express = require('express');

const app = express();

app.use(express.static('./dist/Trello-clone-frontend'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: './dist/Trello-clone-frontend'}
  );
});
app.listen(process.env.PORT || 8080);
