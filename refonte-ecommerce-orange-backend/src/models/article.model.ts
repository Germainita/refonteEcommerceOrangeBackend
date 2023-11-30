import {Entity, model, property} from '@loopback/repository';

@model()
export class Article extends Entity {
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
    type: 'boolean',
    default: true,
  })
  isActive?: boolean;

  @property({
    type: 'number',
    required: true,
  })
  quantite: number;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  images: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  couleurs?: string[];

  @property({
    type: 'number',
    required: true,
  })
  prix: number;

  @property({
    type: 'number',
  })
  idPromo?: number;

  @property({
    type: 'boolean',
    default: false,
  })
  isPromo?: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  isNew?: boolean;

  @property({
    type: 'number',
    required: true,
  })
  idCategorie: number;

  @property({
    type: 'number',
    required: true,
  })
  idForfait: number;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;

  @property({
    type: 'date',
  })
  updatedAt?: string;

  @property({
    type: 'string',
  })
  updatedBy?: string;


  constructor(data?: Partial<Article>) {
    super(data);
  }
}

export interface ArticleRelations {
  // describe navigational properties here
}

export type ArticleWithRelations = Article & ArticleRelations;
