import React, { useState } from "react";
import styles from "./TokensState.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setBet, setCash } from "../../redux/actions/GameActions";
import { RootState } from "../../redux/reducers";

const TokensState: React.FC = () => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);
  return (
    <div className={styles.tokensContainer}>
      <div className={styles.tokensContainer__tokens}>
        {game.cash >= 1 ? (
          <img
            onClick={() => {
              dispatch(setBet(1));
              dispatch(setCash(-1));
            }}
            className={styles.tokensContainer__token}
            src={require("../../assets/casino-chip1.png")}
            alt="token"
          />
        ) : (
          <div
            style={{
              width: "85px",
              padding: "0 20px",
            }}
          ></div>
        )}
        {game.cash >= 5 ? (
          <img
            onClick={() => {
              dispatch(setBet(5));
              dispatch(setCash(-5));
            }}
            className={styles.tokensContainer__token}
            src={require("../../assets/casino-chip5.png")}
            alt="token"
          />
        ) : (
          <div
            style={{
              width: "85px",
              padding: "0 20px",
            }}
          ></div>
        )}
        {game.cash >= 10 ? (
          <img
            onClick={() => {
              dispatch(setBet(10));
              dispatch(setCash(-10));
            }}
            className={styles.tokensContainer__token}
            src={require("../../assets/casino-chip10.png")}
            alt="token"
          />
        ) : (
          <div
            style={{
              width: "85px",
              padding: "0 20px",
            }}
          ></div>
        )}

        {game.cash >= 25 ? (
          <img
            onClick={() => {
              dispatch(setBet(25));
              dispatch(setCash(-25));
            }}
            className={styles.tokensContainer__token}
            src={require("../../assets/casino-chip25.png")}
            alt="token"
          />
        ) : (
          <div
            style={{
              width: "85px",
              padding: "0 20px",
            }}
          ></div>
        )}
        {game.cash >= 50 ? (
          <img
            onClick={() => {
              dispatch(setBet(50));
              dispatch(setCash(-50));
            }}
            className={styles.tokensContainer__token}
            src={require("../../assets/casino-chip50.png")}
            alt="token"
          />
        ) : (
          <div
            style={{
              width: "85px",
              padding: "0 20px",
            }}
          ></div>
        )}
        {game.cash >= 100 ? (
          <img
            onClick={() => {
              dispatch(setBet(100));
              dispatch(setCash(-100));
            }}
            className={styles.tokensContainer__token}
            src={require("../../assets/casino-chip100.png")}
            alt="token"
          />
        ) : (
          <div
            style={{
              width: "85px",
              padding: "0 20px",
            }}
          ></div>
        )}
        {game.cash >= 500 ? (
          <img
            onClick={() => {
              dispatch(setBet(500));
              dispatch(setCash(-500));
            }}
            className={styles.tokensContainer__token}
            src={require("../../assets/casino-chip500.png")}
            alt="token"
          />
        ) : (
          <div
            style={{
              width: "85px",
              padding: "0 20px",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default TokensState;
