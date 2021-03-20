const decisions = [
    {
        question: "career choice",
        choices: [
            {
                title: "work at construction site",
                desc: "very tiring, risk of injuries, pay: $2.76/day",
                price: {
                    money: 2.76,
                    nutrition: 0,
                    next: -1 // -1 means random
                }
            }, 
            {
                title: "sell rice pudding",
                desc: "profit: $1.50/day",
                price: {
                    money: 1.55,
                    nutrition: 0,
                    next: 2
                }
            }
        ],
    },
    {
        question: "oh no! you broke your leg at the construction job. you need to heal to work and continue providing of the family, but medical bills are high.",
        choices: [
            {
                title: "hospital",
                desc: "cost: $100",
                price: {
                    money: 100,
                    time: 6*7, // ??
                    next: 2
                }
            }, 
            {
                title: "no hospital",
                desc: "we need to save the money. i'll pay someone (with no official expertise) to wrap it up",
                price: {
                    money: 20,
                    nutrition: 0,
                    next: 0// no one wants to hire them for a job: GAME OVER
                }
            }
        ],
    },
    {
        question: "meal time!",
        choices: [
            {
                title: "rice",
                desc: "cost: $0.50. relatively cheap, enough for everyone, but not so nutritious.",
                price: {
                    money: 0.5,
                    nutrition: 2,
                    next: 4
                }
            }, 
            {
                title: "beans",
                desc: "cost: $1. more costly, but our nutrition is important. we need nutrition to stay strong to work, and my children need to grow and stay healthy.",
                price: {
                    money: 1,
                    nutrition: 0,
                    next: 4
                }
            }
        ],
    },
    {   // if construction work
        question: "at work, you feel faint - your energy levels are very low. food for you or save the money for your children?",
        choices: [
            {
                title: "food for me",
                desc: "if something happens to me, who will take care of my children?",
                price: {
                    money: 0.5,
                    nutrition: -2,
                    next: -1
                }
            }, 
            {
                title: "save for my children",
                desc: "i can hold out for a bit longer. i need to invest money in their education, their future.",
                price: {
                    money: 0,
                    nutrition: 2,
                    next: -1
                }
            }
        ],
    },
    {
        question: "the landlord is here...",
        choices: [
            {
                title: "pay my rent",
                desc: "cost: $5",
                price: {
                    money: 2,
                    nutrition: 0,
                    next: 9 // win
                }
            }, 
            // {
            //     title: "borrow money",
            //     desc: "i'm going to borrow money to pay my rent so that i can continue paying for my children's education.",
            //     price: {
            //         money: 2, // interest???
            //         nutrition: 0,
            //         next: -1
            //     }
            // },
            {
                title: "don't pay my rent",
                desc: "we'll live in a makeshift house under the bridge. the conditions are worse, but we save $5/month",
                price: {
                    money: 0,
                    nutrition: 0,
                    next: -1
                }
            }
        ],
    },
    {
        question: "it was a dark and stormy night under the bridge...",
        choices: [
            {
                title: "go to work",
                desc: "i'm putting my children at risk, but if i don't work, who will?",
                price: {
                    money: 0, // temp: should be the daily income
                    nutrition: 0,
                    next: -1
                }
            }, 
            {
                title: "stay home",
                desc: "we're going to miss today's income, but what if something happens to my children while i'm gone? all that i do is for them anyways.",
                price: {
                    money: 0,
                    nutrition: 0,
                    next: -1
                }
            }
        ],
    },
];

// {
//     question: "question 2",
//     choices: [
//         {
//             title: "choice 1",
//             desc: "desc 1",
//             nextIndex: 1, 
//         }, 
//         {
//             title: "choice 2",
//             desc: "desc 2",
//             nextIndex: 2
//         }
//     ],
// },

export default decisions;