import Header from "./Header/Header";
import Container from './Container/Container'
import styles from './MainLayout.module.scss'

export default function MainLayout({ children }) {
    console.log('children', children)
    return (
        <main className={styles.mainLayout}>
            <Header />
            <Container>
                {children}
            </Container>
        </main>
    )
}
