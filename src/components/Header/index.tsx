import peter from '@/assets/peter.jpeg'
import banner from '@/assets/Banner.jpeg'
import style from './Header.module.css'
import { Link } from '@tanstack/react-router'
const Header = () => {
    return (
        <div>
            <div>
                <img
                    src={banner}
                    width={'100%'}
                    height={200}
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className={style.container}>
                <div className={style.btnIconWrapper}>
                    <img
                        style={{
                            position: 'relative',
                            borderRadius: '9999px',
                            border: '2px solid #fff',
                            translate: '0 -50%',
                            top: '-12px',
                        }}
                        src={peter}
                        width={80}
                        height={80}
                    />
                    <button className={style.btn}>
                        Contact Me{' '}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                            <path d="m21 3-9 9" />
                            <path d="M15 3h6v6" />
                        </svg>
                    </button>
                </div>
                <h2
                    style={{
                        margin: 0,
                    }}
                >
                    Peter Calabrese
                </h2>
                <p>
                    Fullstack Software Engineer | Developing robust solutions
                    across the entire tech stack, from front-end interfaces to
                    back-end systems and databases.
                </p>
                {/* <a href="https://www.google.com">Google.com</a> */}
                <div
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'space-between',
                    }}
                >
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                    {/* <Link>About</Link> */}
                </div>
            </div>
        </div>
    )
}
export default Header
