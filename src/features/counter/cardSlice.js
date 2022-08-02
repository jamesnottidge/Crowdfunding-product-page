import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataArray: [
    {
      title: "Pledge with no reward",
      amount: null,
      decreaseBy: null,
      subTitle: null,
      text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      stock: null,
    },
    {
      title: "Bamboo Stand",
      amount: 25,
      decreaseBy: 1,
      subTitle: `Pledge $25 or more`,
      text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special backer member list.",
      stock: 101,
    },

    {
      title: "Black Edition Stand",
      amount: 75,
      decreaseBy: 1,
      subTitle: `Pledge $75 or more`,
      text: "You get a Black Special Edition stand and a personal thank you. You'll be added to our Backer member list. Shipping is included",
      stock: 5,
    },

    {
      title: "Mahogany Special Edition",
      amount: 200,
      decreaseBy: 2,
      subTitle: `Pledge $200 or more`,
      text: "You get two Special Edition Mahogany stands, a Backer T-shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included",
      stock: 64,
    },
  ],
  totalReceived: 0,
  expected: 100000,
  totalBackers: 0,
  daysLeft: 56,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    decreaseStock: (state, action) => {
      //action.payload is an action of structure {title, pledgeAmount}.
      state.dataArray.forEach((item, index) => {
        if (
          action.payload.title === item.title &&
          // eslint-disable-next-line eqeqeq
          item.title != "Pledge with no reward"
        ) {
          item.stock = item.stock - item.decreaseBy;
        }
      });
      state.totalReceived += action.payload.pledgeAmount;
      state.totalBackers += 1;
    },
  },
});

export const { decreaseStock } = cardSlice.actions;

export const selectCards = (state) => state.card.dataArray;

export const selectTotalReceived = (state) => state.card.totalReceived;

export const selectExpected = (state) => state.card.expected;

export const selectTotalBackers = (state) => state.card.totalBackers;

export const selectDaysLeft = (state) => state.card.daysLeft;

export default cardSlice.reducer;
