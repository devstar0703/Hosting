import * as React from 'react';

import { 
    DashboardMain, 
} from './styled/Dashboard.styled';

import BestMovies from 'src/components/Dashboard/BestMovies';

const Dashboard = (props) => {

    return (
        <DashboardMain>
            <BestMovies />
        </DashboardMain>
    )
}

export default Dashboard;