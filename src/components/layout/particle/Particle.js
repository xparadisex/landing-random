import Particles from 'react-particles-js'
import { ParticleConfig, ParticleConfig2, ParticleConfig3 } from './ParticleConfig'

export default function Particle() {
    return (
        <>
            <Particles params={ParticleConfig2} />
            <Particles params={ParticleConfig3} />
            <Particles params={ParticleConfig} />
        </>
    );
}