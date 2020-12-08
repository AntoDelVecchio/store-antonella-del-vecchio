const params = [
    {callback: (p1,p2) => (p1._id<p2._id) ? -1 : 1, wording: 'Most recent'},
    {callback: (p1,p2) => p1.cost - p2.cost, wording: 'Lowest price'},
    {callback: (p1,p2) => p2.cost - p1.cost, wording: 'Highest price'}
];

export {params};