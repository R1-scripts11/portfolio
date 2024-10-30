import { useState } from "react";
import { Modal } from '@/components/ui/Modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { MdContentCopy } from "react-icons/md";
import  ExerciceCard  from "@/components/ExerciceCard"

function ExoAlgo() {

    const [copySuccess, setCopySuccess] =  useState<string>("");

    const copyToClipboard = async (codeString : string) => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopySuccess('Copié!');
            setTimeout(() => setCopySuccess(''), 2000); // Réinitialise le message après 2 secondes
        } catch (err) {
            setCopySuccess('Échec de la copie');
        }
    };

    return (
        <>
        <h1 className="text-white text-center text-2xl underline ">Exercices ALGO avec javascript !</h1>
            <div className="container grid grid-cols-2 gap-2 dark:bg-black-100 bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.2]">
                <Pair_impair copyToClipboard={copyToClipboard} copySuccess={copySuccess}/>
                <Palyndrome/>
                <ExerciceCard 
                    Title="ee" 
                    Consigne="dd" 
                    Reponse="dd" 
                    InputType="d"
                    Explication="fvze"
                />
            </div>                
        </>
    );
}

export default ExoAlgo;             
    
type PairImpairProps = {
    copyToClipboard: (text: string) => void;
    copySuccess: string;
};


export function Pair_impair ( { copyToClipboard, copySuccess }: PairImpairProps ) {

    const [nombre, setNombre] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [resultat, setResultat] = useState<string>("");
    const [seeReponse, set_seeReponse] = useState<boolean>(false);

    const voirRéponse = () => {
        if(seeReponse == false){
            set_seeReponse(true)
        }else{
            set_seeReponse(false)
        }
    }

    // Fonction pour exécuter le code saisi par l'utilisateur
    const executerCode = () => {
        try {
            // Créer une fonction en utilisant le code de l'utilisateur
            const userFunction = new Function("nombre", code);
            const num = parseInt(nombre);
            
            // Vérifier que l'entrée utilisateur est bien un nombre
            if (isNaN(num)) {
                setResultat("Veuillez entrer un nombre valide.");
                return;
            }

            // Exécuter le code de l'utilisateur et afficher le résultat
            const resultatExecution = userFunction(num);
            setResultat(`Résultat : ${resultatExecution}`);
        } catch (error) {
            setResultat("Erreur dans le code saisi.");
        }
    };

    const codeString = `return nombre % 2 === 0 ? 'pair' : 'impair';`;

    return (
        <>
                <div className="bg-slate-400 rounded overflow-hidden shadow-lg">

                    <div className="p-2"> 
                        <h2 className="text-black text-center text-xl underline ">Écrire un Algorithme : Pair ou Impair</h2>
                        <p className="text-black hover:text-blue-600">Écrivez une fonction qui retourne &quot;pair&quot; si le nombre est pair et &quot;impair&quot; sinon. LA VARIABLE DOIT S'APPELER 'nombre' et il faut juste écrire le contenu de la fonction.</p>
                    </div>

                    <div className='grid p-2'>
                        <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            rows={4}
                            cols={50}
                            className="rounded col-span-2"
                        />

                        <div className='col-span-2 flex items-center space-x-4'>
                            <input
                                type="text"
                                placeholder="Entrez un nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="rounded p-2 mt-2 h-75"
                            />
                            {resultat && <div className="rounded bg-white-100 h-75 p-2 mt-2">{resultat}</div>}
                        </div>
                    </div>

                    <div className="p-2 grid grid-cols-2 gap-2">
                        <button onClick={executerCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 col-span-1">Exécuter le code</button>
                        <button onClick={voirRéponse} className={`${ seeReponse ? "bg-orange-500 hover:bg-orange-700" : "bg-green-500 hover:bg-green-700"} text-white font-bold rounded p-2 col-span-1`}>{seeReponse ? "Masquer réponse" : "Voir réponse"}</button>
                        {seeReponse && (
                        <>
                            <div className="col-span-2">
                                <div className="flex rounded bg-gray-700 h-75 p-2 w-full">

                                    <SyntaxHighlighter language="javascript" style={nightOwl} className="w-full">
                                        {codeString}      
                                                                         
                                    </SyntaxHighlighter>
                                        <button
                                            onClick={() => copyToClipboard(codeString)}
                                            className="text-white font-bold py-1 px-4"
                                            style={{ background: "rgb(1, 22, 39)" }}
                                        >
                                        {copySuccess ? ( <p className="text-green-500 mt-2">{copySuccess}</p> ) : ( <MdContentCopy size={20} />)} 
                                        </button>  
                                                                           
                                </div>                                                
                            </div>         
                            <Modal Explication="fzef"/>    
                         </>             
                        )}
                    </div>
                </div>
        </>
    );

}

export function Palyndrome () {
    const [code, setCode] = useState<string>('');
    const [ motDonne, setMotDonne] = useState<string>('')
    const [resFonction, setResFonction] = useState<string>('')
    const [showReponse, setShowReponse] = useState<boolean>(false);


    function executeCode(){
        if(motDonne == ""){
            setResFonction('Entrez un mot')
        }else{
            try {
                const userFunction = new Function('mot', code);
                const result = userFunction(motDonne);
                console.log(result);
                setResFonction(result);
            } catch (error) {
                console.error("Erreur de syntaxe :", error);
                setResFonction("Erreur dans le code de la fonction");
            }
        }

    }

    function _showReponse () {
        if(showReponse == false){
            setShowReponse(true);
        }else{
            setShowReponse(false);
        }
    }

    const reponse = 'if ((mot.split("").reverse().join("")) == mot){return "palyndrome"}else{return "ce mot n\'est pas un palyndrome"}'
    return(
    <>
        <div className="bg-slate-400 rounded overflow-hidden shadow-lg">        
            <div className="p-2"> 
                <h2 className="text-black text-center text-xl underline ">Écrire un Algorithme : Palyndrome</h2>
                <p className="text-black hover:text-blue-600">Écrivez une fonction vérifie si un mot est un Palyndrome. LA VARIABLE DOIT S'APPELER 'mot'.</p>
            </div>

            <div className="grid p-2">
                <textarea
                onChange={(e) => setCode(e.target.value)}
                value={code}
                className="rounded mt-2 p-2 h-75"
                />
            </div>

            <div className="grid grid-cols-2 space-x-4 p-2">
                <input 
                id="mot"
                type="text"
                className="rounded p-2 col-span-1"
                value={motDonne}
                onChange={(e) => setMotDonne(e.target.value)}
                required
                />
                {resFonction && ( <div className="rounded bg-white-100 p-2"> {resFonction} </div>)}
            </div>

            <div className="grid  grid-cols-2 p-2 gap-4">
                <button onClick={executeCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 col-span-1">Exécuter le code</button>
                <button onClick={_showReponse} className={`${ showReponse ? "bg-orange-500 hover:bg-orange-700" : "bg-green-500 hover:bg-green-700" }  text-white font-bold rounded p-2 col-span-1`}> { showReponse ? 'Masquer la réponse' : 'Voir la réponse'}</button>
                {showReponse && (
                    <div className="rounded bg-gray-700 h-75 p-2 w-full col-span-2">
                        <SyntaxHighlighter language="javascript" style={nightOwl} className="w-full">
                            {reponse}      
                        </SyntaxHighlighter>                                                                            
                    </div>      
                )}
            </div>
                
        </div>
    </>
    )
}