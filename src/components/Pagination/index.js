import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst &&
            <Link to={prevPage}
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}>Pagina anterior</Link>
        }

        <p>{currentPage} de {numPages}</p>

        {!isLast &&
            <Link to={nextPage}
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}>Próxima pagina</Link>
        }
    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string
}

export default Pagination;