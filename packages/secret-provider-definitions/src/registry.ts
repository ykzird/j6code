import { makeSecretProviderDefinitionRegistry } from "@j6/secret-provider-core/shared/definition";
import * as OnePassword from "@j6/secret-provider-onepassword/shared/definition";

export const builtInSecretProviderDefinitions = makeSecretProviderDefinitionRegistry([
  OnePassword.definition,
]);
