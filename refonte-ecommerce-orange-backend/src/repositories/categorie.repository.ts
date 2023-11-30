import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbBoutiqueDataSource} from '../datasources';
import {Categorie, CategorieRelations} from '../models';

export class CategorieRepository extends DefaultCrudRepository<
  Categorie,
  typeof Categorie.prototype.id,
  CategorieRelations
> {
  constructor(
    @inject('datasources.dbBoutique') dataSource: DbBoutiqueDataSource,
  ) {
    super(Categorie, dataSource);
  }
}
