import { MutationTree } from "vuex";
import { RootState } from "@/store/types";
import { AlertMsgType } from "@/utils/alertService";

export enum RootMutations {
  NAVBAR_TOGGLE = "NAVBAR_TOGGLE",
  CHANGE_THEME = "CHANGE_THEME",
  ADD_ALERT_MSG = "ADD_ALERT_MSG "
}

export const mutations: MutationTree<RootState> = {
  NAVBAR_TOGGLE(state, payload: boolean) {
    state.navbarState = payload;
  },
  CHANGE_THEME(state) {
    state.theme.changeTheme();
  },
  ADD_ALERT_MSG(
    state,
    payload: { type: AlertMsgType; title: string; msg: string }
  ) {
    const { type, title, msg } = payload;
    state.alertService.addAlert(title, msg, type);
  }
};
