import { useState } from "react";
import { Modal } from '@/components/ui/modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ExoAlgo() {

    const [copySuccess, setCopySuccess] =  useState<string>("");

    const copyToClipboard = async (codeString : string) => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopySuccess('Copié !');
            setTimeout(() => setCopySuccess(''), 2000); // Réinitialise le message après 2 secondes
        } catch (err) {
            setCopySuccess('Échec de la copie');
        }
    };

    return (
        <>
        <div className="container grid grid-cols-2 gap-2 dark:bg-black-100 bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.2]">
            <Pair_impair copyToClipboard={copyToClipboard} copySuccess={copySuccess}/>
            <Palyndrome/>
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
                        <p className="text-black hover:text-blue-600">Écrivez une fonction qui retourne "pair" si le nombre est pair et "impair" sinon.</p>
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
                                <div className="flex rounded bg-gray-700 h-75 p-2">

                                    <SyntaxHighlighter language="javascript" style={nightOwl}>
                                        {codeString}      
                                                                         
                                    </SyntaxHighlighter>
                                        <button
                                            onClick={() => copyToClipboard(codeString)}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                        >
                                            Copier
                                        </button>  
                                        {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>}                                    
                                </div>                                                
                            </div>         
                            <Modal/>    
                         </>             
                        )}
                    </div>
                </div>
        </>
    );

}

export function Palyndrome () {
    const [code, setCode] = useState<string>('');

    return(
    <>
        <div className="bg-slate-400 rounded overflow-hidden shadow-lg">        
            <div className="p-2"> 
                <h2 className="text-black text-center text-xl underline ">Écrire un Algorithme : Palyndrome</h2>
                <p className="text-black hover:text-blue-600">Écrivez une fonction vérifie si un mot est un Palyndrome.</p>
            </div>

            <div className="grid p-2">
                <textarea
                onChange={(e) => setCode(e.target.value)}
                value={code}
                className="rounded mt-2 p-2 h-75"
                />
            </div>

        </div>
    </>
    )
}