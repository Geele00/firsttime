import TranslationOutput from "../Components/Translations/TranslationOutput";
import TranslationsForm from "../Components/Translations/TranslationsForm";
import withAuth from "../HOC/withAuth";

const Translation = () => {

    return (
        <>
            <div className="container">
                <section id="translation-text" className="translationForm">
                    <TranslationsForm />
                </section>
                <section id="translation-letters" className="translationOutput">
                    <TranslationOutput />
                </section>
            </div>
        </>
    );
};
export default withAuth(Translation);
