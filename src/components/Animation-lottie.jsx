import { useEffect, useState } from "react";
import Lottie from "lottie-react";

// Lottie JSON files are large (hundreds of KB each), so instead of importing
// them statically into the main bundle we load the requested one on demand.
// Pass a `name` matching a file in ../assets/lottie (e.g. "code" -> code.json).
const AnimationLottie = ({ name }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (!name) return;
    let active = true;

    import(`../assets/lottie/${name}.json`)
      .then((mod) => {
        if (active) setAnimationData(mod.default);
      })
      .catch(() => {
        // Missing/failed animation shouldn't break the section.
      });

    return () => {
      active = false;
    };
  }, [name]);

  if (!animationData) return null;

  return (
    <Lottie
      loop
      autoplay
      animationData={animationData}
      style={{ width: "95%" }}
    />
  );
};

export default AnimationLottie;
