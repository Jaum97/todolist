import cogoToast, { CTReturn, CTOptions, CToast } from "cogo-toast"

export const callToast =
  (method: keyof CToast) =>
  (message: string, extraOpts?: CTOptions): CTReturn => {
    const opts = { position: "top-right" as const, ...extraOpts }
    return cogoToast[method](message, opts)
  }

export const displaySuccess = callToast("success")

export const displayError = callToast("error")

export const displayLoading = callToast("loading")
