import React from 'react'
import style from './Section.module.css'

const Section = props => {
  return (
    <section className={style.section}>
      <h2 className={style.section_title}>
        {props.title}
      </h2>
      <div
        className={style.section_content}
      >
        {props.children}
      </div>
    </section>
  )
}

export default Section