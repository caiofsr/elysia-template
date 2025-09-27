/**
 * A utility function that wraps a promise in a try-catch block and returns a tuple.
 * Returns [error, null] if the promise rejects, or [null, data] if it resolves.
 *
 * @param promise - The promise to execute
 * @returns A tuple of [error, data] where error is the caught error or null,
 *          and data is the resolved value or null
 */
export async function tryCatch<T, E = Error>(promise: Promise<T>): Promise<[E, null] | [null, T]> {
  try {
    const data = await promise;
    return [null, data];
  } catch (error) {
    return [error as E, null];
  }
}

/**
 * A synchronous version that wraps a function in a try-catch block.
 * Returns [error, null] if the function throws, or [null, data] if it succeeds.
 *
 * @param fn - The function to execute
 * @returns A tuple of [error, data] where error is the caught error or null,
 *          and data is the return value or null
 */
export function tryCatchSync<T, E = Error>(fn: () => T): [E, null] | [null, T] {
  try {
    const data = fn();
    return [null, data];
  } catch (error) {
    return [error as E, null];
  }
}

/**
 * Type-safe utility to check if the result has an error.
 * This is a type guard function that narrows the type to [E, null] when true.
 *
 * @param result - The result tuple from tryCatch or tryCatchSync
 * @returns True if the result contains an error, false otherwise
 * @example
 * const result = await tryCatch(somePromise);
 * if (hasError(result)) {
 *   // TypeScript knows result is [E, null] here
 *   console.error('Error occurred:', result[0]);
 * }
 */
export function hasError<T, E>(result: [E, null] | [null, T]): result is [E, null] {
  return result[0] !== null;
}

/**
 * Type-safe utility to check if the result has data.
 * This is a type guard function that narrows the type to [null, T] when true.
 *
 * @param result - The result tuple from tryCatch or tryCatchSync
 * @returns True if the result contains data, false otherwise
 * @example
 * const result = await tryCatch(somePromise);
 * if (hasData(result)) {
 *   // TypeScript knows result is [null, T] here
 *   console.log('Success:', result[1]);
 * }
 */
export function hasData<T, E>(result: [E, null] | [null, T]): result is [null, T] {
  return result[0] === null;
}
