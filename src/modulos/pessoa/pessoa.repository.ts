import { Repository, EntityRepository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
// import { CreatePersonDTO } from './pessoa.dto';

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {

    async createPerson(createPersonDTO: any): Promise<Pessoa> {
        const { nome, sobrenome, apelido, isDono, isZelador } = createPersonDTO;
        const person = new Pessoa();

        person.nome = nome;
        person.sobrenome = sobrenome;
        person.apelido = apelido;
        person.dataCadastro = new Date();
        person.bloqueado = false;
        person.isDono = isDono;
        person.isZelador = isZelador;

        return await person.save();
    }
}
