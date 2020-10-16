import { lua_chon, play_game } from "../action/BTXucXacType";

const stateDefault = {
  arrXucXac: [
    { name: 1, src: "./img/gameXucXac/1.png" },
    { name: 1, src: "./img/gameXucXac/1.png" },
    { name: 1, src: "./img/gameXucXac/1.png" },
  ],
  luaChon: "Tài",
  soBanThang: 0,
  soBanChoi: 0,
};

export const BaiTapXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case lua_chon:
      return { ...state, luaChon: action.value };
    case play_game: {
      state.soBanChoi += 1;
      let arrXucXacNew = [];
      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 6 + 1);
        arrXucXacNew[i] = {
          name: random,
          src: `/img/gameXucXac/${random}.png`,
        };
      }
      state.arrXucXac = arrXucXacNew;
      let tongDiem = arrXucXacNew.reduce(
        (tong, xucXac) => (tong += xucXac.name),
        0
      );
      if (
        (tongDiem > 9 && state.luaChon === "Tài") ||
        (tongDiem <= 9 && state.luaChon === "Xỉu")
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
