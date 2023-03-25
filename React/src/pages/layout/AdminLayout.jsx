import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <aside>
                <nav>
                    <ul>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                    </ul>
                </nav>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout