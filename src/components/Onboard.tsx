import { motion } from "framer-motion";
import "./onBoard.css";

interface IOnboard {
  text: string;
  img: string;
}
const Onboard = ({ text, img }: IOnboard) => {
  return (
    <div className="onboard-container">
      <div className="onboard-group">
        <div className="onBoard-image-container">
          <img className="onboard-image" src={img} alt="quiz" />
        </div>
        <p>{text}</p>
        <div className="onboard-button-container">
          <motion.button
            whileTap={{
              boxShadow:
                "inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff",
            }}
            className="btn skip"
          >
            skip
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: "blue", color: "#EBEBEB" }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            className="btn next"
          >
            next
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
