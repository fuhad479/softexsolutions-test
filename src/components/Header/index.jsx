import TopBar from '../TopBar'

import './index.scss'

export default function Header() {
    return (
        <header className="header">
            <TopBar />
            <div className="main-header">Main Header</div>
        </header>
    )
}