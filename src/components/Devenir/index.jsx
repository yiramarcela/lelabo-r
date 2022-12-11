import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from './style.module.scss'
import clsx from "clsx";
import useInfoPagesData from "../../hooks/useInfoPagesData";

const Devenir = ({ isOpenMenu, data, filterData, pageKey }) => {
  const history = useNavigate();
  const devenirPageData = useInfoPagesData(data, filterData, pageKey);

  return (
    !isOpenMenu && (
      <div className="principal">
        <button
          className="btn_close"
          onClick={() => {
            history("/submenu");
          }}
        >
          <ArrowBackIcon />
        </button>
        <div className={clsx([styles.devenir__container, "detail"])}>
          <h2>Devenir</h2>
          <p>Cliquez sur le bouton pour ouvrir le formulaire</p>
          <a
            href={devenirPageData.Contenu}
            target='_blank'
            rel="noreferrer">
            <button
              className={styles.devenir__button}
            >
              <p className={styles.devenir__button__text}>
                {devenirPageData.Name}
              </p>
            </button>
          </a>
        </div>
      </div>
    )
  );
};

export default Devenir;