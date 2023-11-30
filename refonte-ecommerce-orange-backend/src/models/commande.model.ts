import {Entity, model, property} from '@loopback/repository';

@model()
export class Commande extends Entity {
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
  numero: string;

  @property({
    type: 'string',
    required: true,
  })
  etat: string;

  @property({
    type: 'date',
    required: true,
  })
  dateValidation: string;

  @property({
    type: 'date',
    required: true,
  })
  dateLivraison: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  articles: object[];

  @property({
    type: 'number',
    required: true,
  })
  idUser: number;

  @property({
    type: 'number',
    required: true,
  })
  prixTotal: number;


  constructor(data?: Partial<Commande>) {
    super(data);
  }
}

export interface CommandeRelations {
  // describe navigational properties here
}

export type CommandeWithRelations = Commande & CommandeRelations;
