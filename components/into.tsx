import { Icon } from "semantic-ui-react"

export default function Intro() {
  return (
    <section className="content-container intro">
      <h2 className="intro-title">Wesh gros c'est Welygo qu'il te faut</h2>
      <form className="search-form">
        <div className="search-action">
          <Icon className="search-icon" name="search"></Icon>
          <span>Rechercher un évènement</span>
        </div>
      </form>
    </section>
  )
}
