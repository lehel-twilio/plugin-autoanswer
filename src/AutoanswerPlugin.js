import { FlexPlugin } from 'flex-plugin';
import * as Flex from '@twilio/flex-ui';

export default class AutoanswerPlugin extends FlexPlugin {
  name = 'AutoanswerPlugin';

  init(flex, manager) {
    manager.workerClient.on("reservationCreated", reservation => {
      Flex.Actions.invokeAction("AcceptTask", {sid: reservation.sid});
      Flex.Actions.invokeAction("SelectTask", {sid: reservation.sid});
    });
  }
}
