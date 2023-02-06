import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-row justify-items-center items-center h-screen bg-black">
      <div className="basis-1/2 flex flex-col h-full w-full px-48 py-40 justify-between items-start">
        <img src="./images/logotipo.png" alt="" width="200px" height="22px" />

        <div>
          <h2
            className="text-white text-lg font-sans font-semibold mb-8"
            style={{ lineHeight: "54px" }}
          >
            Alugue um <br /> carro de maneira <br /> simples e fácil
          </h2>
          <p
            className="text-white"
            style={{ fontSize: "20px", width: "331px" }}
          >
            Vários modelos para você dirigir seguro, com conforto e segurança.
          </p>
        </div>

        <Link to="/inicio">
          <button className="cursor-pointer bg-primary py-7 p-20 text-white font-medium text-xl hover:bg-primary-hover transition">
            Começar agora
          </button>
        </Link>
      </div>
      <div className="basis-1/2 flex items-center justify-items-center">
        <img src="./images/home-car.png" alt="" />
      </div>
    </div>
  );
}
