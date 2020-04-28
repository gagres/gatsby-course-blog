import React, { useState, useEffect } from 'react'
import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/heroicons-solid/LightBulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { ListUl as List } from '@styled-icons/boxicons-regular/ListUl'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled';

const MenuBar = () => {
    const [theme, setTheme] = useState(null)

    const isDarkMode = theme === 'dark'

    useEffect(() => {
        setTheme(window.__theme);
        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    const [display, setDisplay] = useState(null)

    const isListMode = display === 'list'

    useEffect(() => {
        setDisplay(window.__display);
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    const themeColor = getThemeColor();

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink to="/" 
                    cover
                    direction="left"
                    bg={themeColor}
                    duration={0.6}
                    title="Voltar para a Home">
                    <S.MenuBarItem>
                        <Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink to="/search/" 
                    cover
                    direction="left"
                    bg={themeColor}
                    duration={0.6}
                    title="Pesquisar">
                    <S.MenuBarItem>
                        <Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>
            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarItem title="Mudar o tema" 
                    onClick={() => {
                        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
                    }} 
                    className={theme}>
                    <Light />
                </S.MenuBarItem>
                <S.MenuBarItem title="Mudar a visualização"
                    onClick={() => {
                        window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
                    }}>
                    {isListMode ? <Grid /> : <List />}
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo">
                    <Arrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar;