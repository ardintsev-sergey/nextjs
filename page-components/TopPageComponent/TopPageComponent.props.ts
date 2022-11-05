import { ProductModel } from './../../interfaces/product.interface';
import { TopPageModel } from './../../interfaces/page.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
