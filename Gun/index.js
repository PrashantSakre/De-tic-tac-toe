import { REACT_APP_GUN_PEER } from "@env";
import "gun/lib/mobile.js"
import Gun from "gun/gun";
import sea from "gun/sea";
import "gun/lib/radix.js";
import "gun/lib/radisk.js";
import "gun/lib/store.js";
import "gun/lib/rindexed.js";
import { storeLocalData } from "../Utils/utils";


export const gun = new Gun(REACT_APP_GUN_PEER); // Gun relay
export const SEA = sea;

export const appDB = gun.get("ticTacToe");

export const createLocalUser = async (name) => {
  try {
    const pair = await SEA.pair();
    const user = {
      name,
      pair,
    };
    storeLocalData("user", user);
  } catch (e) {
    return e
  }
}
