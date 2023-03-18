import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { Counter } from "../counter/counter";

import { citiesData } from "../../dummy/dummy_cities_data";

import { City } from "../../types/city.types";

export const CitySearch: React.FC = () => {
  const [filter, setFilter] = useState('');

  return (
      <>
          <InputGroup className="mb-3">
              <Form.Control 
                type="text"
                id="search"
                placeholder="Enter City"
                value={filter}
                onChange={event => setFilter(event.target.value)} />
              <InputGroup.Text>
                  <Counter />
              </InputGroup.Text>
          </InputGroup>
          <div>
            <ul>
              {
                citiesData.filter((f: City) => f.longName.includes(filter) || filter === '')
                .map((f: City) => 
                  <li key={JSON.stringify(f)}>
                    {JSON.stringify(f)}
                  </li>
                )
              }
            </ul>
          </div>
          {/* <input className="w-100" type="text" placeholder="Enter City" /> */}
      </>
  );
};
