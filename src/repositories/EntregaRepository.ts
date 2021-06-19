import {Entity, EntityRepository, Repository} from 'typeorm'
import { EntregaEPI} from '../entities/EntregaEPI'

@EntityRepository(EntregaEPI)
class EntregaRepository extends Repository <EntregaEPI> {

}

export {EntregaRepository}