/* auto-generated by NAPI-RS */
/* eslint-disable */
export declare class Tokenizer {
  count(content: string, allowedSpecial?: Array<string> | undefined | null): number
}

export declare function fromModelName(modelName: string): Tokenizer | null

export declare function getMime(input: Uint8Array): string

/**
 * Merge updates in form like `Y.applyUpdate(doc, update)` way and return the
 * result binary.
 */
export declare function mergeUpdatesInApplyWay(updates: Array<Buffer>): Buffer

export declare function mintChallengeResponse(resource: string, bits?: number | undefined | null): Promise<string>

export declare function verifyChallengeResponse(response: string, bits: number, resource: string): Promise<boolean>

