import React from 'react'
import { Link, useLocation, useResolvedPath } from 'react-router-dom'

function Breadcrumb() {
    const match = useLocation();
    // const location = useResolvedPath(match.path)
    console.log(match);

    const pathSegments = match.pathname.split('/').filter(segment => segment !== '')
    console.log(pathSegments)

  return (
    <div>
        <nav>
            {pathSegments.map((segment, index) => (
                <div key={segment}>
                    <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                        {segment}
                    </Link>
                    {index !== pathSegments.length -1 && <span></span>}
                </div>
            ))}
        </nav>
    </div>
  )
}

export default Breadcrumb

// console.log(2+ 2)