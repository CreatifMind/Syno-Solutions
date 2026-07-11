import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type ActionLinkProps = {
  to: string
  children: React.ReactNode
  variant?: 'primary' | 'outline-light' | 'outline-dark' | 'text'
  className?: string
  state?: Record<string, string>
}

export function ActionLink({
  to,
  children,
  variant = 'primary',
  className = '',
  state,
}: ActionLinkProps) {
  return (
    <Link className={`action-link action-link-${variant} ${className}`.trim()} to={to} state={state}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </Link>
  )
}

export function TextLink({ to, children }: Pick<ActionLinkProps, 'to' | 'children'>) {
  return (
    <Link className="text-link" to={to}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </Link>
  )
}
