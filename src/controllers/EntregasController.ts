import {Request, response, Response} from 'express' 
import {EntregasServices} from '../services/EntregasServices'


class EntregasController { 

    //  id do funcionario, nome do epi, data da entrega e a quantidade a ser entregue.

    async create(request: Request, response: Response)  {
        
        let {funcionario_id, nome_epi, data_entrega, quantidade_entregue} = request.body
       data_entrega = new Date(data_entrega)

       const entregasServices = new EntregasServices() // Instanciando a classse DespesasServices
       
       try{ 
       const entregas = await entregasServices.create({funcionario_id, nome_epi, data_entrega, quantidade_entregue})
       return response.json(entregas)
       } catch (err) {
           return response
               .status(400)
               .json({message:err.message})
       }
   }

   async index(request: Request, response: Response) {
    const entregasServices = new EntregasServices()
    try {
        const entregas = await entregasServices.index()
        return response.json(entregas)
    } catch(err) {
        return response
            .status(400)
            .json({message:err.message})
    }
}

async show(request: Request, response: Response) {
    const entregasServices = new EntregasServices()
    const {id} = request.params
    try { 
        const entregas = await entregasServices.show({id})
        return response.json(entregas)
    } catch(err) {
        return response
            .status(400)
            .json({message: err.message})
    }
}

async delete(request: Request, response: Response) {
    const entregasServices = new EntregasServices()
    const {id} = request.params

    try{
        const entregas = await entregasServices.delete({id})
        return response.json({message: 'ID Deletado com Sucesso !!'})
    }   catch (err) {
        return response
            .status(400)
            .json({message: err.message})
    }
}

async update(request: Request, response: Response) {
    const {funcionario_id, nome_epi, data_entrega, quantidade_entregue} = request.body
    
    const {id} = request.params
    
    const entregasServices = new EntregasServices()

    try {
        const entregas = await entregasServices.update({
            id, funcionario_id, nome_epi, data_entrega, quantidade_entregue
        })
        return response.json(entregas)
    } catch (err) {
        return response
           .status(400)
           .json({message: err.message})
        }
    }
}

export {EntregasController}