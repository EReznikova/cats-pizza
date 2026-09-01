import { Page, expect } from '@playwright/test';
import { CartApi } from '../api/mockApi/CartApi';

export class CartPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/cart');
  }

  async setupApiEmptyCart() {
    const cartApi = new CartApi(this.page);
    await cartApi.setEmptyCart();
  }

  async setupApiCartWithItem() {
    const cartApi = new CartApi(this.page);
    await cartApi.setCartWithOneItem();
  }

  async removeFirstItem() {
    await this.page.getByRole('button', { name: 'удалить' }).first().click();
  }

  async clear() {
    await this.page.getByRole('button', { name: 'Очистить корзину' }).click();
  }
  async addOneMoreCat() {
    await this.page.getByRole('button', { name: '+' }).click();
  }
  async assertEmpty() {
    await expect(this.page.getByText('Корзина пуста. Добавьте котика с главной страницы.')).tobe;
  }
  async assertCatCounter(value: string) {
    await expect(this.page.getByTestId('itemCounter')).toHaveValue(value);
  }
  async assertCartHasCorrectViewEmpty() {
    await expect(this.page).toHaveScreenshot('cartHasCorrectViewEmpty.png');
  }
  async assertCartHasCorrectViewWithOneItem() {
    await expect(this.page).toHaveScreenshot('CartHasCorrectViewWithOneItem.png');
  }
}
