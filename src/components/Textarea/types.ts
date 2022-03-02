import { TextareaHTMLAttributes } from "react"

export interface ITextareaStyledProps {
  invalid?: boolean
}

export interface IProps
  extends ITextareaStyledProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string
}
