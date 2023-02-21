import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialStateHabbits = {
  habbits: [
    {
      name: "Ucenje",
      min: "3h",
      today: "1h",
    },
  ],
};

const HabbitsSlice = createSlice({
  name: "habbits",
  initialState: initialStateHabbits,
});

const store = configureStore({ reducer: HabbitsSlice.reducer });
