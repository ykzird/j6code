import { DpopProof, ManagedRelay } from "@j6/client-runtime/relay";
import { RelayWebClientId } from "@j6/contracts/relay";
import * as Layer from "effect/Layer";

import { loadOrCreateProofKey } from "./dpop";

const layerRelayDpopSigner = DpopProof.layerSigner({
  keyStore: "indexed-db",
  loadOrCreateKey: loadOrCreateProofKey(),
});

export const layer = (relayUrl: string) =>
  ManagedRelay.layer({ relayUrl, clientId: RelayWebClientId }).pipe(
    Layer.provideMerge(layerRelayDpopSigner),
  );
