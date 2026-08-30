import { test } from '../../fixtures/app.fixture';
import { CleanupApi } from '../api/CleanupApi';
import { testAddress, testUsers } from '../data/testData';

test.describe('Orders', () => {
  test.describe.configure({ mode: 'serial' });
  //удалять заказы пользователя после каждого теста
  test.afterEach(async ({ request }) => {
    const cleanUpApi = new CleanupApi(request);
    await cleanUpApi.deleteOrdersByEmail(testUsers.existing.email);
  });

  test('Make order with login in checkout', async ({ homePage, checkoutPage, orderPage }) => {
    await homePage.open();
    await homePage.addFirstCatToCart();
    await homePage.goToCheckoutFromCart();
    await checkoutPage.signInAndCheckout(testUsers.existing.email, testUsers.existing.password);
    await checkoutPage.fillAddress(testAddress);
    await checkoutPage.submit();
    await orderPage.open();
    await orderPage.asserHasOrder();
  });

  test('Make order after login', async ({ homePage, checkoutPage, orderPage, authPage }) => {
    await homePage.open();
    await authPage.signIn(testUsers.existing.email, testUsers.existing.password);
    await homePage.addFirstCatToCart();
    await homePage.goToCheckoutFromCart();
    await checkoutPage.fillAddress(testAddress);
    await checkoutPage.submit();
    await orderPage.open();
    await orderPage.asserHasOrder();
  });
});
