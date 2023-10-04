import Card from "./Cards";
import styles from "../App.module.css";
import hotel from "./hotl";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const navs = ["New York", "Mumbai", "Paris", "London"];

const Container = () => {
  const [nav, setNav] = useState(0);
  const [city, setcity] = useState("New York");
  const [visibleCards, setVisibleCards] = useState(6);
  const filteredHotels = hotel.filter(item => item.city === city);
  const CardArray = filteredHotels.slice(0, visibleCards).map((user, i) => {
    return (
      <NavLink to="/property/:id" className={styles.links}>
        <Card
          className={styles.links}
          key={hotel[i].id}
          location={hotel[i].location}
          name={hotel[i].name}
          rent={hotel[i].rent}
          room={hotel[i].room}
          bed={hotel[i].bed}
          bath={hotel[i].bath}
          size={hotel[i].size}
        />
      </NavLink>
    );
  });
  const loadMoreCards = () => {
    setVisibleCards(visibleCards + 3);
  };
  return (
    <div className={styles.App}>
      <h1>Featured Listed Property</h1>
      <p>
        Real estate can be brought, sold, leased, or rented, and can be a <br />
        valuable investement opportunity.The value of real estate can be ...
      </p>
      <div className={styles.area}>
        <div className={styles.buttons}>
          <div className={styles.header}>
            {navs.map((el, i) => (
              <div>
                <button
                  className={nav === i ? styles.active : ""}
                  onClick={() => {
                    setNav(i);
                    setcity(navs[i]);
                  }}
                >
                  {el}
                </button>
              </div>
            ))}
          </div>
          <div className={styles.view}>
            <span>View all</span>
            <span>
              <BsArrowRight />
            </span>
          </div>
        </div>

        <div className={styles.maincard}>{CardArray}</div>
        {visibleCards < hotel.length && (
          <button className={styles.show} onClick={loadMoreCards}>
            <GiSandsOfTime />
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Container;
