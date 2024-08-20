import { CommentSchema } from "models/interfaces/product.interface";
import { IBaseService } from "./i.base.service";

export interface IProductService<T> extends IBaseService<T> {
  getProductsByCategory(category: string): Promise<T[]>;
  getProductsByIds(ids: string[]): Promise<T[]>;
  getProductsByPriceRange(minPrice: number, maxPrice: number): Promise<T[]>;
  getProductsByBusinessesId(businessesId: string): Promise<T[]>;
  postComment(
    productId: string,
    customerComment: typeof CommentSchema
  ): Promise<any>;
  deleteComment(productId: string, commentId: string): Promise<any>;
}
