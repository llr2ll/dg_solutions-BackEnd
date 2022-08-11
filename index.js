const express = require('express')
const app = express();
const pool = require('./db.js')

    app.listen(3000,() => {console.log('Sever rodando: http://localhost:3000')});
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}));

    app.post('/', async(req,res) =>{
        const {nome, dataNascimento} = req.body
        try {
          const [result] = await pool.query('INSERT INTO usuario SET ?', { nome, dataNascimento });
          return res.status(200).json(result);
        } 
        catch (error) { return res.status(500).json({ message: error.message }) }
    })

  
    app.put('/usuarios/:id', async(req,res) =>{
        const nome = req.body.nome
        const  dataNascimento  = req.body.dataNascimento
        const id = req.params.id 

        try {
          const [result] = await pool.query('UPDATE usuario SET nome=?, dataNascimento=? WHERE id=?',[nome, dataNascimento,id ]);
          return res.status(200).json(result);
        } 
        catch (error) { return res.status(500).json({ message: error.message }) }
    })
    

    app.delete('/usuarios/:id', async(req, res) => {
        try {
          const [result] = await pool.query('Delete FROM usuario WHERE id=?',(req.params.id));
          return res.status(200).json(result);
        } 
        catch (error) { return res.status(500).json({ message: error.message }) }
    })
  

    app.get('/', async(req, res) => {
        try {
          const [result] = await pool.query('SELECT *,DATE_FORMAT(dataNascimento,"%Y-%m-%d") as dataNascimento FROM usuario');
          return res.status(200).json(result);
        } 
        catch (error) { return res.status(500).json({ message: error.message }) }
    });