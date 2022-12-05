import Head from "next/head"
import layout from './Layout.module.scss'

import Particle from './particle/Particle'

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>MultiSim</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    rel="preload"
                    href="/fonts/Montserrat-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href={`https://fonts.googleapis.com/css2?family=Roboto&display=swap`} rel="stylesheet" />

            </Head>
            <div className={layout.container}>
                {children}
            </div>
            <Particle />
        </>
    )
}

