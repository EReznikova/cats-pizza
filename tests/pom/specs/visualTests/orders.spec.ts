import { guestTest as test } from '../../../fixtures/app.fixture';

test('Orders page empty state', async ({ orderPage }) => {
  await orderPage.setupApiEmptyOrgers();
  await orderPage.openPage();
  await orderPage.assertOrderdHasCorrectViewEmpty();
});
test('Orders page with one item state', async ({ orderPage }) => {
  await orderPage.setupApiWithOneOrger();
  await orderPage.openPage();
  await orderPage.assertOrdersHasCorrectViewWithOneItem();
});
