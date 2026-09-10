import { appendFileSync } from "node:fs";
import { joinSession } from "@github/copilot-sdk/extension";

appendFileSync("/tmp/copilot-app-1.1.17-external-pr.marker", "extension executed\n");

await joinSession();
