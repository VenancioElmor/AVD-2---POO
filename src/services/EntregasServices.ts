import { getCustomRepository } from "typeorm"; 
import {EntregasController} from '../controllers/EntregasController'
import {EntregaRepository} from '../repositories/EntregaRepository'

interface IEntregasCreate {
    funcionario_id: string;
    nome_epi: string;
    data_entrega: Date;
    quantidade_entregue: number;
}

interface IEntregasID {
    id: string; 
}

interface IEntregasUpdate {
    id: string;
    funcionario_id: string;
    nome_epi: string;
    data_entrega: Date;
    quantidade_entregue: number;

}

class EntregasServices {

    async create({funcionario_id, nome_epi, data_entrega, quantidade_entregue}: IEntregasCreate) { // Informações que serão recebidas. 
        const entregaRepository = getCustomRepository(EntregaRepository) // Acesso aos comandos para manipular o BD.

        const entrega = entregaRepository.create({
            funcionario_id,
            nome_epi,
            data_entrega,
            quantidade_entregue
        })

        await entregaRepository.save(entrega)
        return entrega

    }

    async index() {
        const entregaRepository = getCustomRepository(EntregaRepository)

        const entrega = entregaRepository.find({
            relations: ['funcionarios']
        })
        return entrega
    }

    async show({id}: IEntregasID) {
        const entregaRepository = getCustomRepository(EntregaRepository)

        const entrega = await entregaRepository.findOne(id, {
            relations: ['funcionarios']
        })

        if (!entrega) {
            throw new Error('ID não existe !!')
        }
        return entrega

    }

    async delete({id}: IEntregasID) {
        const entregaRepository = getCustomRepository(EntregaRepository)
        const entrega = await entregaRepository.findOne({id})

        if (!entrega) {
            throw new Error('ID não existe !!')
        }
        return await entregaRepository.delete({id})
    }
    async update({id,funcionario_id, nome_epi, data_entrega, quantidade_entregue}: IEntregasUpdate) {
        const entregaRepository = getCustomRepository(EntregaRepository)
        
        let verificarid = await entregaRepository.findOne({id}) 
        if (!verificarid) {
            throw new Error("ID não encontrado !!") }

            const entregaUpdate = entregaRepository.update(id,{
                funcionario_id,
                nome_epi,
                data_entrega,
                quantidade_entregue
            })
            verificarid = await entregaRepository.findOne(id)
            return verificarid
        }


}

export {EntregasServices}