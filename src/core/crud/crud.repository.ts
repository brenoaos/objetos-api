// import { IBaseRepository } from "./crud.interface";
// import { Repository, EntityRepository } from "typeorm";




// export function baseRepository<T>(option: any){
//     const Entity = option.entity;





//     @EntityRepository(Entity)
//     abstract class BaseRepository extends Repository<Entity> implements IBaseRepository<Entity> {

//         async procurar(o: any) {
//             return Entity.find(o)
//         }

//         async procurarPorCodigo(o: any) {
//             return Entity.find(o)
//         }

//         async atualizar(o: any) {
//             new Entity(o)
//             return Entity.save()
//         }

//         async

        


//     }


// }











// export abstract class BaseRepository<T> extends Repository<T> implements IBaseRepository<T> {
    
//     async find(o:any): Promise<T[]> {
//         return 
//     }

// }