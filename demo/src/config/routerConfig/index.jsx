import Home from '../../page/Home';
import About from '../../page/About';
import News from '../../page/News';
import Detail from '../../page/Detali';
export const RouterConfig = [
    { path: '/', exact: true, component: Home },
    { path: '/about', exact: true, component: About },
    { path: '/news', exact: false, component: News },
    { path: '/detail', exact: true, component: Detail },
]
