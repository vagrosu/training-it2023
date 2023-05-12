import React, {useEffect, useState} from 'react';
import {myPassions} from '../data/passions';
import styles from './Home.module.scss';
import PassionCard from "../components/cards/PassionCard/PassionCard";
import PassionInput from "../components/PassionInput/PassionInput";

function Home() {
  const [passions, setPassions] = useState(myPassions);
  const [showForm, setShowForm] = useState(false);
  const [passionImage, setPassionImage] = useState("");
  const [passionTitle, setPassionTitle] = useState("");
  const [passionDescription, setPassionDescription] = useState("");
  const [passionImportance, setPassionImportance] = useState(0);
  const isCompleted = !!passionDescription && !!passionImportance && !!passionTitle;

  const onAddPassion = () => {
    setPassions([...passions, {
      title: passionTitle,
      description: passionDescription,
      importance: passionImportance,
      image: passionImage
    }])
    setPassionImage("");
    setPassionTitle("")
    setPassionDescription("")
    setPassionImportance(0)
    setShowForm(false)
  }

  useEffect(() => {
    const sortedPassions = [...passions.sort((passion1, passion2) => passion1.importance > passion2.importance)]
    setPassions(sortedPassions);
  }, [passions.length]);

  return <div>
    <h1>My Passions:</h1>
    {passions.length ?
      <div className={styles.cardsContainer}>
        {passions.map((passion, index) => (<PassionCard
          title={passion.title}
          description={passion.description}
          importance={passion.importance}
          image={passion.image}
          key={index}
        />))}
      </div> :
      <div>You have no passions</div>
    }

    <button onClick={() => setShowForm(!showForm)}>{!showForm ? "Show" : "Hide"} form</button>
    {showForm && <div>
      <PassionInput name={"Title"} value={passionTitle} onChange={setPassionTitle}/>
      <PassionInput name={"Description"} value={passionDescription} onChange={setPassionDescription}/>
      <PassionInput name={"Image"} value={passionImage} onChange={setPassionImage}/>
      <PassionInput name={"Importance"} value={passionImportance} onChange={setPassionImportance} type={"number"}/>
      <button onClick={onAddPassion} disabled={!isCompleted}>Add passion</button>
    </div>}
  </div>
}

export default Home;