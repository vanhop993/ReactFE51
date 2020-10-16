import { lua_chon, play_game } from "./BTXucXacType";
export const chonLua = (value) => ({
  type: lua_chon,
  value,
});
export const playGame = () => ({
  type: play_game,
});
