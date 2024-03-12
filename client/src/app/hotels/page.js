"use client";
import React from "react";
import styles from "./style.module.css";
import Nav from "@/components/navBar/page";
import SearchItem from "../../components/search/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Slider from "@mui/material/Slider";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useLocation } from "react-router-dom";

//slider
function valuetext(value) {
  return `${value}`;
}
//star rating
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const List = () => {
  // const location = useLocation()
  // const [destination, setDestination] = useState(useLocation.state.destination)
  // const [date, setDate] = useState(useLocation.state.date)
  // const [options, setOptions] = useState(useLocation.state.options)
  // console.log('fff',location)
  const [value, setValue] = React.useState([2000, 20000]);
  const [rateValue, setRateValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   
    <div>
      <Nav />
      <Header />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>

            <div className={styles.lsItem}>
              <label>Options</label>
              <Box sx={{ width: 300 }}>
                <Slider
                  min={2000}
                  max={20000}
                  getAriaLabel={() => "hotel"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <div>
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={rateValue}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setRateValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  {value !== null && (
                    <Box sx={{ ml: 2 }}>
                      {labels[hover !== -1 ? hover : value]}
                    </Box>
                  )}
                </Box>
              </div>

              <div className={styles.lsOptions}>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className={styles.lsOptionInput} />
                </div>
                <h1>catagorary</h1>
                <div className={styles.lsOptionItem}>
                
                  <span className={styles.lsOptionText}>
                    
                   Hotel
                  </span>
                  
                  <input type="number" className={styles.lsOptionInput} />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder="nnnn"
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={styles.lsOptionInput}
                    placeholder="nnn"
                  />
                </div>
                
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className={styles.listResult}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default List;
