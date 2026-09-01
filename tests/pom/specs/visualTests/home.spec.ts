import { guestTest as test } from '../../../fixtures/app.fixture';

test('Home page with items has correct view', async ({ homePage }) => {
  await homePage.setupApiEmptyCart();
  await homePage.open();
  await homePage.assertCorrectPageVievWithItems();
});
test('Detail modal has correct view', async ({ homePage }) => {
  await homePage.setupApiEmptyCart();
  await homePage.open();
  await homePage.openItenDetailModal();
  await homePage.assertCorrectPageVievWithOpenDetailModal();
});

test('Empty cart drawer has correct view', async ({ homePage }) => {
  await homePage.setupApiEmptyCart();
  await homePage.open();
  await homePage.openCart();
  await homePage.assertCorrectViewWithOpenCartEmptyDrawer();
});

test('Cart Drawer with one item has correct view', async ({ homePage }) => {
  await homePage.setupApiCartWithItem();
  await homePage.open();
  await homePage.openCart();
  await homePage.assertCorrectViewWithOpenCartDrawerWithOneItem();
});
