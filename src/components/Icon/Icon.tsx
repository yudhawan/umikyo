import SVG from 'react-inlinesvg'
import { IconProp } from '../../types'
const Icon: React.FC<IconProp> = ({ name, className }) => {
  return (
    <SVG src={name.src} className={className} />
  )
}

export default Icon