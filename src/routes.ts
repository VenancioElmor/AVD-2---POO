import { Router } from 'express'
import {FuncionariosController} from './controllers/FuncionariosController'
import {EntregasController} from './controllers/EntregasController'

const routes = Router();

const funcionariosController = new FuncionariosController
const entregasController = new EntregasController

// Rotas de Funcionários
// Criar Funcionários
routes.post('/funcionarios', funcionariosController.create)
// Listar Todos os Funcionários 
routes.get('/funcionarios', funcionariosController.index)


// Rotas de Entrega. 
// Rota para incluir Entregas. 
routes.post('/entregaepi', entregasController.create)
// Rota para Listar as entregas 
routes.get('/entregaepi', entregasController.index)
// Rota para Listar as entregas pelo ID 
routes.get('/entregaepi/:id', entregasController.show)
// Rota para deletar as entregas pelo ID.
routes.delete('/entregaepi/:id', entregasController.delete)
// Rota para Alterar uma EPI pelo ID
routes.put('/entregaepi/:id', entregasController.update)
export { routes }

