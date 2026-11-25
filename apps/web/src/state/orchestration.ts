import { ORCHESTRATION_V2_WS_METHODS } from "@j6/contracts";
import { createOrchestrationEnvironmentAtoms } from "@j6/client-runtime/state/orchestration";
import { createEnvironmentRpcCommand } from "@j6/client-runtime/state/runtime";

import { connectionAtomRuntime } from "../connection/runtime";
import { environmentShell } from "./shell";

export const orchestrationEnvironment = createOrchestrationEnvironmentAtoms(connectionAtomRuntime, {
  shellState: environmentShell.stateValueAtom,
});

export const threadTitlesRead = createEnvironmentRpcCommand(connectionAtomRuntime, {
  label: "environment-data:orchestration:thread-titles-read",
  tag: ORCHESTRATION_V2_WS_METHODS.getThreadTitles,
});
