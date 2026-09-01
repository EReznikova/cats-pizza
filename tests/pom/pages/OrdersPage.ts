import { expect, type Page } from '@playwright/test';
import { OrdersApi } from '../api/mockApi/ordersApi';
import { AuthApi } from '../api/mockApi/AuthApi';

export class OrdersPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.getByTestId('openOrdersButton').click();
  }

  async openPage() {
    await this.page.goto('/orders');
  }

  async setupApiWithOneOrger() {
    const ordersApi = new OrdersApi(this.page);
    const auhtApi = new AuthApi(this.page);
    await ordersApi.setOrdersWithOneItem();
    await auhtApi.setupAuth();
  }

  async setupApiEmptyOrgers() {
    const ordersApi = new OrdersApi(this.page);
    const auhtApi = new AuthApi(this.page);
    await auhtApi.setupAuth();
    await ordersApi.setEmptyOrders();
  }

  async asserHasOrder() {
    await expect(this.page.getByTestId('ordersList').getByRole('listitem').first()).toBeVisible();
  }

  async assertOrderdHasCorrectViewEmpty() {
    await expect(this.page).toHaveScreenshot('OrderdHasCorrectViewEmpty.png');
  }
  async assertOrdersHasCorrectViewWithOneItem() {
    await expect(this.page).toHaveScreenshot('OrdersHasCorrectViewWithOneItem.png');
  }
}
