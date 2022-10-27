const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send({
    "slackUsername": "akpogumaminejoanna", 
    "backend": true, 
    "age": "20", 
    "bio": "I am a Believer, i love reading novels and i am an Accounting student. I sincerely hope to go true with the internship. P.S I'm really nervous"
});
  });

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});