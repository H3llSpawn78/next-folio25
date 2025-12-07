import React from 'react'

const BorderedButton = ({ title, icon, position, handleClick, otherClasses }:
    {
        title: string,
        icon?: React.ReactNode,
        position?: string,
        handleClick?: () => void,
        otherClasses?: string
    }) => {

    return (
        <button onClick="handleClick" className="relative mx-auto flex h-12 overflow-hidden rounded-lg p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0ef5a1_0%,#18e97d57_50%,#0ef5a1_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`} >
                {position === 'left' && icon && <span className="mr-2">{icon}</span>}
                {title}
                {position === 'right' && icon && <span className="ml-2">{icon}</span>}
            </span>
        </button>
    )
}

export default BorderedButton
