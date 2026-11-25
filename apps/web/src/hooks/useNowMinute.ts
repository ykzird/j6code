import { minuteTick } from "@j6/client-runtime/clock";
import { useSyncExternalStore } from "react";

export function useNowMinute(): string {
  return useSyncExternalStore(minuteTick.subscribe, minuteTick.getSnapshot, minuteTick.getSnapshot);
}
