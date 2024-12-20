import { useState } from "react";
import CurrentWordIndex from "../components/CurrentWordIndex";
import AudioPlayer from "../components/AudioPlayer";
import words from "../../data/animals";

function Animals() {
  const [currentImage, setCurrentImage] = useState();
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Initial index of the current word

  // Handle changes to the word index from the CurrentWordIndex component
  const handleWordChange = (newIndex, image) => {
    setCurrentImage(image); // Set the current image
    setCurrentWordIndex(newIndex);
  };

  return (
    <div
      style={{
        backgroundImage: currentImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Animals</h1>
      <CurrentWordIndex words={words} onWordChange={handleWordChange} />
      <AudioPlayer currentWordIndex={words[currentWordIndex]} />
    </div>
  );
}

export default Animals;
