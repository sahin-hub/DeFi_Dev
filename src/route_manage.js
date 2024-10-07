import LockIcon from '@material-ui/icons/Lock';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import TokenLock from './views/TokenLock/TokenLockManage.js';
import LiquidityLock from './views/LiquidityLock/LiquidityLockManage.js';
import PresaleManage from './views/Presale/PresaleManage.js';
import CreateToken from './views/CreateToken/CreateTokenManage.js';

const dashboardRoutes = [
  {
    path: '/tokenlock',
    name: 'Token Lock',
    rtlName: 'التطور للاحترافية',
    icon: LockIcon,
    component: TokenLock,
    layout: '/manage',
  },
  {
    path: '/liquiditylock',
    name: 'Liquidity Lock',
    rtlName: 'التطور للاحترافية',
    icon: LockIcon,
    component: LiquidityLock,
    layout: '/manage',
  },
  {
    path: '/presale',
    name: 'Presale',
    rtlName: 'لوحة القيادة',
    icon: MonetizationOnIcon,
    component: PresaleManage,
    layout: '/manage',
  },
  {
    path: '/CreateTokenManage',
    name: 'CreateToken',
    rtlName: 'لوحة القيادة',
    icon: AddCircleOutlineIcon,
    component: CreateToken,
    layout: '/manage',
  },
];

export default dashboardRoutes;
