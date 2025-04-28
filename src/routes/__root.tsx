import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

export const Route = createRootRoute({
    component: () => (
        <>
            <Header />
            <hr />

            <div
                style={{
                    padding: '1rem',
                    maxWidth: 1080,
                    margin: 'auto',
                }}
            >
                <Outlet />
            </div>
            <TanStackRouterDevtools />
        </>
    ),
})
