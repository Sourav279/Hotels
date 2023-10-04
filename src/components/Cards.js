import Card from "react-bootstrap/Card";
import building from "../images/building.jpg";
import styles from "./card.module.css";
import heart from "../images/images.png";
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingsLight } from "react-icons/pi";
import { BiBed } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
const Cards = ({ name, location, key, rent, room, bed, bath, size }) => {
  return (
    <Card
      className={styles.maincard}
      key={key}
      style={{ width: "18rem", backgroundColor: "white", borderRadius: "8%" }}
    >
      <img className={styles.image} src={building} alt="building" />
      <div className={styles.label}>For Rent</div>
      <img className={styles.heart} src={heart} alt="heart" />
      <div className={styles.container}>
        <div className={styles.loc}>
          <CiLocationOn />
          {location}
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.details}>
          <div className={styles.items}>
            <div>
              <PiBuildingsLight />
            </div>
            <div>{room}</div>
          </div>
          <div className={styles.items}>
            <div>
              <BiBed />
            </div>
            {bed}
          </div>
          <div className={styles.items}>
            <div>
              <GiBathtub />
            </div>
            {bath}
          </div>
          <div className={styles.items}>
            <div>
              <AiOutlinePlus />
            </div>
            <div>{size}</div>
          </div>
        </div>
        <div className={styles.footer}>
          <div>
            <span>{rent}</span>
            <span style={{ fontSize: 13 }}>/month </span>
          </div>
          <button>Read more</button>
        </div>
      </div>
    </Card>
  );
};
export default Cards;
