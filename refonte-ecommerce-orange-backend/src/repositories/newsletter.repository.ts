import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbBoutiqueDataSource} from '../datasources';
import {Newsletter, NewsletterRelations} from '../models';

export class NewsletterRepository extends DefaultCrudRepository<
  Newsletter,
  typeof Newsletter.prototype.id,
  NewsletterRelations
> {
  constructor(
    @inject('datasources.dbBoutique') dataSource: DbBoutiqueDataSource,
  ) {
    super(Newsletter, dataSource);
  }
}
