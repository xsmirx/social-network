import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Dialogs } from "./Dialogs";

const DialogsContainer = withAuthRedirect(Dialogs);

export default DialogsContainer;
