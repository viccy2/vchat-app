const express = require('express');
const router = express.Router();



router.get('/about', (req, res) =>{
	res.send({type : 'GET' });
});

router.post('/abouts', (req, res) =>{
	res.send({type : 'POST' });
});

router.put('/about/:id', (req, res) =>{
	res.send({type : 'PUT' });
});

router.delete('/about/:id', (req, res) =>{
	res.send({type : 'DELETE' });
});



module.exports = router ;