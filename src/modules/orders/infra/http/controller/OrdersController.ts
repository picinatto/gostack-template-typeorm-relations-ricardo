import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const findOrder = container.resolve(FindOrderService);

    const { id } = request.params;

    const order = findOrder.execute({ id });

    return response.status(200).json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createOrder = container.resolve(CreateOrderService);

    const { customer_id, products } = request.body;

    const order = createOrder.execute({ customer_id, products });

    return response.status(201).json(order);
  }
}
