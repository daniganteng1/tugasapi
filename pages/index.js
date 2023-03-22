import Head from "next/head";
import { useState } from "react";
export default function Home() {
  const [isi, setIsi] = useState("");
  const [data, setData] = useState(null);

  function Cuaca() {
    fetch(
      `https://api.weatherbit.io/v2.0/current?&city= ${isi}&country=ID&key=88938346f0e84e25a6bc6ce4fa0a73ed`
    )
      .then((result) => result.json())
      .then(({ data }) => setData(data));
  }
  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col mt-5">
            <h1>Cuaca di Indonesia</h1>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-4">
            <div className="input-group mb-3">
              <input
                value={isi}
                onInput={(e) => setIsi(e.target.value)}
                type="text"
                className="form-control "
                placeholder="Cari Kota..."
              />
              <button
                onClick={Cuaca}
                className="btn btn-dark search-button"
                type="button"
              >
                Cari
              </button>
            </div>
          </div>
        </div>
        <div className="row" id="Cuaca">
          {data &&
            data.map((cuaca, kye) => (
              <div className="col-md-3 my-3" key={kye}>
                <div className="card">
                  <img src="awan.png" class="card-img-top" />
                  <div className="card-body">
                    <h5 class="card-title">{cuaca.city_name}</h5>
                    <h6>{cuaca.temp} ℃</h6>
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <h6>Cakupan awan:</h6>
                        {cuaca.clouds}%
                      </div>
                      <div className="col-md-6">
                        <h6>Titik Embun:</h6>
                        {cuaca.dewpt} ℃
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
