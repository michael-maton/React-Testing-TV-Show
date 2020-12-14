import React from "react";
import { render, screen, wait, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

import { fetchShow as mockFetchShow } from "./api/fetchShow";


jest.mock("./api/fetchShow.js");


test('fetches and renders episode data', async () => {
    mockFetchShow.mockResolvedValueOnce({
        data: {
          image: {
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
          },
          name: "Stranger Things",
          summary: "<p>A really good show</p>",
          _embedded: {
            episodes: [
              {
                id: 1,
                name: "foo",
                image: {
                  medium:
                    "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                },
                number: 1,
                season: 1,
                summary: "bar",
                runtime: 60,
              },
              {
                id: 2,
                name: "funny",
                image: {
                  medium:
                    "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                },
                number: 2,
                season: 1,
                summary: "bunny",
                runtime: 60,
              }
            ],
          },
        },
      });
    render(<App />);

    await wait(() => {

    });
    userEvent.click(screen.getByText(/select a season/i));
    const allSeasons = screen.getAllByText(/season /i);
    // console.log(allSeasons);
    expect(allSeasons).toHaveLength(1);
    expect(mockFetchShow).toHaveBeenCalledTimes(1);
    const s1 = screen.getByText(/season 1/i);
    // console.log(s1);
    userEvent.click(s1);
    const pass = screen.queryByText(/a really good show/i);
    console.log(pass);
    expect(pass).toBeInTheDocument();
});
