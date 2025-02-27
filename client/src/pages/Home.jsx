import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';

//to make our framer motion animation work
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state); //using defined state form store folder

  return (
    <AnimatePresence>
        {/* //check if we r on the intro page i.e home page then we can render the home page data. */}
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'   //change it acc to our project logo
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              {/* <h2 className="head-text">
                LET'S <br className="xl:block hidden" /> Customize IT.
              </h2> */}
              <h2 className="head-text text-2xl xl:text-8xl">
              Let's <br className="xl:block hidden" /> Customize.
              </h2>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5">

              <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false} //simply updating the valtio state for click
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home