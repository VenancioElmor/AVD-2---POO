import { getCustomRepository } from "typeorm"; 
import {FuncionariosController} from '../controllers/FuncionariosController'
import {FuncionarioRepository} from '../repositories/FuncionarioRepository'

interface ICreate {
    nome: string;
    cpf: string;
    funcao: string;
}


class FuncionariosServices {

    async create({nome, cpf, funcao}: ICreate) { // Informações que serão recebidas. 
        const funcionariosRepository = getCustomRepository(FuncionarioRepository) // Acesso aos comandos para manipular o BD.

        const funcionario = funcionariosRepository.create({
            nome,
            cpf,
            funcao
        })

        await funcionariosRepository.save(funcionario)
        return funcionario
    }

    async index() {
        const funcionariosRepository = getCustomRepository(FuncionarioRepository)
        const funcionario = await funcionariosRepository.find()
        return funcionario
    }
    

}

export {FuncionariosServices}