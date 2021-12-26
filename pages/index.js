import Carousel from "../components/usual/carousel";
import HomeStyles from "../styles/modules/home.module.scss";
const index = () => {
  return (
    <>
      <section className={HomeStyles.heroSectionRoot}>
        <div>
          <div>
            <h1 className="heading">Tempor aute occaecat laborum aute aliqua in sint Lorem <span>deserunt excepteur laborum in mollit laborum.</span></h1>
            <p>Reprehenderit aliqua enim duis voluptate laboris dolor tempor reprehenderit est ipsum irure dolore.</p>
          </div>
          <div>
            Dolore nisi ea nostrud sunt duis nostrud adipisicing cillum mollit ea qui tempor.
          </div>
        </div>
      </section>
      <Carousel />
    </>
  )
}

export default index;