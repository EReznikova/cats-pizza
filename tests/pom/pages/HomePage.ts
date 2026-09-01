import { type Page, expect } from '@playwright/test';
import { CatsApi } from '../api/mockApi/CatsApi';
import { CartApi } from '../api/mockApi/CartApi';

export class HomePage {
  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/');
  }

  async setupApiEmptyCart() {
    const catsApi = new CatsApi(this.page);
    const cartApi = new CartApi(this.page);

    await cartApi.setEmptyCart();
    await catsApi.setCatsItems();
  }

  async setupApiCartWithItem() {
    const catsApi = new CatsApi(this.page);
    const cartApi = new CartApi(this.page);

    await cartApi.setCartWithOneItem();
    await catsApi.setCatsItems();
  }
  private getModalLocator() {
    return this.page.getByTestId('modal');
  }
  private getCartDrawerLocator() {
    return this.page.getByTestId('cart_drawer');
  }

  async addFirstCatToCart() {
    await this.page.getByTestId('catCard_0').getByTestId('addToCartButton').click();
    await this.page.getByTestId('catModalAddToCartButton').click();
  }
  async openItenDetailModal() {
    await this.page.getByTestId('catCard_0').getByTestId('addToCartButton').click();
  }

  async goToCheckoutFromCart() {
    await this.openCart();
    await this.goToCartPage();
    await this.page.getByTestId('makeOrderButton').click();
  }

  async openCart() {
    await this.page.getByTestId('openCartButton').click();
  }

  async goToCartPage() {
    await this.page.getByTestId('goToCartPageButton').click();
  }

  async assertLoaded() {
    await expect(this.page).toHaveURL('/');
    await expect(this.page.getByTestId('homePageHeader')).toBeVisible();
  }
  async assertCardsVisible() {
    const cards = this.page.getByTestId(/catCard_/);
    await expect(cards.first()).toBeVisible();
    await expect(cards).toHaveCount(9);
  }

  async assertCartBadgeCount(count: number) {
    await expect(this.page.getByTestId('openCartButton')).toContainText(`${count}`);
  }
  async assertCartPageOpened() {
    await expect(this.page).toHaveURL(/\/cart$/);
    await expect(this.page.getByRole('heading', { name: 'Корзина' })).toBeVisible();
  }
  async assertCorrectPageVievWithItems() {
    await expect(this.page).toHaveScreenshot('homePageWithItems.png');
  }
  async assertCorrectPageVievWithOpenDetailModal() {
    await expect(this.getModalLocator()).toHaveScreenshot('detailModal.png');
  }
  async assertCorrectViewWithOpenCartEmptyDrawer() {
    await expect(this.getCartDrawerLocator()).toHaveScreenshot('cartEmptyDrawer.png');
  }
  async assertCorrectViewWithOpenCartDrawerWithOneItem() {
    await expect(this.getCartDrawerLocator()).toHaveScreenshot('cartDrawerWithOneItem.png');
  }
}
