import {
  CommentSchema,
  IProduct,
} from "../models/interfaces/product.interface";
import { ProductModel } from "../models/product.model";
import { BaseService } from "./base/base.service";
import { IProductService } from "./interface/i.products.service";

class ProductService
  extends BaseService<IProduct>
  implements IProductService<IProduct>
{
  constructor() {
    super(ProductModel);
  }

  async getProductsByCategory(category: string): Promise<IProduct[] | null> {
    return await ProductModel.find({ category: category });
  }

  async getProductsByIds(ids: string[]): Promise<IProduct[]> {
    return await ProductModel.find({
      _id: { $in: ids },
    });
  }
  async getProductsByPriceRange(
    minPrice: number,
    maxPrice: number
  ): Promise<IProduct[] | null> {
    return await ProductModel.find({
      price: { $gte: minPrice, $lte: maxPrice },
    });
  }
  async getProductsByBusinessesId(
    businessesId: string
  ): Promise<IProduct[] | null> {
    return await ProductModel.find({ businessesId: businessesId });
  }
  async postComment(
    productId: string,
    customerComment: typeof CommentSchema
  ): Promise<any> {
    const product = await ProductModel.findById(productId);

    if (!product) {
      throw new Error("Product not found");
    }
    product.comments.push(customerComment);

    await product.save();

    return product;
  }
  async deleteComment(productId: string, commentId: string): Promise<any> {
    const product = await ProductModel.findById(productId);

    if (!product) {
      throw new Error("Product not found");
    }
    product.comments = product.comments.filter(
      (comment: any) => comment?._id.toString() !== commentId
    );

    await product.save();

    return product;
  }
}

export const productService = new ProductService();
