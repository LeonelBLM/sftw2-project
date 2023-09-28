import { Router } from 'express'
import pool from '../database.js'
const router = Router();
router.get('/add', (req, res)=>{
    res.render('empleados/add');

});
router.post('/add', async(req, res)=>{
    try{
        const {nombre, apellido, edad, correo_electronico} = req.body;
        const newEmpleado = {
            nombre, apellido, edad, correo_electronico
        }
        await pool.query('INSERT INTO empleados SET ?', [newEmpleado]);
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/list', async(req, res)=>{
    try{
        const[result] =await pool.query('SELECT * FROM empleados');
        res.render('empleados/list', {empleados: result});

    }
    catch(err){
        res.status(500).json({message:err.message});

    }
});
router.get('/edit/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const [empleados] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);
        const empleadosEdit = empleados[0];
        res.render('empleados/edit', {empleados: empleadosEdit});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.post('/edit/:id', async(req, res)=>{
    try{
        const {nombre, apellido, edad, correo_electronico} = req.body;
        const {id} = req.params;
        const editEmpleados = {nombre, apellido, edad, correo_electronico};
        await pool.query('UPDATE empleados SET ? WHERE id = ?', [editEmpleados, id]);
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get('/delete/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        await pool.query('DELETE FROM empleados WHERE id = ?', [id]);
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});
export default router;