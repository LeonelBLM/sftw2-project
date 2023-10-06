import { Router } from 'express'
import pool from '../database.js'
const router = Router();
router.get('/add2', (req, res)=>{
    res.render('camiones/add2');

});
router.get('/', (req, res) => {
    const showNavbar = false; 
    res.render('auth/login', { showNavbar }); 
});

router.post('/add2', async(req, res)=>{
    try{
        const {marca, modelo, placa, ano} = req.body;
        const newCamiones = {
            marca, modelo, placa, ano
        }
        await pool.query('INSERT INTO camiones SET ?', [newCamiones]);
        res.redirect('/list2');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/list2', async(req, res)=>{
    try{
        const[result] =await pool.query('SELECT * FROM camiones');
        res.render('camiones/list2', {camiones: result});

    }
    catch(err){
        res.status(500).json({message:err.message});

    }
});
router.get('/edit2/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const [camiones] = await pool.query('SELECT * FROM camiones WHERE id = ?', [id]);
        const camionesEdit = camiones[0];
        res.render('camiones/edit2', {camiones: camionesEdit});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.post('/edit2/:id', async(req, res)=>{
    try{
        const {marca, modelo, placa, ano} = req.body;
        const {id} = req.params;
        const editCamiones = {marca, modelo, placa, ano};
        await pool.query('UPDATE camiones SET ? WHERE id = ?', [editCamiones, id]);
        res.redirect('/list2');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get('/delete2/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        await pool.query('DELETE FROM camiones WHERE id = ?', [id]);
        res.redirect('/list2');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
export default router;