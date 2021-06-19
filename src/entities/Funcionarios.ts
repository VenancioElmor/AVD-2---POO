import {Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column} from 'typeorm' 
import {v4 as uuid} from 'uuid'  // Importando o uuid

@Entity("funcionarios")
class Funcionarios {
    @PrimaryColumn()
    id: string;
    
    @Column()
    nome: string;
    
    @Column()
    cpf: string;  

    @Column()
    funcao: string;
   
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


export {Funcionarios}