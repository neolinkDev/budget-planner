
import { MessageProps } from '../interfaces/interfaces';


export const Message = ({ children, MessageType}: MessageProps ) => {
  return (
    <div className={`alert ${ MessageType }`}>
      { children }
    </div>
  )
}
