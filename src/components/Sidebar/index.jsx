import React from 'react';
import { Grid } from 'react-feather';
import { toast } from 'react-toastify';
import Logo from '../../assets/images/logo/logo.png';
import { SidebarMenu } from './SidebarMenu';

const Sidebar = () => {
    const notify = () => toast("Wow so easy!");
    return (
        <aside className="sidebar">
            <div className="sidebar__wrapper">
                <Grid className="sidebar__toggle" onClick={notify} />
                <a href="/">
                    <figure className="sidebar__figure">
                        <img clasName="sidebar__logo img-fluid" src={Logo} alt={'Logo'}/>
                    </figure>
                </a>
                <SidebarMenu />
            </div>
        </aside>
    )
}

export default Sidebar
