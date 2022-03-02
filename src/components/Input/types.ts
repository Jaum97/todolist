import { InputHTMLAttributes } from "react"

export interface IInputStyledProps {
  invalid?: boolean
}

export interface IProps
  extends IInputStyledProps,
    InputHTMLAttributes<HTMLInputElement> {
  title?: string
}
