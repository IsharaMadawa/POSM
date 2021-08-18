import React, { useState, useEffect } from "react";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [customers, setCustomers] = useState([]);
  const [assets, setAssets] = useState([]);

  const [customers_no, setCustomers_no] = useState([]);
  const [assets_no, setAssets_no] = useState([]);

  const bearer = "Bearer " + "jegmscAySDI70m4kuSVyV2ELrcLyfR0RoiFIIOhXziw";

  useEffect(() => {
    fetch("https://cdn.contentful.com/spaces/7yn7c4ez524y/entries", {
      method: "GET",
      headers: new Headers({
        Authorization: bearer,
      }),
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCustomers(data.items);
          setAssets(data.includes.Asset);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch(
      "https://cdn.contentful.com/spaces/7yn7c4ez524y/entries?&locale=nb-NO",
      {
        method: "GET",
        headers: new Headers({
          Authorization: bearer,
        }),
      }
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCustomers_no(data.items);
          setAssets_no(data.includes.Asset);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row">
        <div className="col-3">
          <h1>Customer List - EN</h1>
          <ul>
            {customers
              .sort((a, b) => (a.fields.order > b.fields.order ? 1 : -1))
              .map((cus) => (
                <div key={cus.fields.order} className="custom_div">
                  <div>
                    {cus.fields.customerId} - {cus.fields.name}
                  </div>
                </div>
              ))}
          </ul>
        </div>
        <div className="col-3">
          <h1>Customer List - NO</h1>
          <ul>
            {customers_no
              .sort((a, b) => (a.fields.order > b.fields.order ? 1 : -1))
              .map((cus) => (
                <div key={cus.fields.order} className="custom_div">
                  <div>
                    {cus.fields.customerId} - {cus.fields.name}
                  </div>
                </div>
              ))}
          </ul>
        </div>
        <div className="col-3">
          <h1>Asset List - EN</h1>
          <ul>
            {assets.map((asset) => (
              <div key={asset.sys.id} className="custom_div_1">
                <div>
                  <b>{asset.fields.title}</b> - {asset.fields.description}
                </div>
                <div>
                  <img src={asset.fields.file.url}></img>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="col-3">
          <h1>Asset List - NO</h1>
          <ul>
            {assets_no.map((asset) => (
              <div key={asset.sys.id} className="custom_div_1">
                <div>
                  <b>{asset.fields.title}</b> - {asset.fields.description}
                </div>
                <div>
                  <img src={asset.fields.file.url}></img>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
