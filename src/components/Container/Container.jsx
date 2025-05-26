import s from "./Container.module.css"

function Container({children}) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        {children}
      </div>
    </section>
  )

}
export default Container;