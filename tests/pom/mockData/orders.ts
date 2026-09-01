export const emptyOrders = {
  orders: [],
};
export const oneOrder = {
  orders: [
    {
      id: 'order-1',
      ownerType: 'user',
      ownerId: 'user-2',
      userId: 'user-2',
      guestSessionId: null,
      items: [
        {
          id: 'cat-1',
          name: 'Маргарита',
          basePrice: 3500,
          price: 3500,
          options: {
            furType: 'Средняя',
            activityLevel: 'Игровой',
            extras: [],
          },
          quantity: 1,
        },
      ],
      totalPrice: 3500,
      customer: {
        city: 'москва',
        street: 'луганская',
        house: '4',
        apartment: '1',
        comment: 'фцуцйу',
        payment: 'card',
      },
      createdAt: '2026-08-31T19:36:44.632Z',
    },
  ],
};
