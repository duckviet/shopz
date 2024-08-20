import { Request, Response } from "express";
import { IBaseController } from "./i.base.controller";

export interface IProductController<T> extends IBaseController<T> {
  getProductsByCategory(req: Request, res: Response): Promise<T[]>;
  getProductsByIds(req: Request, res: Response): Promise<T[]>;
  getProductsByPriceRange(req: Request, res: Response): Promise<T[]>;
  getProductsByBusinessesId(req: Request, res: Response): Promise<T[]>;
  postComment(req: Request, res: Response): Promise<any>;
  deleteComment(req: Request, res: Response): Promise<any>;
}
