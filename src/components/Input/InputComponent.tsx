import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

type Props = {
  label: string
  labelClass?: string
  error?: FieldError
} & InputHTMLAttributes<HTMLInputElement>

const InputComponent = forwardRef<HTMLInputElement, Props>(
  (props: Props, ref) => {
    return (
      <div>
        <label className="flex flex-col gap-1">
          {props.label}
          <input
            ref={ref}
            className={`${props.className} w-full rounded-[8px] peer-invalid:border-red-500 peer-invalid:ring-red-500`}
            {...props}
          />
          <p
            className={`flex font-[12px] h-[16px] items-center ${props.error ? 'text-red-500' : 'text-gray-500'}`}
          >
            {props.error ? props.error.message : ''}
          </p>{' '}
        </label>
      </div>
    )
  },
)

InputComponent.displayName = 'InputComponent'
export default InputComponent
