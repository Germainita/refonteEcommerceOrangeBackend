import {Entity, model, property} from '@loopback/repository';

@model()
export class Categorie extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  libelle: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;

  @property({
    type: 'string',
  })
  updatedAt?: string;

  @property({
    type: 'string',
  })
  updatedBy?: string;

  constructor(data?: Partial<Categorie>) {
    super(data);
  }
}

export interface CategorieRelations {
  // describe navigational properties here
}

export type CategorieWithRelations = Categorie & CategorieRelations;
