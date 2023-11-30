import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Promo} from '../models';
import {PromoRepository} from '../repositories';

export class PromoController {
  constructor(
    @repository(PromoRepository)
    public promoRepository : PromoRepository,
  ) {}

  @post('/promos')
  @response(200, {
    description: 'Promo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Promo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promo, {
            title: 'NewPromo',
            
          }),
        },
      },
    })
    promo: Promo,
  ): Promise<Promo> {
    return this.promoRepository.create(promo);
  }

  @get('/promos/count')
  @response(200, {
    description: 'Promo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Promo) where?: Where<Promo>,
  ): Promise<Count> {
    return this.promoRepository.count(where);
  }

  @get('/promos')
  @response(200, {
    description: 'Array of Promo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Promo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Promo) filter?: Filter<Promo>,
  ): Promise<Promo[]> {
    return this.promoRepository.find(filter);
  }

  @patch('/promos')
  @response(200, {
    description: 'Promo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promo, {partial: true}),
        },
      },
    })
    promo: Promo,
    @param.where(Promo) where?: Where<Promo>,
  ): Promise<Count> {
    return this.promoRepository.updateAll(promo, where);
  }

  @get('/promos/{id}')
  @response(200, {
    description: 'Promo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Promo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: string,
    @param.filter(Promo, {exclude: 'where'}) filter?: FilterExcludingWhere<Promo>
  ): Promise<Promo> {
    return this.promoRepository.findById(id, filter);
  }

  @patch('/promos/{id}')
  @response(204, {
    description: 'Promo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Promo, {partial: true}),
        },
      },
    })
    promo: Promo,
  ): Promise<void> {
    await this.promoRepository.updateById(id, promo);
  }

  @put('/promos/{id}')
  @response(204, {
    description: 'Promo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: string,
    @requestBody() promo: Promo,
  ): Promise<void> {
    await this.promoRepository.replaceById(id, promo);
  }

  @del('/promos/{id}')
  @response(204, {
    description: 'Promo DELETE success',
  })
  async deleteById(@param.path.number('id') id: string): Promise<void> {
    await this.promoRepository.deleteById(id);
  }
}
