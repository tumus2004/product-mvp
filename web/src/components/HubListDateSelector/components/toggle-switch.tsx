import { useCallback } from 'react'

type ToggleSwitchProps = {
  day: string
  closed: boolean
  setClosed: React.Dispatch<React.SetStateAction<boolean>>
}
const ToggleSwitch = ({ day, closed, setClosed }: ToggleSwitchProps) => {
  const _setClosed = useCallback(() => {
    setClosed && setClosed(!closed)
  }, [closed, setClosed])
  return (
    <div className="flex items-center w-12   md:w-16 lg:w-24">
      <label
        htmlFor={`open-${day}`}
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input
            id={`open-${day}`}
            type="checkbox"
            className="sr-only"
            checked={closed}
            onChange={_setClosed}
          />
          <div
            className={`${
              closed ? 'bg-selected' : 'bg-[#323232]'
            } w-10 h-4 rounded-full shadow-inner bg-opacity-40 transition-all duration-300`}
          ></div>
          <div
            className={`${
              closed ? 'left-4 bg-selected' : 'bg-paragraph left-0'
            } transform absolute transition-all duration-300 w-6 h-6 rounded-full shadow -top-1`}
          ></div>
        </div>
        <span
          className={`${
            closed ? 'text-mainText' : 'text-paragraph'
          } ml-3 text-sm transition-colors duration-300 hidden lg:block`}
        >
          {closed ? 'Open' : 'Closed'}
        </span>
      </label>
    </div>
  )
}

export default ToggleSwitch
