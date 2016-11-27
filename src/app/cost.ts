export class Cost {
    costId: number;
    name: string;
    creatorName: string;
    type: string;
    amount: number;
    participantCount: number;
}

export const COSTS: Cost[] = [
    {costId: 1, name: 'test1', type: 'test1', creatorName: 'user1', amount: 100, participantCount: 2 },
    {costId: 2, name: 'test2', type: 'test2', creatorName: 'user2', amount: 79.5, participantCount: 5 },
    {costId: 3, name: 'test3', type: 'test1', creatorName: 'user1', amount: 199, participantCount:  2},
    {costId: 4, name: 'test4', type: 'test3', creatorName: 'user3', amount: 16.32, participantCount: 4 },
    {costId: 5, name: 'test5', type: 'test2', creatorName: 'user3', amount: 128, participantCount: 3 },
    {costId: 6, name: 'test6', type: 'test3', creatorName: 'user5', amount: 7.45, participantCount: 4 },
    {costId: 7, name: 'test7', type: 'test1', creatorName: 'user2', amount: 12, participantCount: 3 },
    {costId: 8, name: 'test8', type: 'test5', creatorName: 'user2', amount: 978.50, participantCount: 5 },
]