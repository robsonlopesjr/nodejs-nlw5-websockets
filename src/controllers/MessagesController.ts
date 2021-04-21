import { Request, Response } from 'express';

import { MessagesService } from '../services/MessagesService';

class MessagesController {
  async create(request: Request, response: Response) {
    const { admin_id, user_id, text } = request.body;

    try {
      const messagesService = new MessagesService();

      const messages = await messagesService.create({
        admin_id,
        user_id,
        text,
      });

      return response.json(messages);
    } catch (err) {
      return response.status(400).json({
        message: err.message
      });
    }
  }
}

export { MessagesController }