import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

type Props = {
  label: string
  labelClass?: string
  error?: FieldError
  optionsData: ReactNode
} & InputHTMLAttributes<HTMLSelectElement>

const SelectComponent = forwardRef<HTMLSelectElement, Props>(
  (props: Props, ref) => {
    return (
      <div>
        <label className="flex flex-col gap-1">
          {props.label}
          <select
            ref={ref}
            className="block w-full p-2 border border-gray-300 rounded-[8px] bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...props}
          >
            <option value="">Select</option>
            {props.optionsData}
          </select>
          <p
            className={`font-[12px] h-[16px] ${props.error ? 'text-red-500' : 'text-gray-500'}`}
          >
            {props.error ? props.error.message : ''}
          </p>{' '}
        </label>
      </div>
    )
  },
)

SelectComponent.displayName = 'SelectComponent'
export default SelectComponent
