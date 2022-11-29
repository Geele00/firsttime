import { translatedArray } from "./TranslationsForm";
console.log(translatedArray);

const TranslationOutput = () => {

    //Maps/Loops through list of sign languages images 
    const availableLetters = translatedArray.map((translatedLetter, index) => {
        return (
            <img key={index} src={translatedLetter.image} alt={translatedLetter.letter} width="50" />

        )
    })
    console.log(availableLetters);
    return (
        <section className="Display">
            {/* Signs display here */}
            {availableLetters}
        </section>
    )
}
export default TranslationOutput
