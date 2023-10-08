import React from 'react'
import EmptyGlobe from '../../EmptyGlobe'

const Quakes = () => {
  return (
    <div className='quakesContainer'>
        <div className='information'>
          <h1>Earthquakes on Earth?</h1>
          <h3>What are Earthquakes on Earth?</h3>
          <p>An earthquake is an intense shaking of Earth's surface produced by a release of accumulated
            energy in the form of seismic waves. Earthquakes happen in the earth's crust. Since it is in
            the mantle where the mantle convection processes occur, which generate the movement of the
            tectonic plates and the subduction processes.
            Likewise, the crust is a solid and fragile region susceptible to fractures and the generation
            of faults through which the energy of earthquakes propagates.
            The continuous movement of the tectonic plates is what causes an accumulation of friction
            energy between the plates, which in turn when the friction force is overcome, a release of
            the energy triggered is generated in the form of vibrations that propagate through the crust
            and faults or fractures.
            The point where the earthquake is generated is called the hypocenter, which is located on the
            surface of the fault. The projection of that hypocentral point toward the outer part of the
            cortex is called the epicenter. The scale of intensity with which an earthquake is felt varies
            depending on the distance from the point where the earthquake occurs.
            The greatest intensity will be felt at the epicenter and as you move away from this point the
            intensity decreases, always depending on geological factors such as the type of rock found.
            Earthquakes can be felt hundreds or thousands of kilometers away.
          </p>
          <h3>How Do We Measure Earthquakes?</h3>
          <p>To detect earthquakes, instruments called seismometers are used, which measure seismic waves
            and generate seismograms, which are graphs of the movement caused by the waves. The seismograph
            perceives the P (primary) wave, which is a longitudinal wave that travels parallel to the
            direction of wave propagation. The S (secondary) wave is then detected traveling transverse to
            the direction of propagation.
            The difference in arrival from one wave to another is due to the fact that the P wave travels at
            a higher speed and is capable of traveling through any type of material, while the S wave is
            slower and only travels through solid materials. These different velocities make it possible to
            calculate the arrival time of the S wave and thereby calculate the location of the epicenter.
          </p>
          <h3>Do Earthquakes Only Happen on Earth?</h3>
          <p>Earth isn’t the only place where there is seismic activity. Scientists have also measured quakes
            on Earth's Moon, and have see evidence for seismic activity on Mars, Venus and even in several
            moons of Jupiter!
            Although, there are not seismometers on other planets, we can tell that some worlds have
            earthquakes or used to have them in the past, because there are cracks at the surface. The
            appearance of these hits, including cracked ice such as in Europa and Enceladus, are result of
            quakes. Quakes of all sizes can tell us a lot about the inside of a planet.
          </p>
          <h1>Earthquakes on the Moon</h1>
          <h3>How do we detect moonquakes?</h3>
          <p>A technique involves an instrument that responds to ground surface movements by vibrating.
            This vibration occurs because of the inertia of a central lever and a mass attached to its end.
            The electronic system detects this vibration through the capacitor effect of the mass at the
            lever's end.
            To maintain precise alignment, a set of internal motors ensures that the seismometers remain
            level within a few seconds of arc.
          </p>
          <h3>What types of events have been detected?</h3>
          <p>It can be classificated as:
            - Naturally occurring deep moonquakes
            - Naturally occurring shallow moonquakes
            - Naturally occurring impacts (meteorites)
            - Artificial impacts (booster rockets and Apollo lunar modules)
            - Thermal moonquakes</p>
          <h3>Does an earthquake feel different from a moonquake?</h3>
          <p>Yes, because seismic waves are attenuated much less on the Moon than they are on Earth.
            Seismic wave attenuation is enhanced at high temperatures and in the presence of water, and the
            low attenuation on the Moon indicates a cold, dry interior, but a very strong scattering.
          </p>
          <h3>How long does a moonquake last?</h3>
          <p>It can last from minimum 10 minutes up to an hour, but it has been registered a moonquake
            duration of 5 hours.
          </p>
        </div>
      <EmptyGlobe />
    </div>
  )
}

export default Quakes