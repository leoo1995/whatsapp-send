import { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input'
import cn from 'classnames'
import 'react-phone-number-input/style.css'

function App() {
  
   const [value, setValue] = useState<any>('+57')
   const isValidValue = value && isValidPhoneNumber(value)
   return (
      <div className='p-5 bg-gray-100 min-h-screen flex items-center'>
         <div className="p-5 max-w-md mx-auto bg-white rounded-md">
            <span>Enviar mensaje a Whatsapp</span>
            <PhoneInput
               className='mt-2 w-full border-2 border-gray-500 p-3 rounded-md'
               placeholder=""
               value={value}
               onChange={setValue}
            />

            <a
               className={cn('mt-2 p-3 block bg-green-500 text-white text-center rounded-md', {
                  'bg-gray-400 cursor-not-allowed': !isValidValue
               })}
               href={isValidValue ? `https://api.whatsapp.com/send?phone=${value}` : '#'}
            >Enviar
            </a>
         </div>
      </div>

   )
}

export default App
