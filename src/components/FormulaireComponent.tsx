import React from "react";
import InputFormComponant from "./InputFormComponant";


const FormulaireComponent : React.FC = () : React.JSX.Element => {

    

    
    return (
        <>
            <section id="section-form">

                <header>
                    <h3>Ajouter votre produit</h3>
                </header>
                
                <form >
                    <fieldset>

                        <legend>
                            Information général
                        </legend>

                         <InputFormComponant nameInputComponent="id" valueInputComponent="" handleChangeFunc={() => {}}/>
                         
                    </fieldset>
                   
                </form>
            </section>
        </>
    );
};

export default FormulaireComponent;