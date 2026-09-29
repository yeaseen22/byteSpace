export default function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`container-page ${className}`} {...props}>
      {children}
    </Tag>
  )
}
