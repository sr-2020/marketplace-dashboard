import React from "react"
import "./Nav.css"

const linksSchema: NavSchemaItem[] = [
  {
    name: "Предметы",
    link: "#",
  },
  {
    name: "Магазины",
    link: "#",
  },
  {
    name: "Корпорации",
    link: "#",
  },
  {
    name: "Игроки",
    link: "#",
  },
]

function Nav() {
  return (
    <nav className="nav">
      <span className="nav__title"> Admin actions</span> 
      {linksSchema.map((el, idx) => {
        return (
          <a key={idx} href={el.link} className="nav__link">
            {el.name}
          </a>
        )
      })}
    </nav>
  )
}

export default Nav

export interface NavSchemaItem {
  name: string
  link: string
}
