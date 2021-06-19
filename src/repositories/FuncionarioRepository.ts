import {Entity, EntityRepository, Repository} from 'typeorm'
import {Funcionarios} from '../entities/Funcionarios'

@EntityRepository(Funcionarios)
class FuncionarioRepository extends Repository <Funcionarios> {

}

export {FuncionarioRepository}