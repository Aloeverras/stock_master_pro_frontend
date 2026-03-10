import "../scss/App.scss"
import React  from "react";
import FormulaireComponent from "./FormulaireComponent";

type FuncClassNameType = () => string;


const headerClassName  : FuncClassNameType = () => "bg-dark text-white p-3 shadow-sm";
const mainClassName : FuncClassNameType = () => "flex-fill container py-4";
const footerClassName : FuncClassNameType = () => "bg-light border-top py-3 text-center";

const App : React.FC = 

    () : React.JSX.Element => {

        return (
            <>
                <header 
                    id="header-app" 
                    className={headerClassName()}
                >
                    <section>
                        <h1>
                            Stocker master <span><strong>pro</strong></span> !
                        </h1>
                    </section>
                </header>
                
                <main className={mainClassName()}>
                    <section>
                        <h2>Formulaire du produit</h2>
                        <FormulaireComponent/>
                    </section>
                </main>

                <footer className={footerClassName()}>
                    <p>&#60;/&#62; 2026 - Codé avec passion par Aloes DENEVE &copy;</p>
                </footer>
            </>
        );
    
};

export default App;