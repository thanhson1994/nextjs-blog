import NavBar from './NavBar/NavBar';

export default function Layout({ children }) {

    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
  }