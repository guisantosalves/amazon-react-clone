import React from "react";
import "./css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/71+175b6EkL._SX3000_.jpg"
        alt="amazon"
      />

      {/* product will have id, tittle, rating, image */}
      <div className="home__row">
        <Product
          id="2131312"
          tittle="mouse"
          price={11.22}
          rating={5}
          image="https://m.media-amazon.com/images/I/51nwegA8VdL._AC_SY450_.jpg"
        />
        <Product
          id="2131312"
          tittle="Echo Dot (4ª Geração): Smart Speaker com Alexa - Cor Preta"
          price={11.22}
          rating={5}
          image="https://m.media-amazon.com/images/I/51nwegA8VdL._AC_SY450_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="2131312"
          tittle={`Novo Echo Show 5 (2ª Geração, versão 2021): Smart Display de 5" com Alexa e câmera de 2 MP - Cor Preta`}
          price={11.22}
          rating={5}
          image="https://m.media-amazon.com/images/I/51nwegA8VdL._AC_SY450_.jpg"
        />
        <Product
          id="2131312"
          tittle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
          price={11.22}
          rating={5}
          image="https://m.media-amazon.com/images/I/51nwegA8VdL._AC_SY450_.jpg"
        />
        <Product
          id="2131312"
          tittle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
          price={11.22}
          rating={5}
          image="https://m.media-amazon.com/images/I/51nwegA8VdL._AC_SY450_.jpg"
        />
      </div>

      <div className="home__row exemplo">
      <Product
          id="2131312"
          tittle="moLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everuse"
          price={11.22}
          rating={5}
          image="https://m.media-amazon.com/images/I/51nwegA8VdL._AC_SY450_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
