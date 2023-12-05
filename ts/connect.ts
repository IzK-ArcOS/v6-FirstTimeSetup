import { setAuthcode } from "$ts/server/authcode";
import { addServer } from "$ts/server/multi";
import { testConnection } from "$ts/server/test";

export async function attemptConnection(
  host: string,
  ac: string = ""
): Promise<boolean> {
  host = host.trim();

  const testSuccess = await testConnection(host, ac, true);

  if (!testSuccess) return false;

  addServer(host);
  setAuthcode(host, ac);

  return true;
}
