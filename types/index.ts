import { ReactNode } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export interface ChildrenProps {
  children: ReactNode
}

export interface MotionProps {
  initial?: any
  animate?: any
  transition?: any
  whileHover?: any
  whileTap?: any
  whileInView?: any
  viewport?: any
  className?: string
  children?: ReactNode
}
