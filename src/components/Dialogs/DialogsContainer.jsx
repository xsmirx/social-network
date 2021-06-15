import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = withAuthRedirect(Dialogs);
