import React from 'react'

export const CardExperience = ({image, title, description}) => {
  return (
    <div className="w-[330px] flex flex-col gap-2">
        <img src={`./src/assets/img/main/${image}`} alt="exp1" />
        <h1 className="font-inter font-bold text-2xl">{ title }</h1>
        <p>{description}</p>
    </div>
  )
}
