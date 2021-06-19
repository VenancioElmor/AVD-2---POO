import {Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne} from 'typeorm' 
import {v4 as uuid} from 'uuid'  // Importando o uuid
import {Funcionarios} from './Funcionarios'

@Entity('entregaEPI')
class EntregaEPI {
    @PrimaryColumn()
    id: string;
    
    @JoinColumn({name: "funcionario_id"})
    @ManyToOne(() => Funcionarios)
    funcionarios: Funcionarios

    @Column()
    funcionario_id: string;

    @Column()
    nome_epi: string;

    @Column()
    data_entrega: Date;

    @Column()
    quantidade_entregue: number;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    // Constructor, gera o ID automaticamente 
    constructor () {
        if (!this.id) {
            this.id = uuid()
        }
    
    }
}


export {EntregaEPI}