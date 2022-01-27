import Image from "next/image";
import Carousel from "/components/usual/Carousel";
import HomeStyles from "../styles/modules/home.module.scss";
import DevelopmentOnGoing from "../components/usual/DevelopmentOnGoing";
const index = () => {


  const handleOnChange = (e) => {
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited")
  }


  return (
    <>
      <section className={HomeStyles.heroSectionRoot}>
        <div>
          <div>
            <h1 className="heroHeading">
              Tempor askjsd <span>deserunt excepteur</span>  in sint Lorem labourm aute
            </h1>

            <p>Reprehenderit aliqua enim duis voluptate laboris dolor tempor reprehenderit est ipsum irure dolore.</p>

          </div>
          <div>
          </div>
        </div>
      </section>

      <section className={HomeStyles.donateSection}>
        <div className={HomeStyles.donateLeftDiv}>
          <h4>WELCOME TO ABIANFUND CHARITY</h4>
          <h2>We Help Thousands of Children to Get Their Education</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <div>
            {
              cards.map((cardData, i) => {
                return (
                  <div key={i}>
                    <Image src={cardData.image} alt="" width={100} height={100} />
                    <p>{cardData.title}</p>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className={HomeStyles.donateRightDiv}>
          <label htmlFor="fullName">Full name</label>
          <input type="text" placeholder="Enter your full name..." className="fullName inputStyle" onChange={handleOnChange} />

          <label htmlFor="emailAddress">Email address</label>
          <input type="email" placeholder="Enter your email address..." className="emailAddress inputStyle" onChange={handleOnChange} />

          <label htmlFor="causes">Cause</label>
          <select type="select" className="causes inputStyle" defaultValue={"value 1"} onChange={handleOnChange}>
            <option value="value 1">value 1</option>
            <option value="value 2">value 2</option>
            <option value="value 3">value 3</option>
          </select>

          <label htmlFor="emailAddress">Amount you had given</label>
          <input type="email" placeholder="Enter your email address..." className="emailAddress inputStyle" onChange={handleOnChange} />

          <label htmlFor="paymentMethod">Payment type</label>
          <div className={HomeStyles.radioSelection}>

            <div>
              <input type="radio" name="paymentMethod" value="" id="bKash" className="paymentMethod" onChange={handleOnChange} />
              <label htmlFor="bKash">bKash</label>
            </div>

            <div>
              <input type="radio" name="paymentMethod" value="" id="Rocket" className="paymentMethod" onChange={handleOnChange} />
              <label htmlFor="Rocket">Rocket</label>
            </div>

            <div>
              <input type="radio" name="paymentMethod" value="" id="Nagad" className="paymentMethod" onChange={handleOnChange} />
              <label htmlFor="Nagad">Nagad</label>
            </div>

          </div>

          <button onClick={handleSubmit}>Donate now</button>
        </div>
      </section>

      <section className={HomeStyles.technicalStatics}>
        <p>Greate review for our service</p>
        <h2>Technical Statistics</h2>

        <div className={HomeStyles.statisticsCouter}>
          {
            statistics.map((data, i) => {
              return (
                <div key={i}>
                  <p className={HomeStyles.counterStyle}>{data.counter}+</p>
                  <p>{data.title}</p>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className={HomeStyles.ourCauses}>
        <p>Our Causes</p>
        <h2>Our Causes & help us</h2>

        <div>
          <Carousel />
        </div>
      </section>

      <section className={HomeStyles.abianCharity}>
        <span>Hello Bangak adisad sdss</span>
        <h2>Aute labore officia aute consectetur qui minim nulla culpa.</h2>
        <p>Mollit adipisicing velit mollit eu id minim laborum dolore aute voluptate quis anim laboris. Amet non ad deserunt eiusmod duis. Cupidatat Lorem labore dolor aute dolore commodo fugiat esse ut culpa est. Culpa qui amet aliqua nostrud deserunt ut enim mollit Mollit adipisicing velit mollit eu id minim laborum dolore aute voluptate quis anim laboris. Amet non ad deserunt eiusmod duis. Cupidatat Lorem labore dolor aute dolore commodo fugiat esse ut culpa est. Culpa qui amet aliqua nostrud deserunt ut enim</p>

        <div>
          <button className="btn-primary">Donate now</button>
          <button className="btn-success">Become a volunteer</button>
        </div>

      </section>

      <DevelopmentOnGoing />
    </>
  )
}

export default index;

const cards = [
  {
    title: "Community",
    image: "/static/icons/home/community.png"
  },
  {
    title: "Generous",
    image: "/static/icons/home/generous.png"
  },
  {
    title: "Volunteer",
    image: "/static/icons/home/volunteer.png"
  }
]

const statistics = [
  {
    counter: 2000,
    title: "Fund raised",
    icon: ""
  },
  {
    counter: 2000,
    title: "Completed projects",
    icon: ""
  },
  {
    counter: 2000,
    title: "Donation",
    icon: ""
  },
  {
    counter: 2000,
    title: "Volunteer",
    icon: ""
  },
]