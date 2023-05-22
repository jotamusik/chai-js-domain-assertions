
// @ts-ignore
declare global {
  export namespace Chai {
    interface Assertion {
      child(): void
    }
  }
}
