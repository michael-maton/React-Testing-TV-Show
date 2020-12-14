import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Episodes from "./Episodes";

test("Episodes component renders correctly", ()=>{
    render(<Episodes episodes={[]} />);
});

test("renders new episodes when episodes data is passed", ()=>{
    const { rerender } = render(<Episodes episodes={[]}/>);
    
    let episodeObjects = screen.queryAllByTestId("episode");
    expect(episodeObjects).toHaveLength(0);
    console.log(episodeObjects);

    const episodes = [
        {
            name: "Episode 1",
            id:1,
            season: 1,
            number: 1,
            runtime: 60,
            summary: "episode 1 summary"
        },
        {
            name: "Episode 2",
            id:2,
            season: 2,
            number: 2,
            runtime: 60,
            summary: "episode 2 summary"
        },
        {
            name: "Episode 3",
            id:3,
            season: 3,
            number: 3,
            runtime: 60,
            summary: "episode 3 summary"
        },
    ];

    rerender(<Episodes episodes={episodes} />);
    episodeObjects = screen.queryAllByTestId("episode");
    expect(episodeObjects).toHaveLength(3);
}); 