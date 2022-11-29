import { useState } from "react";
import { useForm } from "react-hook-form";
import { translationAdd } from "../../Api/Translations";
import { imageArray } from "../../const/image/a.imageArray";
import { useUser } from "../../context/UserContext";

export const translatedArray = [];

const TranslationsForm = () => {
    //Hook
    const { register, handleSubmit } = useForm();

    //Local state
    const { user, setUser } = useUser()
    const [apiError, setApiError] = useState(null);

    const onSubmit = async (data) => {
        translatedArray.length = 0
        let splitString = data.translationText.toLowerCase();
        //These loops will translate users string to sign language
        for (let i = 0; i < splitString.length; i++) {
            for (let j = 0; j < imageArray.length; j++) {
                if (splitString[i] === imageArray[j].letter) {
                    translatedArray.push(imageArray[j])
                }
            }
        }
        if (splitString.length > 0) {
            const [error, result] = await translationAdd(user, splitString)
            if (error !== null) {
                setApiError(error);
            }
            if (result !== null) {
                //Adds users string values into global user state
                setUser({
                    ...user,
                    translations: [...user.translations, splitString]
                });
            }
        }
    };

    return (
        <div className="Container1">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="translation-text" className="translationText">
                    <h1>Translation</h1>
                </label>
                <input
                    type="text"
                    className="translationInput"
                    {...register("translationText")}
                    placeholder="Write here..."
                    autoComplete="off"
                />

                <button type="submit" className="btnTranslate">
                    Translate
                </button>
                {apiError && <p>{apiError}</p>}
            </form>
        </div>
    );
};
export default TranslationsForm;
