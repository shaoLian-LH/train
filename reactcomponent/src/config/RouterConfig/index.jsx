import MainTab from '../../page/MainTab';
import Battle from '../../page/Battle';
import BattleResult from '../../page/BattleResult';
export const RouterConfig = [
    { path: '/', exact: true, component: MainTab },
    {
        path: '/battle', 
        exact: false,
        routes: [
            { 
                path: '/battle', 
                exact: false, 
                component: Battle
            },
            { 
                path: '/battle/result', 
                exact: true, 
                component: BattleResult
            }
        ]
    },
];
export default RouterConfig;