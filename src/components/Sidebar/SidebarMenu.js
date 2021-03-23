import { Home, Cpu } from 'react-feather';

export const SidebarMenu = () => {

    const title = 'Planta Beta';
    const titleDescription = 'Descripcion corta';

    const description = 'Descripcion corta';

    return (
        <div className="sidebar-menu">
            <div className="sidebar-menu__links">
                <li className="sidebar-menu__title">
                    <p>{title}</p>
                    <p>{titleDescription}</p>
                    
                </li>
                <li className="sidebar-menu__list">
                    <a href="/">
                        <figure className="sidebar-menu__item-figure">
                            <Cpu className="sidebar-menu__item-image" alt="item menu"/>
                        </figure>
                        <p className="sidebar-menu__item-description">{description}</p>
                        <div className="sidebar-menu__item-dropdown-icon"></div>

                    </a>
                </li>

            </div>
        </div>
    )
}
