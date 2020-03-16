import React from 'react';
import renderer from 'react-test-renderer';

import Items from './Items';

it ("renders when there are no items", () => {
    const tree = renderer.create(
        <Items />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it ("renders when there is one item", () => {
    const tree = renderer.create(
        <Items items={["Eath"]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it ("renders when there are multiple items", () => {
    const tree = renderer.create(
        <Items items={['Sun', 'Earth', 'Moon', 'Saturn']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})