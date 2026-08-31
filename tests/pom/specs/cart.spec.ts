import { guestTest as test } from '../../fixtures/app.fixture';

test('Shows empty cart state', async ({ cartPage }) => {
  await cartPage.open();
  await cartPage.assertEmpty();
});

test('Removimg last item makes cart empty', async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.removeFirstItem();
  await cartPage.assertEmpty();
});

test('Clear cart removes all items', async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.clear();
  await cartPage.assertEmpty();
});

test('Changing qantity updates cart bage and input value', async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.addOneMoreCat();
  await homePage.assertCartBadgeCount(2);
  await cartPage.assertCatCounter('2');
});
