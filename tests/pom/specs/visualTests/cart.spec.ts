import { guestTest as test } from '../../../fixtures/app.fixture';

test('Cart page empty state', async ({ cartPage }) => {
  await cartPage.setupApiEmptyCart();
  await cartPage.open();
  await cartPage.assertCartHasCorrectViewEmpty();
});
test('Cart page with one item state', async ({ cartPage }) => {
  await cartPage.setupApiCartWithItem();
  await cartPage.open();
  await cartPage.assertCartHasCorrectViewWithOneItem();
});
