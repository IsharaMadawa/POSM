import React, { useState, useEffect } from "react";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [users, setUsers] = useState([]);
  const [users_no, setUsers_no] = useState([]);

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
          setUsers(data.items);
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
          setUsers_no(data.items);
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
        <div className="col-6">
          <h1>EN List</h1>
          <ul>
            {users
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
        <div className="col-6">
          <h1>NO List</h1>
          <ul>
            {users
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
      </div>
    );
  }
}

export default Home;
